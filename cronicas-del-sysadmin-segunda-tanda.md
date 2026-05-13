# Crónicas del Sysadmin — Segunda tanda

> Cinco nuevas historias de soporte, oficina, cables, servidores y errores humanos.

---

## 1. El Excel que se convirtió en sistema de gestión

**Slug:** `el-excel-que-se-convirtio-en-sistema-de-gestion`  
**Categoría:** Crónicas del Sysadmin  
**Tags:** excel, oficina, soporte, sistema, usuarios, humor técnico  
**Excerpt:** Empezó como una planilla provisoria. Terminó manejando media oficina, tres decisiones importantes y el miedo colectivo a tocar la celda equivocada.

### Bajada

Hay sistemas que se diseñan, se prueban y se documentan. Y después están los Excel que nacen un viernes a la tarde “para salir del paso” y terminan gobernando una institución.

### Crónica

Nadie sabe cuándo nació.

Esa es la primera señal de peligro.

Los sistemas normales tienen fecha de implementación, responsable, manual, carpeta, ticket, algo. Un Excel importante, en cambio, simplemente aparece. Un día está ahí, en una carpeta compartida, con un nombre inocente y una extensión que no asusta.

“Control nuevo.xlsx”.

Así se llamaba.

Nuevo.

Todavía me da gracia.

Porque nada que se llame “nuevo” y sobreviva más de seis meses sigue siendo nuevo. Pasa a ser arqueología. Pasa a ser patrimonio. Pasa a ser una pieza viva, delicada, con reglas internas que nadie entiende pero todos obedecen.

La primera vez que me hablaron de ese archivo fue un martes.

—Zami, no abre el sistema.

—¿Qué sistema?

—El Excel.

Ahí tendría que haberme ido.

No lo hice.

Fui.

En una oficina había cuatro personas mirando una pantalla. Eso ya era mala señal. Cuando cuatro personas miran una misma pantalla, no están trabajando: están presenciando un accidente.

En el monitor estaba abierto Excel, con una barra superior amarilla que decía algo sobre macros, seguridad y confianza. Esa clase de mensaje que nadie lee y todos aceptan porque la planilla “antes andaba”.

—¿Qué hace esta planilla? —pregunté.

Silencio.

Después contestó Gralina.

—Todo.

Ahí empezó el frío.

“Todo” no es una función. No es una descripción. No es un alcance. “Todo” es una amenaza.

Miré la planilla.

Tenía pestañas.

Muchas.

“ENERO”  
“FEBRERO”  
“MARZO”  
“RESUMEN”  
“DATOS”  
“DATOS 2”  
“NO TOCAR”  
“NO TOCAR 2”  
“ANTERIOR”  
“ANTERIOR BIEN”  
“COPIA”  
“COPIA USAR ESTA”  
“FINAL”

La pestaña “FINAL” estaba en el medio.

Eso me pareció poético.

—¿Quién la hizo? —pregunté.

Las cuatro personas se miraron entre sí.

—Creo que Patrelia.

—¿Patrelia de acá?

—No, Patrelia la que se jubiló.

Perfecto.

La creadora original ya no estaba en la institución. Esa es la segunda señal de peligro. Cuando el autor de una planilla crítica se jubiló, renunció o fue trasladado, el archivo deja de ser herramienta y se convierte en testamento.

—¿Y hay backup?

Gralina señaló una carpeta.

—Sí, está la copia.

Entré.

Había doce copias.

“Control nuevo copia.xlsx”  
“Control nuevo copia copia.xlsx”  
“Control bueno.xlsx”  
“Control bueno usar.xlsx”  
“Control bueno usar ahora.xlsx”  
“Control no tocar final.xlsx”

No había backup.

Había miedo acumulado.

La planilla no abría bien porque alguien había habilitado macros, después las había deshabilitado, después había guardado una copia sin saber, después otra persona había trabajado sobre la copia equivocada durante dos días. El resultado era una especie de multiverso administrativo donde cada archivo contenía una realidad distinta.

—Esta es la última —dijo Gralina.

—¿Cómo sabés?

—Porque está arriba.

Respiré.

Ordenar archivos por posición visual no es una estrategia documental. Es fe.

Abrí la supuesta última versión. Excel tardó. La barra verde avanzó como si estuviera cruzando un desierto. Cuando abrió, varias celdas mostraban errores.

No errores simples.

Errores con personalidad.

`#¡REF!`

Ese grito.

Excel no avisa. Excel acusa.

La planilla estaba rota porque alguien había eliminado una columna. Una sola columna. Pero esa columna sostenía fórmulas en siete pestañas, tres resúmenes, dos gráficos y una celda escondida en “NO TOCAR” que aparentemente decidía si el mes estaba cerrado o no.

—¿Alguien borró una columna?

