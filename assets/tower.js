(() => {
  const LANG_KEY = "preferred-language";
  const container = document.getElementById("towerContainer");
  const gameHost = document.getElementById("towerGame");
  const scoreEl = document.getElementById("towerScore");
  const instructionsEl = document.getElementById("towerInstructions");
  const startButton = document.getElementById("towerStart");
  const langButton = document.getElementById("towerLang");
  const backLink = document.querySelector(".back-link");
  const overTitle = document.querySelector(".tower-over h1");
  const overText = document.querySelector(".tower-over p:nth-child(2)");
  const overHint = document.querySelector(".tower-over p:nth-child(3)");
  const readyLabel = document.querySelector(".tower-ready p");

  const copy = {
    es: {
      title: "¿Aburrido? · Tower Blocks",
      back: "← Portfolio",
      start: "Start",
      ready: "Tower Blocks",
      instructions: "Click o espacio para colocar el bloque",
      overTitle: "Game Over",
      overText: "Buen intento. La próxima torre sale mejor.",
      overHint: "Click o espacio para volver a empezar",
      toggle: "EN",
      aria: "Switch to English",
    },
    en: {
      title: "Boring? · Tower Blocks",
      back: "← Portfolio",
      start: "Start",
      ready: "Tower Blocks",
      instructions: "Click or press spacebar to place the block",
      overTitle: "Game Over",
      overText: "You did great. The next tower will be cleaner.",
      overHint: "Click or spacebar to start again",
      toggle: "ES",
      aria: "Cambiar a español",
    },
  };

  const applyLanguage = (lang) => {
    const text = copy[lang] || copy.es;
    document.documentElement.lang = lang;
    document.title = text.title;
    if (backLink) backLink.textContent = text.back;
    if (startButton) startButton.textContent = text.start;
    if (readyLabel) readyLabel.textContent = text.ready;
    if (instructionsEl) instructionsEl.textContent = text.instructions;
    if (overTitle) overTitle.textContent = text.overTitle;
    if (overText) overText.textContent = text.overText;
    if (overHint) overHint.textContent = text.overHint;
    if (langButton) {
      langButton.textContent = text.toggle;
      langButton.setAttribute("aria-label", text.aria);
    }
    localStorage.setItem(LANG_KEY, lang);
  };

  applyLanguage(localStorage.getItem(LANG_KEY) || "es");
  langButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    const current = localStorage.getItem(LANG_KEY) || "es";
    applyLanguage(current === "es" ? "en" : "es");
  });

  if (!window.THREE || !container || !gameHost || !scoreEl) return;

  const STATES = {
    LOADING: "loading",
    READY: "ready",
    PLAYING: "playing",
    ENDED: "ended",
    RESETTING: "resetting",
  };

  const BLOCK_STATE = {
    ACTIVE: "active",
    STOPPED: "stopped",
    MISSED: "missed",
  };

  class Stage {
    constructor() {
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      this.renderer.setClearColor(0xd0cbc7, 1);
      gameHost.appendChild(this.renderer.domElement);

      this.scene = new THREE.Scene();
      this.camera = new THREE.OrthographicCamera(-10, 10, 10, -10, -100, 1000);
      this.camera.position.set(2, 2, 2);
      this.lookAtTarget = new THREE.Vector3(0, 0, 0);
      this.camera.lookAt(this.lookAtTarget);

      const directional = new THREE.DirectionalLight(0xffffff, 0.55);
      directional.position.set(0, 500, 0);
      this.scene.add(directional);
      this.scene.add(new THREE.AmbientLight(0xffffff, 0.48));

      window.addEventListener("resize", () => this.onResize());
      this.onResize();
    }

    setCamera(y, speed = 0.08) {
      this.cameraTargetY = y + 4;
      this.lookTargetY = y;
      this.cameraSpeed = speed;
    }

    onResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspect = width / height;
      const viewSize = 30;
      this.renderer.setSize(width, height);
      this.camera.left = width / -viewSize;
      this.camera.right = width / viewSize;
      this.camera.top = height / viewSize;
      this.camera.bottom = height / -viewSize;
      if (aspect < 0.75) {
        this.camera.left *= 1.28;
        this.camera.right *= 1.28;
      }
      this.camera.updateProjectionMatrix();
    }

    tick() {
      if (typeof this.cameraTargetY === "number") {
        this.camera.position.y += (this.cameraTargetY - this.camera.position.y) * this.cameraSpeed;
        this.lookAtTarget.y += (this.lookTargetY - this.lookAtTarget.y) * this.cameraSpeed;
        this.camera.lookAt(this.lookAtTarget);
      }
      this.renderer.render(this.scene, this.camera);
    }
  }

  class Block {
    constructor(targetBlock) {
      this.targetBlock = targetBlock;
      this.index = (targetBlock ? targetBlock.index : 0) + 1;
      this.workingPlane = this.index % 2 ? "x" : "z";
      this.workingDimension = this.index % 2 ? "width" : "depth";
      this.dimension = {
        width: targetBlock ? targetBlock.dimension.width : 10,
        height: 2,
        depth: targetBlock ? targetBlock.dimension.depth : 10,
      };
      this.position = {
        x: targetBlock ? targetBlock.position.x : -5,
        y: this.dimension.height * this.index,
        z: targetBlock ? targetBlock.position.z : -5,
      };
      this.state = this.index > 1 ? BLOCK_STATE.ACTIVE : BLOCK_STATE.STOPPED;
      this.moveAmount = 12;
      this.speed = Math.max(-4, -0.12 - this.index * 0.006);
      this.direction = this.speed;

      const colorOffset = targetBlock ? targetBlock.colorOffset : Math.round(Math.random() * 100);
      this.colorOffset = colorOffset;
      const material = new THREE.MeshToonMaterial({ color: this.getColor(), flatShading: true });
      this.material = material;
      this.mesh = this.createMesh(this.dimension, material);

      if (this.state === BLOCK_STATE.ACTIVE) {
        this.position[this.workingPlane] = Math.random() > 0.5 ? -this.moveAmount : this.moveAmount;
      }
      this.mesh.position.set(this.position.x, this.position.y, this.position.z);
    }

    getColor() {
      if (!this.targetBlock) return 0x333344;
      const offset = this.index + this.colorOffset;
      const r = Math.sin(0.3 * offset) * 55 + 200;
      const g = Math.sin(0.3 * offset + 2) * 55 + 200;
      const b = Math.sin(0.3 * offset + 4) * 55 + 200;
      return new THREE.Color(r / 255, g / 255, b / 255);
    }

    createMesh(dimension, material) {
      const geometry = new THREE.BoxGeometry(dimension.width, dimension.height, dimension.depth);
      geometry.translate(dimension.width / 2, dimension.height / 2, dimension.depth / 2);
      return new THREE.Mesh(geometry, material);
    }

    reverseDirection() {
      this.direction = this.direction > 0 ? this.speed : Math.abs(this.speed);
    }

    place() {
      this.state = BLOCK_STATE.STOPPED;
      const target = this.targetBlock;
      const plane = this.workingPlane;
      const dimension = this.workingDimension;
      const overlap = target.dimension[dimension] - Math.abs(this.position[plane] - target.position[plane]);
      const result = { plane, direction: this.direction };

      if (overlap <= 0) {
        this.state = BLOCK_STATE.MISSED;
        this.dimension[dimension] = 0;
        return result;
      }

      const almostPerfect = Math.abs(this.dimension[dimension] - overlap) < 0.3;
      const finalOverlap = almostPerfect ? this.dimension[dimension] : overlap;
      const choppedDimension = { ...this.dimension };
      choppedDimension[dimension] -= finalOverlap;
      this.dimension[dimension] = finalOverlap;

      if (almostPerfect) {
        this.position.x = target.position.x;
        this.position.z = target.position.z;
        this.dimension.width = target.dimension.width;
        this.dimension.depth = target.dimension.depth;
      }

      const placedMesh = this.createMesh(this.dimension, this.material);
      const choppedPosition = { ...this.position };

      if (!almostPerfect) {
        if (this.position[plane] < target.position[plane]) {
          this.position[plane] = target.position[plane];
        } else {
          choppedPosition[plane] += finalOverlap;
        }
      }

      placedMesh.position.set(this.position.x, this.position.y, this.position.z);
      result.placed = placedMesh;

      if (!almostPerfect) {
        const choppedMesh = this.createMesh(choppedDimension, this.material);
        choppedMesh.position.set(choppedPosition.x, choppedPosition.y, choppedPosition.z);
        choppedMesh.userData.velocity = {
          x: plane === "x" ? this.direction * 9 : 0,
          y: -0.35,
          z: plane === "z" ? this.direction * 9 : 0,
        };
        choppedMesh.userData.rotationVelocity = {
          x: plane === "z" ? 0.08 : 0.02,
          y: 0.02,
          z: plane === "x" ? 0.08 : 0.02,
        };
        result.chopped = choppedMesh;
      }

      return result;
    }

    tick() {
      if (this.state !== BLOCK_STATE.ACTIVE) return;
      const plane = this.workingPlane;
      const value = this.position[plane];
      if (value > this.moveAmount || value < -this.moveAmount) this.reverseDirection();
      this.position[plane] += this.direction;
      this.mesh.position[plane] = this.position[plane];
    }
  }

  class TowerGame {
    constructor() {
      this.stage = new Stage();
      this.newBlocks = new THREE.Group();
      this.placedBlocks = new THREE.Group();
      this.choppedBlocks = new THREE.Group();
      this.stage.scene.add(this.newBlocks, this.placedBlocks, this.choppedBlocks);
      this.blocks = [];
      this.state = STATES.LOADING;
      this.addBlock();
      this.updateState(STATES.READY);
      this.bindEvents();
      this.tick();
    }

    bindEvents() {
      document.addEventListener("keydown", (event) => {
        if (event.code === "Space") {
          event.preventDefault();
          this.onAction();
        }
      });
      document.addEventListener("click", (event) => {
        if (event.target.closest("a, button")) return;
        this.onAction();
      });
      startButton?.addEventListener("click", (event) => {
        event.stopPropagation();
        this.onAction();
      });
    }

    updateState(state) {
      Object.values(STATES).forEach((className) => container.classList.remove(className));
      container.classList.add(state);
      this.state = state;
    }

    onAction() {
      if (this.state === STATES.READY) this.startGame();
      else if (this.state === STATES.PLAYING) this.placeBlock();
      else if (this.state === STATES.ENDED) this.restartGame();
    }

    startGame() {
      scoreEl.textContent = "0";
      instructionsEl?.classList.remove("hide");
      this.updateState(STATES.PLAYING);
      this.addBlock();
    }

    restartGame() {
      this.updateState(STATES.RESETTING);
      [...this.placedBlocks.children].forEach((block) => this.placedBlocks.remove(block));
      [...this.choppedBlocks.children].forEach((block) => this.choppedBlocks.remove(block));
      [...this.newBlocks.children].forEach((block) => this.newBlocks.remove(block));
      this.blocks = [];
      this.stage.setCamera(2, 0.12);
      this.addBlock();
      window.setTimeout(() => this.startGame(), 320);
    }

    placeBlock() {
      const currentBlock = this.blocks[this.blocks.length - 1];
      const result = currentBlock.place();
      this.newBlocks.remove(currentBlock.mesh);
      if (result.placed) this.placedBlocks.add(result.placed);
      if (result.chopped) this.choppedBlocks.add(result.chopped);
      this.addBlock();
    }

    addBlock() {
      const lastBlock = this.blocks[this.blocks.length - 1];
      if (lastBlock && lastBlock.state === BLOCK_STATE.MISSED) {
        this.updateState(STATES.ENDED);
        return;
      }

      scoreEl.textContent = String(Math.max(0, this.blocks.length - 1));
      const block = new Block(lastBlock);
      this.newBlocks.add(block.mesh);
      this.blocks.push(block);
      this.stage.setCamera(this.blocks.length * 2);
      if (this.blocks.length >= 5) instructionsEl?.classList.add("hide");
    }

    tick() {
      const currentBlock = this.blocks[this.blocks.length - 1];
      currentBlock?.tick();
      this.choppedBlocks.children.forEach((mesh) => {
        const velocity = mesh.userData.velocity;
        const rotation = mesh.userData.rotationVelocity;
        if (!velocity) return;
        mesh.position.x += velocity.x;
        mesh.position.y += velocity.y;
        mesh.position.z += velocity.z;
        velocity.y -= 0.015;
        if (rotation) {
          mesh.rotation.x += rotation.x;
          mesh.rotation.y += rotation.y;
          mesh.rotation.z += rotation.z;
        }
        if (mesh.position.y < -40) this.choppedBlocks.remove(mesh);
      });
      this.stage.tick();
      window.requestAnimationFrame(() => this.tick());
    }
  }

  new TowerGame();
})();
