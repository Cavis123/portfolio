document.addEventListener("DOMContentLoaded", () => {
  const THEME_KEY = "preferred-theme";

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

  const toggle = document.getElementById("themeToggle");
  const applyThemeState = (enabled) => {
    if (enabled) {
      document.documentElement.setAttribute("data-theme", "high-contrast");
      toggle?.setAttribute("aria-pressed", "true");
      localStorage.setItem(THEME_KEY, "high-contrast");
      return;
    }

    document.documentElement.removeAttribute("data-theme");
    toggle?.setAttribute("aria-pressed", "false");
    localStorage.removeItem(THEME_KEY);
  };

  applyThemeState(localStorage.getItem(THEME_KEY) === "high-contrast");

  toggle?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyThemeState(current !== "high-contrast");
  });

  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  const setMenuOpen = (open) => {
    if (!menuToggle || !mobileNav) return;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    mobileNav.setAttribute("data-open", open ? "true" : "false");
  };

  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });

  const meltToggle = document.getElementById("meltToggle");
  const meltCanvas = document.getElementById("meltCanvas");

  const disableMeltButton = (label) => {
    if (!meltToggle) return;
    meltToggle.disabled = true;
    meltToggle.setAttribute("title", label);
    meltToggle.setAttribute("aria-label", label);
  };

  if (!meltToggle || !meltCanvas) return;

  const gl = meltCanvas.getContext("webgl", { alpha: true, antialias: false });
  if (!gl) {
    disableMeltButton("WebGL no disponible");
    return;
  }

  const vertexSource = `
    attribute vec2 aPosition;
    void main() {
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `;

  const fragmentSource = `
    precision mediump float;

    uniform vec2 uResolution;
    uniform float uTime;
    uniform float uProgress;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
        u.y
      );
    }

    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      for (int i = 0; i < 5; i++) {
        value += noise(p) * amplitude;
        p *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / uResolution;
      float yFromTop = 1.0 - uv.y;

      float wave = sin((uv.x * 14.0) + (uTime * 2.0)) * 0.025;
      float drip = fbm(vec2(uv.x * 4.5, uTime * 0.35)) * 0.13;
      float front = (uProgress * 1.15) + wave + drip;
      float meltMask = 1.0 - smoothstep(front, front + 0.08, yFromTop);

      float bubbles = smoothstep(0.58, 1.0, fbm((uv * vec2(22.0, 8.0)) + vec2(0.0, uTime * 0.45)));
      float alpha = meltMask * (0.50 + 0.35 * bubbles) * uProgress;

      vec3 dark = vec3(0.03, 0.02, 0.05);
      vec3 hot = vec3(1.0, 0.45, 0.08);
      vec3 color = mix(dark, hot, pow(clamp(meltMask, 0.0, 1.0), 1.5));

      gl_FragColor = vec4(color, alpha);
    }
  `;

  const createShader = (type, source) => {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  };

  const vertexShader = createShader(gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertexShader || !fragmentShader) {
    disableMeltButton("Error compilando shader WebGL");
    return;
  }

  const program = gl.createProgram();
  if (!program) {
    disableMeltButton("Error creando programa WebGL");
    return;
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    disableMeltButton("Error enlazando WebGL");
    return;
  }

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW,
  );

  const positionLoc = gl.getAttribLocation(program, "aPosition");
  const resolutionLoc = gl.getUniformLocation(program, "uResolution");
  const timeLoc = gl.getUniformLocation(program, "uTime");
  const progressLoc = gl.getUniformLocation(program, "uProgress");

  if (positionLoc < 0 || !resolutionLoc || !timeLoc || !progressLoc) {
    disableMeltButton("Uniforms WebGL inválidos");
    return;
  }

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(window.innerWidth * ratio));
    const height = Math.max(1, Math.floor(window.innerHeight * ratio));
    if (meltCanvas.width !== width || meltCanvas.height !== height) {
      meltCanvas.width = width;
      meltCanvas.height = height;
      gl.viewport(0, 0, width, height);
    }
  };

  resize();
  window.addEventListener("resize", resize);

  let meltProgress = 0;
  let meltTarget = 0;
  let meltRaf = 0;
  const startTime = performance.now();

  const clearMeltTransform = () => {
    document.documentElement.style.setProperty("--melt-shift", "0px");
    document.documentElement.style.setProperty("--melt-squish", "0");
    document.documentElement.style.setProperty("--melt-blur", "0px");
  };

  const updatePageTransform = (timeSeconds, progress) => {
    const shift = (progress * 30) + (Math.sin(timeSeconds * 8) * 3 * progress);
    const squish = (progress * 0.03) + (Math.sin(timeSeconds * 6) * 0.004 * progress);
    const blur = progress * 1.8;
    document.documentElement.style.setProperty("--melt-shift", `${shift.toFixed(2)}px`);
    document.documentElement.style.setProperty("--melt-squish", `${Math.max(0, squish).toFixed(4)}`);
    document.documentElement.style.setProperty("--melt-blur", `${blur.toFixed(2)}px`);
  };

  const renderFrame = (timeSeconds, progress) => {
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
    gl.uniform2f(resolutionLoc, meltCanvas.width, meltCanvas.height);
    gl.uniform1f(timeLoc, timeSeconds);
    gl.uniform1f(progressLoc, progress);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  const tick = (now) => {
    const timeSeconds = (now - startTime) / 1000;
    meltProgress += (meltTarget - meltProgress) * 0.08;
    if (Math.abs(meltTarget - meltProgress) < 0.001) meltProgress = meltTarget;

    renderFrame(timeSeconds, meltProgress);
    updatePageTransform(timeSeconds, meltProgress);

    if (meltProgress > 0.001 || meltTarget > 0) {
      meltRaf = window.requestAnimationFrame(tick);
      return;
    }

    meltCanvas.setAttribute("data-active", "false");
    document.body.classList.remove("melt-active");
    clearMeltTransform();
    meltRaf = 0;
  };

  meltToggle.addEventListener("click", () => {
    const isActive = meltToggle.getAttribute("aria-pressed") === "true";
    const next = !isActive;

    meltToggle.setAttribute("aria-pressed", String(next));
    meltToggle.setAttribute("aria-label", next ? "Desactivar efecto de derretido" : "Activar efecto de derretido");
    meltTarget = next ? 1 : 0;
    meltCanvas.setAttribute("data-active", "true");
    document.body.classList.toggle("melt-active", next || meltProgress > 0.001);

    if (!meltRaf) meltRaf = window.requestAnimationFrame(tick);
  });
});