Silencio.

Después, desde el fondo:

—Yo oculté unas cosas.

Era Marlia.

Marlia no había borrado. Había “ocultado”. Pero en algún punto del proceso, entre ocultar, mostrar, copiar, pegar y “ordenar un poco”, una columna dejó de existir. Como algunas promesas y varios presupuestos.

—Pero yo no toqué nada importante —agregó.

Ahí estaba otra vez.

Nada importante.

La frase favorita de las catástrofes.

Me senté.

Empezamos a revisar versiones. Una abría pero no tenía datos nuevos. Otra tenía datos nuevos pero fórmulas rotas. Otra tenía fórmulas bien pero datos de la semana pasada. Una pedía contraseña. Nadie sabía la contraseña. Patrelia, la jubilada, probablemente sí, pero llamar a una jubilada para pedirle contraseña de una pestaña de Excel me parecía cruzar una frontera ética.

—¿Y si copiamos los datos nuevos a la vieja que anda? —dijo alguien.

La oficina entera asintió, como si acabaran de descubrir la medicina moderna.

Lo hicimos.

Con cuidado.

Mucho cuidado.

Copiar y pegar en una planilla crítica es una operación quirúrgica. Uno no pega datos: trasplanta órganos. Hay que respetar formatos, fórmulas, filtros, colores, validaciones y supersticiones.

Porque esa planilla también tenía colores.

Verde era aprobado.  
Rojo era pendiente.  
Amarillo era revisar.  
Azul, nadie sabía.  
Gris significaba algo que Patrelia “hacía así”.

Ese “hacía así” era la documentación.

Después de una hora, logramos reconstruir una versión que abría, calculaba y no gritaba `#¡REF!` en cada esquina.

Gralina la miró como si hubiera vuelto un hijo perdido.

—¿La guardo?

—Sí. Pero con nombre claro.

—¿Cómo?

Pensé.

Mucho.

—Control_gestion_2026_actual.xlsx.

Gralina escribió:

“Control gestion nuevo bueno FINAL.xlsx”.

No tuve fuerzas para detenerla.

Antes de irme, dejé una copia en otra carpeta, otra en el servidor y otra exportada en PDF. También prometí, en voz alta, que algún día eso se iba a convertir en un sistema de verdad.

Todos asintieron.

Nadie me creyó.

Y tenían razón.

Porque el Excel siguió vivo. Con menos errores, con más copias, con una nueva pestaña llamada “NO TOCAR GABI” que no pedí y que me pareció una amenaza personal.

A la semana siguiente, alguien preguntó si se podía agregar una columna más.

No contesté enseguida.

Miré por la ventana.

Pensé en Patrelia, jubilada, libre, lejos de todo eso.

Y entendí algo.

Hay sistemas que se mantienen con servidores.

Otros con presupuesto.

Otros con documentación.

Pero hay Excel que se mantienen con miedo.

Y mientras todos tengan miedo de romperlo, seguirá funcionando.

Más o menos.

Que en oficina, muchas veces, es suficiente.

### Archivo de daños

**Frase escuchada:**  
“Es solo una planilla.”

**Causa real:**  
Una columna eliminada de una planilla que en realidad era un sistema de gestión disfrazado.

**Tiempo perdido:**  
Una mañana, doce copias y parte de la dignidad profesional.

**Lección:**  
Si un Excel tiene una pestaña llamada “NO TOCAR”, ya no es un Excel. Es infraestructura crítica.

---

## 2. El cable que no era el cable, pero era el cable

**Slug:** `el-cable-que-no-era-el-cable-pero-era-el-cable`  
**Categoría:** Crónicas del Sysadmin  
**Tags:** redes, cables, soporte, oficina, conectividad, humor técnico  
**Excerpt:** Todo indicaba que el problema no era el cable. Hasta que fue el cable. Como siempre.

### Bajada

Hay cables que fallan. Hay cables que funcionan. Y hay cables que funcionan solo cuando nadie los mira, que son los peores.

### Crónica

El problema aparecía y desaparecía.

Eso ya lo hacía personal.

Los problemas fijos son molestos, pero honestos. Si algo no funciona nunca, uno lo revisa, lo cambia y sigue. Pero cuando algo falla a veces, entra en el terreno de la burla. El equipo anda cuando llegás, falla cuando te vas y deja al usuario con la frase perfecta:

—Justo ahora anda.

Ese día la computadora de Silvara perdía conexión.

No siempre.

A veces.

A la mañana andaba. Después no. Después volvía. Después se cortaba. Después cargaba una página y dejaba de cargar otra. Una conducta que no parecía de red, sino de adolescente.

—Se corta Internet —dijo Silvara.

—¿Cada cuánto?

—Cuando quiere.

“Cuando quiere” no es una frecuencia, pero es bastante precisa para ciertos dispositivos.

Fui.

La computadora estaba prendida. Todo parecía normal. Abrí el navegador. Cargó. Abrí otra página. Cargó. Probé el sistema. Entró.

Silvara me miró con esa mezcla de alivio y bronca que tienen los usuarios cuando el problema decide comportarse delante del técnico.

—Te juro que recién no andaba.

—Te creo.

Y era verdad. Le creía.

Porque hay fallas que sienten presencia técnica. Uno entra a la oficina y de pronto todo funciona. Es como si los equipos tuvieran un instinto de supervivencia.

Volví a mi escritorio.

A los diez minutos, mensaje.

—Se cortó de nuevo.

Volví.

Andaba.

Me fui.

Se cortó.

Volví.

Andaba.

Ese baile se repitió tres veces. Para la cuarta, ya no caminaba: iba flotando sobre una nube de fastidio.

—¿Alguien tocó algo? —pregunté.

Silvara negó.

Desde el otro escritorio, Danelio agregó:

—Yo no toqué nada.

Nadie le había preguntado a Danelio.

Eso lo volvió sospechoso.

Revisé la computadora. Configuración normal. Nada raro. La boca de red parecía bien. El switch parpadeaba. Todo tenía esa normalidad insultante de las cosas culpables.

—Capaz es el cable —dijo Silvara.

Negué con seguridad.

—No creo.

Esa frase fue mi error.

Nunca hay que decir “no creo” delante de un cable. Los cables son rencorosos. Esperan.

Probé otra boca. Anduvo. Volví a la original. Anduvo. Moví un poco el escritorio para mirar mejor. Se cortó.

Me quedé quieto.

Silvara también.

Danelio dejó de teclear.

Moví apenas el cable.

Volvió.

Lo moví otra vez.

Se fue.

Ahí estaba.

El cable.

Pero no cualquier cable. Era un cable gris, largo, doblado detrás del mueble, apretado por una pata de escritorio y sostenido con una cinta que alguna vez fue transparente y ahora tenía color de documento viejo.

Lo saqué.

La ficha parecía sana.

Eso también era mentira.

Un cable de red puede parecer sano y estar emocionalmente destruido por dentro. El plástico exterior conserva la dignidad, mientras los pequeños hilos internos ya presentaron renuncia.

—Era el cable —dijo Silvara.

—Parece.

—Pero vos dijiste que no creías.

No respondí.

Un técnico nunca debe discutir con su propio pasado inmediato.

Cambié el cable. Conecté uno nuevo. Probamos. Todo anduvo. Moví el escritorio. Anduvo. Moví el cable. Anduvo. Lo miré mal. Anduvo.

Caso cerrado.

O eso creí.

Al rato volvió Danelio.

—Ahora a mí me anda lento.

Lo miré.

—Danelio.

—¿Qué?

—¿Qué tocaste?

—Nada.

El problema de Danelio no era el cable. Era que al mover el escritorio de Silvara, alguien había pasado su cable por debajo de una silla con rueditas. Cada vez que Danelio se acomodaba, la silla apretaba el cable como si quisiera confesarle algo.

Saqué ese también.

Otro cable gris.

Otra pieza arqueológica.

Otro testigo silencioso de años de “después lo ordenamos”.

Reemplacé los dos. Ordené un poco. Puse precintos. Separé cables eléctricos de cables de red. Hice todo eso que uno hace sabiendo que dentro de una semana alguien va a enchufar un cargador, mover un mueble y destruir la geometría.

Silvara me ofreció un mate.

Eso, en soporte, cuenta como indemnización.

Mientras guardaba el cable viejo, Danelio lo miró y dijo:

—Qué raro que algo tan simple haga tanto lío.

Sí.

Ese es el punto.

La tecnología moderna depende de cosas absurdamente simples. Un sistema puede tener servidores, seguridad, autenticación, bases de datos y pantallas elegantes, pero al final todo puede quedar arrodillado por un cable que pasó demasiado tiempo aplastado por una silla.

Desde ese día empecé a desconfiar más de los cables.

No de todos.

De los grises, especialmente.

Los cables grises de oficina tienen historia. Han sido pisados, doblados, estirados, enrollados, prestados, recuperados y usados para “salir del paso”. Ninguno debería trabajar después de cierta edad, pero ahí están, sosteniendo trámites, impresoras, turnos y la paciencia de todos.

La semana siguiente, Silvara volvió a avisar:

—Zami, ahora anda perfecto.

Me alegró.

Hasta que agregó:

—Pero la impresora hace un ruido raro.

Miré el techo.

Uno no termina los problemas.

Solo cambia de cable.

### Archivo de daños

**Frase escuchada:**  
“Justo ahora anda.”

**Causa real:**  
Un cable de red aplastado, doblado y moralmente vencido detrás de un escritorio.

**Tiempo perdido:**  
Dos horas, cuatro caminatas y una frase desafortunada: “no creo que sea el cable”.

**Lección:**  
Cuando todo parece indicar que no es el cable, revisá el cable. Dos veces.

---

## 3. La actualización que nadie pidió

**Slug:** `la-actualizacion-que-nadie-pidio`  
**Categoría:** Crónicas del Sysadmin  
**Tags:** windows, actualizaciones, soporte, oficina, paciencia, humor técnico  
**Excerpt:** La computadora eligió actualizarse en el peor momento posible. Como corresponde.

### Bajada

Las actualizaciones no consultan. Esperan el momento exacto en que alguien necesita trabajar y entonces aparecen con un porcentaje.

### Crónica

Todo empezó con una pantalla azul.

No la azul de la muerte. Esa, al menos, tiene carácter.

Era una azul amable, moderna, con letras blancas y una promesa optimista:

“Actualizando. No apague el equipo.”

El problema era que el equipo no pertenecía a una persona tranquila un domingo a la tarde. Pertenecía a una oficina un lunes a la mañana, con gente esperando, papeles en la mano y una urgencia que, según todos, no podía esperar.

La máquina estaba en 7%.

Ese número me pareció ofensivo.

—¿Cuánto tarda? —preguntó Lurena.

La pregunta eterna.

¿Cuánto tarda una actualización?

Nadie lo sabe.

Ni el fabricante. Ni el sistema. Ni los ingenieros. Ni los santos patronos del silicio. Puede tardar cinco minutos o una era geológica. El porcentaje no avanza: negocia.

—Depende —dije.

“Depende” es una palabra útil porque no promete nada y al mismo tiempo suena profesional.

Lurena miró la pantalla.

7%.

—Pero yo no le di actualizar.

Claro que no.

Nadie le da actualizar. Las actualizaciones ocurren. Son fenómenos naturales. Como la lluvia, los cortes de luz o los compañeros que preguntan “ya que estás”.

La computadora había decidido, por iniciativa propia, que ese era el momento ideal para purgar viejos pecados del sistema operativo.

—Anoche andaba bien —agregó Lurena.

Esa frase siempre aparece. “Anoche andaba bien”, “ayer imprimía”, “el viernes abría”, “antes no hacía eso”. Como si los equipos firmaran un contrato de continuidad emocional.

Me quedé mirando.

8%.

La oficina también miraba.

Una actualización convierte a cualquier computadora en un evento público. La gente pasa y pregunta el porcentaje, como si estuviera viendo un partido.

—¿Sigue en 8?

—Sí.

—¿Y si la apagamos?

No.

Hay frases que deberían activar una traba física en la mano del usuario.

—No la apagues.

—Pero capaz arranca.

—O capaz no.

—¿Y si mantenemos apretado el botón?

—Lurena.

—Bueno, pregunto.

Apareció Roberlan, con un expediente en la mano y cara de estar perdiendo fe en la digitalización.

—Necesito esa máquina.

—Está actualizando.

Roberlan miró la pantalla.

8%.

—¿Y no se puede usar otra?

Sí. Se podía.

Pero, por razones que nadie había pensado hasta ese momento, el acceso, el certificado, el lector, el programa y “lo que siempre usamos” estaban en esa máquina. Esa máquina era, sin que nadie lo hubiera declarado, un pequeño altar operativo.

—¿Por qué no está en otra también? —pregunté.

Silencio.

Ese silencio dijo mucho.

Dijo “porque siempre funcionó”.  
Dijo “porque nunca hizo falta”.  
Dijo “porque nadie quiso tocar”.  
Dijo “porque cuando lo pediste dijimos después”.

La actualización seguía.

9%.

Un avance.

Festejamos con prudencia.

A los diez minutos estaba en 11%.

A los veinte, en 12%.

El porcentaje avanzaba como jubilado en ventanilla, con dignidad pero sin apuro.

Mientras tanto, Lurena recordó algo.

—Ayer me salió un cartel.

—¿Qué cartel?

—Uno que decía reiniciar ahora o más tarde.

—¿Y qué pusiste?

—Más tarde.

—¿Cuántas veces?

—No sé. Varias.

Ahí está.

Las actualizaciones son pacientes. Uno puede decirles “más tarde” muchas veces, pero ellas no olvidan. Guardan rencor. Esperan. Y cuando juntan suficiente resentimiento, se cobran todo junto el lunes a las 8:15.

La computadora llegó al 30%.

Después al 48%.

Después, por supuesto, se reinició.

La oficina entera contuvo la respiración.

Volvió la pantalla.

“Configurando actualizaciones.”

22%.

—¿Pero no iba en 48? —preguntó Roberlan.

—Era otra etapa.

—¿Cuántas etapas hay?

—Las necesarias para quebrarnos.

No se rió.

Yo tampoco.

Pasó media hora. La máquina reinició otra vez. Después otra. En una de esas pausas mostró el escritorio durante cinco segundos, apenas lo suficiente para que Lurena dijera “¡ahí está!”, y luego volvió a actualizar. Fue cruel. Como mostrar agua en el desierto.

Finalmente, después de una hora y media, entró.

Todo parecía estar.

El sistema abrió.

El certificado seguía.

El programa funcionaba.

La impresora, sorprendentemente, también.

Lurena suspiró.

—Menos mal.

Roberlan entregó su expediente como si hubiera cruzado una frontera.

Yo aproveché el momento para decir lo obvio:

—Tenemos que preparar otra máquina con lo mismo.

Todos asintieron.

Ese asentimiento colectivo que significa “tenés razón” y también “esperamos que lo hagas vos”.

Lo hice.

Porque uno aprende.

O al menos acumula cicatrices.

Configuré una segunda máquina. Probé acceso. Documenté el proceso. Dejé anotado dónde estaba cada cosa. Programé las actualizaciones para otro horario. Expliqué que “más tarde” no era una estrategia de mantenimiento.

Lurena escuchó.

Roberlan también.

La computadora, recién actualizada, brillaba con esa falsa inocencia de quien acaba de arruinar una mañana y no piensa disculparse.

Al día siguiente, pasé por la oficina.

Lurena sonrió.

—Hoy no actualizó nada.

—Bien.

—Pero apareció un cartel.

Me detuve.

—¿Qué cartel?

—Uno que dice que hay actualizaciones disponibles.

La miré.

Ella me miró.

Ninguno dijo nada.

A veces el silencio es la única política informática sostenible.

### Archivo de daños

**Frase escuchada:**  
“Pero yo no le di actualizar.”

**Causa real:**  
Semanas de “reiniciar más tarde” acumuladas hasta que el sistema decidió cobrar la deuda completa.

**Tiempo perdido:**  
Una hora y media, tres reinicios y varias miradas al 8%.

**Lección:**  
Posponer actualizaciones no las cancela. Solo les da tiempo para elegir el peor momento.

---

## 4. El servidor que tenía más polvo que logs

**Slug:** `el-servidor-que-tenia-mas-polvo-que-logs`  
**Categoría:** Crónicas del Sysadmin  
**Tags:** servidores, mantenimiento, oficina, infraestructura, soporte, humor técnico  
**Excerpt:** Seguía prendido desde hacía años. Nadie sabía bien qué hacía. Por eso mismo, nadie se animaba a apagarlo.

### Bajada

Hay servidores modernos, documentados y monitoreados. Y hay cajas grises en un rincón que sobreviven porque todos tienen miedo de preguntar qué pasa si se apagan.

### Crónica

Lo encontré por el ruido.

No era un ruido fuerte. Era peor.

Era un zumbido constante, cansado, como de ventilador que ya no giraba por entusiasmo sino por compromiso. Venía de un rincón donde había cajas, papeles, cables viejos y una silla que nadie usaba porque “era incómoda”, aunque probablemente el verdadero motivo era que estaba custodiando algo.

Corrí unas carpetas.

Ahí estaba.

Un gabinete beige.

Beige.

No gris. No negro. Beige.

Color oficina vieja. Color monitor de tubo. Color “esto estaba antes de que vos entraras”.

Tenía una luz verde encendida y otra naranja que parpadeaba de vez en cuando, como si todavía quisiera formar parte de la conversación. Encima había polvo. No una capa. Un ecosistema. Si uno soplaba fuerte, probablemente aparecían civilizaciones.

—¿Eso está prendido? —pregunté.

Mario, que pasaba por ahí, miró sin detenerse.

—Sí, creo que es el servidor.

“El servidor.”

Cuando alguien dice “el servidor” sin apellido, hay que preocuparse. Los servidores sanos tienen nombre, función, IP, respaldo, responsable. Los servidores peligrosos son “el servidor”. Como si fueran una figura mitológica.

—¿Qué corre ahí?

Mario se encogió de hombros.

—Algo del sistema viejo.

Otra frase fantástica.

Sistema viejo.

No hay nada más vivo que un sistema viejo. Todo el mundo dice que ya no se usa, hasta que alguien lo apaga y aparecen quince personas con papeles en la mano diciendo que justo necesitaban entrar.

Me acerqué.

Tenía cables conectados. Muchos. Uno de red, dos USB, un VGA, energía y algo que no quise identificar sin guantes.

El gabinete tenía una etiqueta escrita con fibra.

“NO APAGAR”.

Eso no es documentación.

Es una amenaza.

Fui a preguntar.

—¿Quién usa el servidor viejo?

Nadie.

—¿Se puede apagar?

Silencio.

Ahí apareció Gralina.

—No, por las dudas.

“Por las dudas” es el combustible de la infraestructura obsoleta. Hay equipos que no siguen funcionando por necesidad, sino por miedo colectivo. Nadie sabe qué hacen, pero todos coinciden en que apagarlos sería tentar al destino.

Decidí investigar.

No por curiosidad. Por supervivencia.

Busqué pantalla. Encontré una. Busqué teclado. Encontré tres, de los cuales uno tenía teclas duras como juicio laboral. Conecté todo. El monitor tardó en mostrar imagen.

Cuando apareció, había una consola con letras blancas.

Pedía usuario.

—¿La contraseña? —pregunté.

Gralina pensó.

—Probá con admin.

Probé.

No.

—Probá con administración.

No.

—Probá con 123456.

La miré.

—¿En serio?

—Antes usaban eso.

No funcionó, por suerte para la humanidad.

Después de varios intentos, apareció Oscario con una libreta.

Una libreta.

De papel.

—Capaz está acá —dijo.

La libreta tenía contraseñas escritas a mano. Algunas tachadas. Otras con flechas. Una decía “servidor viejo?” con signo de pregunta, que no inspiraba confianza pero era mejor que nada.

Funcionó.

Entré.

El sistema mostraba una fecha razonable, lo cual me sorprendió. Esperaba algo de 2009. Revisé procesos. Carpetas. Servicios. Había logs, sí, pero menos que polvo. Mucho menos.

El servidor corría una aplicación antigua que, según todos, ya no se usaba. Pero también compartía una carpeta que alguien todavía consultaba una vez por semana. Y tenía una base de datos chica, olvidada, con información que nadie quería perder porque “capaz sirve”.

Capaz.

La palabra hermana de “por las dudas”.

—¿Vieron? —dijo Mario—. Todavía sirve.

No.

No servía.

Sobrevivía.

Hay diferencia.

Un servidor que nadie mantiene, nadie actualiza, nadie respalda y nadie entiende no es útil. Es una bomba con ventilador.

Pregunté por backup.

Gralina señaló una carpeta.

—Creo que se copia solo.

—¿A dónde?

—Al disco.

—¿Qué disco?

—El del servidor.

Me quedé en silencio.

Hacer backup en el mismo servidor es como guardar una copia de la llave adentro de la casa. Técnicamente existe, pero el día que la necesitás te querés golpear contra una pared.

Organicé la operación.

Primero copia completa. Después exportar datos. Después identificar quién usaba qué. Después migrar la carpeta a un servidor actual. Después avisar. Después apagar.

Apagar.

La palabra cayó pesada.

—¿Y si después no prende? —preguntó Oscario.

—La idea es que no tenga que prender.

Eso los incomodó.

Hay equipos que se vuelven parte del paisaje. Apagarlos parece una falta de respeto. Como jubilar a un empleado que todavía viene todos los días aunque nadie sepa qué hace.

Hicimos la migración.

Durante una semana nadie se quejó.

Eso era buena señal.

Durante dos semanas nadie se quejó.

Mejor.

Al día quince, reuní valor y apagué el servidor.

El zumbido murió.

El silencio que dejó fue enorme.

Todos miramos.

Nada explotó.

Nadie entró corriendo.

No se cortó Internet.

No se cayó el sistema.

No apareció Patrelia de la jubilación reclamando una pantalla vieja.

Solo silencio.

Debajo del gabinete quedó una marca rectangular en la mesa, limpia de polvo. Como si el servidor hubiera tenido sombra propia.

Lo levantamos.

Pesaba más de lo que parecía. O tal vez pesaban los años.

Antes de guardarlo, despegué la etiqueta “NO APAGAR” y la pegué en mi cuaderno.

No como instrucción.

Como advertencia.

Porque el problema no era ese servidor.

El problema era la cultura que lo había dejado ahí durante años, prendido, acumulando polvo y autoridad, solo porque nadie se animaba a preguntar en voz alta:

—¿Esto todavía sirve?

Al mes siguiente, alguien encontró otro gabinete en depósito.

También estaba enchufado.

No pregunté.

Ese día ya había usado toda mi valentía.

### Archivo de daños

**Frase escuchada:**  
“No lo apagues, por las dudas.”

**Causa real:**  
Un servidor viejo sin documentación, con una aplicación casi olvidada y backups en el mismo disco.

**Tiempo perdido:**  
Dos semanas de investigación, migración y miedo escénico antes de tocar el botón de apagado.

**Lección:**  
Si nadie sabe qué hace un servidor, no significa que sea importante. Significa que nadie hizo inventario.

---

## 5. El WiFi que funcionaba mejor cuando nadie lo necesitaba

**Slug:** `el-wifi-que-funcionaba-mejor-cuando-nadie-lo-necesitaba`  
**Categoría:** Crónicas del Sysadmin  
**Tags:** wifi, redes, oficina, conectividad, soporte, humor técnico  
**Excerpt:** En las pruebas andaba perfecto. Con usuarios reales, se arrastraba. Como si el WiFi tuviera vergüenza social.

### Bajada

El WiFi tiene una habilidad especial: funcionar de maravilla cuando lo prueba el técnico y fallar apenas se llena la sala.

### Crónica

El WiFi andaba perfecto.

Eso decían las pruebas.

Eso decía el celular.

Eso decía la notebook.

Eso decía la velocidad medida en una oficina vacía, con silencio, aire quieto y ningún usuario respirando cerca del router.

El problema era que el WiFi no se usaba en una oficina vacía.

Se usaba con gente.

Y la gente arruina todo.

No por mala. Por existir. La gente trae celulares, notebooks, auriculares, relojes, tablets, cargadores, paredes humanas, humedad emocional y la costumbre de pararse justo donde la señal se rinde.

El reclamo llegó un jueves.

—Zami, el WiFi anda mal.

—¿Mal cómo?

—Lento.

Otra vez lento.

La palabra que no describe nada y sin embargo lo arruina todo.

Fui hasta la sala.

Había cinco personas. Probé. Andaba bien.

—Ahí anda —dije.

—Sí, ahora sí.

Ese “ahora sí” me pareció sospechoso. El WiFi, como ciertos empleados, mejora cuando sabe que lo están evaluando.

Abrí una página. Cargó. Probé otra. Cargó. Hice una descarga chica. Bien. Miré la señal. Correcta.

—Listo —dije, ingenuo.

A la tarde volvió el mensaje.

—Otra vez anda mal.

Fui.

Esta vez había quince personas.

Tres notebooks, nueve celulares, una tablet, un televisor con YouTube en pausa, alguien compartiendo pantalla y una persona preguntando la contraseña del WiFi en voz alta como si estuviera pidiendo la hora.

Probé.

Lento.

Ahí sí.

El WiFi no estaba roto. Estaba superado.

Busqué el access point.

—Está arriba del armario —dijo alguien.

Arriba del armario.

Esa frase no debería existir en instalaciones de red.

Miré.

Ahí estaba. Un aparatito blanco, acostado, medio tapado por carpetas viejas y una caja de resmas. Tenía una antena apuntando a la pared y otra hacia una planta de plástico.

La planta, por supuesto, tenía mejor ubicación que el equipo.

—¿Siempre estuvo ahí?

—Sí.

—¿Quién lo puso?

—No sé.

El “no sé” es el instalador más frecuente del mundo.

Subí a una silla. Esa fue mi primera derrota. Bajé el access point. Estaba tibio. No caliente, pero tibio con intención. El cable de red bajaba por atrás del mueble, pasaba cerca de una zapatilla, cruzaba una repisa y desaparecía detrás de una cortina.

—¿Alguien movió esto?

Silencio.

Una mano se levantó despacio.

Era Norial.

—Yo corrí unas cajas.

—¿Qué cajas?

—Las de papel.

Las cajas de papel estaban exactamente donde antes respiraba el access point. Le habían construido una tumba administrativa.

Pero no era solo eso.

El equipo era viejo. La sala estaba llena. Había demasiados dispositivos conectados. Y, para completar la obra, el AP estaba usando el mismo canal que otros dos de oficinas cercanas. Era una conversación donde todos gritaban al mismo tiempo y después se preguntaban por qué nadie escuchaba.

—Pero antes andaba —dijo alguien.

Sí.

Antes también había menos dispositivos, menos gente y menos expectativas. Antes una página que tardaba cinco segundos era aceptable. Ahora si algo no carga en dos, la civilización entra en crisis.

Moví el access point a una posición más decente. Alto, despejado, sin cajas, sin planta, sin ese aire de objeto abandonado. Cambié configuración. Separé redes. Bajé un poco el entusiasmo de los dispositivos que se conectaban porque sí. Desconecté el televisor, que estaba consumiendo ancho de banda para mostrar una pantalla de pausa.

El WiFi mejoró.

No perfecto.

Mejoró.

La perfección en WiFi es una ilusión vendida en cajas con fotos de familias sonriendo.

A la semana siguiente volví a probar.

Sala vacía: excelente.

Sala con gente: aceptable.

Sala llena: sobrevivía.

Eso, para un entorno real, ya era bastante.

Norial se acercó.

—¿Entonces era por las cajas?

—Entre otras cosas.

—Pero las cajas no tocaban el aparatito.

—No hace falta tocar. A veces alcanza con existir cerca.

Norial no quedó convencida.

La gente espera que la tecnología falle por causas dramáticas. Rayos. Virus. Hackers. Proveedor. Satélites. Nadie quiere escuchar que el WiFi andaba mal porque el access point estaba enterrado bajo papel, una planta de plástico y quince celulares peleando por atención.

El viernes, alguien volvió a quejarse.

—El WiFi se corta en la esquina.

Fui.

La esquina quedaba detrás de una columna, dos muebles metálicos y una heladera.

—Acá es normal que llegue mal —expliqué.

—Pero es WiFi.

Como si “WiFi” significara “magia sin paredes”.

Ahí entendí que el problema del WiFi no era técnico.

Era conceptual.

La gente cree que la señal es una intención. Que si uno paga Internet, la señal debería atravesar paredes, muebles, cuerpos, heladeras, pasillos y decisiones arquitectónicas sin perder entusiasmo.

Pero la señal no sabe de necesidades humanas.

La señal viaja, rebota, se debilita y muere donde puede.

Como todos.

Al final, agregamos otro access point. Ordenamos canales. Pusimos nombres claros. Documentamos ubicación. Sacamos el equipo del armario, que ya era un triunfo cultural.

Durante unos días, nadie se quejó.

Eso en WiFi no significa que todo esté perfecto.

Significa que el silencio también tiene buena señal.

### Archivo de daños

**Frase escuchada:**  
“Pero es WiFi.”

**Causa real:**  
Un access point viejo, escondido arriba de un armario, tapado por cajas y peleando contra demasiados dispositivos.

**Tiempo perdido:**  
Una tarde, una silla inestable y varias explicaciones sobre por qué la señal no atraviesa todo por voluntad propia.

**Lección:**  
El WiFi no es magia. Y si lo enterrás bajo cajas, no está instalado: está sepultado.

---

# Notas para integración en el sitio

## Rutas sugeridas

```text
/cronicas/el-excel-que-se-convirtio-en-sistema-de-gestion/
/cronicas/el-cable-que-no-era-el-cable-pero-era-el-cable/
/cronicas/la-actualizacion-que-nadie-pidio/
/cronicas/el-servidor-que-tenia-mas-polvo-que-logs/
/cronicas/el-wifi-que-funcionaba-mejor-cuando-nadie-lo-necesitaba/
```

## Orden sugerido de más nuevo a más viejo

```text
1. El Excel que se convirtió en sistema de gestión
2. El cable que no era el cable, pero era el cable
3. La actualización que nadie pidió
4. El servidor que tenía más polvo que logs
5. El WiFi que funcionaba mejor cuando nadie lo necesitaba
```

## Prompt corto para Codex

```text
Use the provided Markdown file cronicas-del-sysadmin-segunda-tanda.md as source content for five new "Crónicas del Sysadmin" posts.

Tasks:
1. Create these static pages:
   - cronicas/el-excel-que-se-convirtio-en-sistema-de-gestion/index.html
   - cronicas/el-cable-que-no-era-el-cable-pero-era-el-cable/index.html
   - cronicas/la-actualizacion-que-nadie-pidio/index.html
   - cronicas/el-servidor-que-tenia-mas-polvo-que-logs/index.html
   - cronicas/el-wifi-que-funcionaba-mejor-cuando-nadie-lo-necesitaba/index.html

2. Convert each crónica into clean semantic HTML:
   - article
   - header
   - h1 title
   - excerpt/bajada
   - main story paragraphs
   - final "Archivo de daños" section using the existing damage-file styling

3. Preserve the current site layout, navigation, footer, CSS classes and responsive design.

4. Update cronicas/index.html to include these five posts plus the existing four posts.
   Use this order from newest to oldest:
   - El Excel que se convirtió en sistema de gestión
   - El cable que no era el cable, pero era el cable
   - La actualización que nadie pidió
   - El servidor que tenía más polvo que logs
   - El WiFi que funcionaba mejor cuando nadie lo necesitaba
   - La impresora que solo imprimía bajo amenaza
   - El usuario que no tocó nada, salvo todo
   - El backup que estaba “en algún lado”
   - El día que Internet caminaba despacio

5. Update the root index.html crónicas section:
   - Featured latest 2 posts:
     a) El Excel que se convirtió en sistema de gestión
     b) El cable que no era el cable, pero era el cable
   - Archive/list section should include the remaining older crónicas.

6. Update sitemap.xml to include the five new post URLs.

7. Add proper SEO tags to the five new pages:
   - title
   - meta description
   - canonical
   - og:title
   - og:description
   - og:type article
   - og:url
   - twitter:card
   - existing Open Graph image tags if the site already uses them
   - existing Google Analytics placeholder or GA4 tag, whichever is currently used in the site

8. Do not change unrelated files.

9. Verify locally that /, /cronicas/ and all nine crónica URLs return 200.
```
