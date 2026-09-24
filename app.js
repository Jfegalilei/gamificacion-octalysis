/* ==========================================================================
   Metodología Octalysis · página explicativa + diagnóstico
   Marco: Yu-kai Chou (Octalysis), tipos de jugador de Richard Bartle,
   y el newsletter The Octalysis Observer (ES).
   ========================================================================== */

document.documentElement.classList.add('js-ready');

/* ---------------------------------------------------------------- CORE DRIVES */

var DRIVES = {
  1: {
    n: 1, corto: 'Sentido Épico', nombre: 'Sentido Épico y Propósito',
    def: 'Querer formar parte de algo más grande que nosotros mismos.',
    hat: 'white', motiv: 'eje', ang: 0,
    largo: 'Hace que alguien dedique horas a algo que no le paga nada. Es el más lento de construir y el más difícil de fingir: si la causa no es real, se nota.',
    alto: 'Tu gente responde al para qué. Si entienden qué cambia en el mundo, o en la vida de alguien, porque ellos hacen bien su trabajo, se mueven sin que los empujes.',
    bajo: 'Los discursos de misión y visión les rebotan. No es cinismo: es que el propósito abstracto no es su palanca. Háblales de lo concreto.',
    palancas: [
      'Metas colectivas donde el resultado del grupo importe más que el individual',
      'Mostrar el impacto real del trabajo: a quién le cambió el día',
      'Dar a los veteranos un rol de mentor o guardián de los estándares',
      'Vincular una parte del esfuerzo a una causa que al equipo le importe'
    ]
  },
  2: {
    n: 2, corto: 'Progreso', nombre: 'Progreso y Cumplimiento de Objetivos',
    def: 'La motivación por subir de nivel, mejorar y alcanzar objetivos.',
    hat: 'white', motiv: 'ext', ang: 315,
    largo: 'El más usado, y por eso el más malgastado. Solo motiva si costó: si era fácil, el reconocimiento no vale nada. Lo que mueve no es el premio, es ver que se avanza.',
    alto: 'Les gusta ver que avanzan. Un progreso visible y una dificultad que suba de a poco valen más que el premio del final.',
    bajo: 'Las barras de progreso y los niveles les dan igual. Medirlos de más puede sentirse como vigilancia, no como reto.',
    palancas: [
      'Niveles con nombres que signifiquen algo, no solo números',
      'Retos con dificultad creciente: que el siguiente cueste un poco más',
      'Feedback inmediato de cuánto falta para el siguiente escalón',
      'Certificaciones o acreditaciones internas por habilidad'
    ]
  },
  3: {
    n: 3, corto: 'Creatividad', nombre: 'Empoderamiento de la Creatividad y Retroalimentación',
    def: 'El impulso creativo que se ajusta con retroalimentación.',
    hat: 'white', motiv: 'int', ang: 45,
    largo: 'El único que no se agota. Los demás hay que seguir alimentándolos con premios nuevos; este se sostiene solo, porque la persona inventa sus propias razones. Necesita libertad para decidir y que el resultado se vea rápido.',
    alto: 'Quieren decidir cómo hacerlo, no solo hacerlo. Dales margen y una respuesta rápida a lo que intentan, y se quedan solos en el juego.',
    bajo: 'Prefieren reglas claras a libertad. Demasiada autonomía les genera ruido; agradecen el paso a paso.',
    palancas: [
      'Dejar que elijan entre varias formas válidas de cumplir la meta',
      'Respuesta inmediata a lo que hacen, no evaluación a fin de mes',
      'Comodines que ellos deciden cuándo usar: saltarse un paso, elegir turno',
      'Espacio para proponer mejoras al proceso y verlas aplicadas'
    ]
  },
  4: {
    n: 4, corto: 'Propiedad', nombre: 'Propiedad y Posesión',
    def: 'Las ganas de tener: plata, cosas y lo que se siente propio.',
    hat: 'neutral', motiv: 'ext', ang: 270,
    largo: 'Este es el motivador de lo material, y por eso es el que más se malinterpreta: no se trata de insignias, se trata de tener. La forma más directa y más honesta de activarlo es la plata — un bono, una comisión, efectivo. Después vienen las cosas que quedan, y por último lo simbólico. Y ojo con lo incompleto: lo que le faltan dos sellos jala más que lo que ya está lleno.',
    alto: 'Quieren tener. La plata, un bono, una herramienta propia o un premio que se llevan a la casa les pesa más que cualquier reconocimiento. Un mesero no cambia el efectivo por un distintivo: si este motivador está alto, empieza por lo material.',
    bajo: 'No es que la plata no les sirva — a todo el mundo le sirve. Es que no es lo que los mueve a hacer más: prefieren una ventaja, un rato libre o un reconocimiento antes que algo que se guarda.',
    palancas: [
      'Plata: bonos, comisiones, efectivo. Es lo más directo y no hay que explicarlo',
      'Cosas que se llevan y quedan: mercado, herramientas, un premio físico',
      'Puntos o moneda interna acumulable que se cambie por algo real',
      'Colecciones por partes: que haya que juntar piezas para completar algo',
      'Personalización de su perfil, su puesto o sus herramientas'
    ]
  },
  5: {
    n: 5, corto: 'Influencia Social', nombre: 'Influencia Social y Relacionamiento',
    def: 'Cuando queremos colaborar, competir y expresarnos en un espacio social.',
    hat: 'neutral', motiv: 'int', ang: 90,
    largo: 'El más común de todos: cerca del 80% de las personas lo tiene alto. Incluye competir, ayudar, presumir, envidiar y pertenecer.',
    alto: 'El grupo es el motor. Lo que hagan sus compañeros, y lo que sus compañeros vean de ellos, pesa más que cualquier incentivo individual.',
    bajo: 'Son de trabajar a su ritmo. Exponerlos en público puede incomodarlos más que motivarlos; reconócelos en privado.',
    palancas: [
      'Retos por equipo o por sede, no solo individuales',
      'Reconocimiento visible entre pares, no solo del jefe',
      'Mentorías y duplas donde uno enseñe al otro',
      'Recompensas que solo se consiguen a través de otra persona'
    ]
  },
  6: {
    n: 6, corto: 'Escasez', nombre: 'Escasez e Impaciencia',
    def: 'El anhelo por lo que es muy limitado o difícil de obtener.',
    hat: 'black', motiv: 'ext', ang: 225,
    largo: 'Queremos lo que no podemos tener, y esperar aumenta las ganas en vez de apagarlas. Suena al revés, pero si quieres que algo se haga más, ponle un límite.',
    alto: 'Lo limitado les llama. Una ventana que se cierra o un beneficio que solo alcanzan algunos les mueve la aguja rápido.',
    bajo: 'La urgencia artificial les genera rechazo o estrés, no ganas. Si lo ven forzado, se desconectan.',
    palancas: [
      'Beneficios que se abren solo al llegar a cierto punto',
      'Ventanas de tiempo reales, no inventadas',
      'Catálogos o cupos que rotan y no siempre están',
      'Acceso anticipado para quienes van adelante'
    ]
  },
  7: {
    n: 7, corto: 'Impredecibilidad', nombre: 'Impredecibilidad y Curiosidad',
    def: 'El deseo de descubrir lo impredecible o novedoso.',
    hat: 'black', motiv: 'int', ang: 135,
    largo: 'No saber qué va a pasar mantiene a la cabeza pendiente. Es el motor del chance y de la rifa. Potentísimo, y el más fácil de volver dañino si nadie lo vigila.',
    alto: 'La sorpresa los engancha. No saber qué va a pasar hoy les da una razón para volver que ningún premio fijo logra.',
    bajo: 'Prefieren saber a qué atenerse. El azar les parece injusto: quieren que el esfuerzo tenga una consecuencia predecible.',
    palancas: [
      'Recompensas aleatorias: saben qué hacer, no qué van a recibir',
      'Sorpresas sin anunciar cuando alguien hace algo bien',
      'Contenido o retos que cambian de un día para otro',
      'Sorteos donde entrar cueste poco y pueda participar cualquiera'
    ]
  },
  8: {
    n: 8, corto: 'Evitación', nombre: 'Pérdida y Evitación',
    def: 'El impulso de querer evitar resultados negativos o consecuencias indeseables.',
    hat: 'black', motiv: 'eje', ang: 180,
    largo: 'Perder duele más o menos el doble de lo que alegra ganar lo mismo. Por eso es el más eficaz a corto plazo y el más peligroso a largo: la gente cumple, pero te odia mientras lo hace.',
    alto: 'Pesa más no perder que ganar. Cuidado: es la palanca más potente y la más fácil de usar mal — si abusas, se vuelve miedo, no motivación.',
    bajo: 'Amenazar con quitarles algo no funciona: simplemente lo sueltan. Con este equipo hay que construir hacia adelante.',
    palancas: [
      'Rachas que se cuidan día a día, con una red de seguridad',
      'Progreso guardado que se pausa si se abandona',
      'Oportunidades con fecha de vencimiento clara',
      'Avisar lo que está a punto de perderse, a tiempo para evitarlo'
    ]
  }
};

/* Un motivador se entiende cuando se reconoce en algo que ya usas. */
var EJEMPLOS = {
  1: [
    { app: 'Wikipedia', que: 'Miles de personas escriben artículos gratis, sin crédito, para que cualquiera pueda leerlos.' },
    { app: 'Waze', que: 'Reportar un hueco no te sirve a ti: le sirve al que viene detrás.' },
    { app: 'Donar sangre', que: 'Nadie te paga. Te mueve saber que a alguien le salvó el día.' }
  ],
  2: [
    { app: 'LinkedIn', que: 'Tu perfil está al 70%. Nadie te obliga a completarlo, pero incomoda dejarlo así.' },
    { app: 'Cinturones de karate', que: 'El color no sirve para pelear. Sirve para ver cuánto avanzaste.' },
    { app: 'Las rayas en la pared', que: 'La marca donde se mide un niño. No sirve para nada, salvo para ver cuánto creció.' }
  ],
  3: [
    { app: 'Cocinar sin receta', que: 'Pruebas, le falta sal, le echas, vuelves a probar. Ese ir y venir es el gusto.' },
    { app: 'Lego', que: 'Las instrucciones son opcionales. Ahí está la gracia.' },
    { app: 'Editar una foto', que: 'Probar, ver el resultado al segundo, ajustar, volver a probar.' }
  ],
  4: [
    { app: 'La propina', que: 'El mismo turno, el mismo esfuerzo. Lo que cambia es que ese billete ya es suyo.' },
    { app: 'Álbum Panini', que: 'Faltan tres láminas. Nadie descansa hasta completarlo.' },
    { app: 'La alcancía', que: 'Cuesta romperla aunque el dinero sea tuyo. Lo ahorrado se siente propio.' }
  ],
  5: [
    { app: 'Likes', que: 'El número no vale nada y aun así revisas cuánto subió.' },
    { app: 'El restaurante lleno', que: 'Entre uno vacío y uno con fila, eliges el de la fila. Si tanta gente va, por algo será.' },
    { app: 'El gimnasio con amigos', que: 'Solo, faltas. Si te están esperando a las 6, vas.' }
  ],
  6: [
    { app: 'Booking', que: 'Queda una habitación a ese precio. Decides en treinta segundos lo que ibas a pensar una semana.' },
    { app: 'El plato del día', que: 'Se acaba a la una. Por eso la gente llega a las doce y media.' },
    { app: 'Ediciones limitadas', que: 'El mismo zapato, pero solo 500 pares. Se agota igual.' }
  ],
  7: [
    { app: 'El scroll de TikTok', que: 'Nunca sabes qué viene en el siguiente video. Por eso no paras.' },
    { app: 'Cajas sorpresa', que: 'Abrir vale más que lo que sale adentro.' },
    { app: 'La lotería', que: 'La probabilidad es pésima y aun así se juega todas las semanas.' }
  ],
  8: [
    { app: 'La racha de Duolingo', que: '47 días seguidos. Nadie estudia hoy por aprender: estudia por no romperla.' },
    { app: 'El cupón que vence', que: 'Tienes 10 minutos para usarlo. Ya es tuyo, y por eso te apuras: no quieres perderlo.' },
    { app: 'Millas que vencen', que: 'No pensabas usarlas, pero perderlas duele más que el viaje que no ibas a hacer.' }
  ]
};

/* Nombre para dibujar dentro del octágono, partido en las líneas que caben. */
/* El corazón (05) y los dados (07) son anchos y bajitos: en el mismo cuadro
   que los demás se ven más chicos. Se agrandan para que queden parejos. */
var ESCALA_ICONO = { 5: 1.3, 7: 1.3 };
function ladoIcono(cd, lado) { return Math.round(lado * (ESCALA_ICONO[cd] || 1)); }

var NOMBRE_OCTA = {
  1: ['Sentido', 'Épico'],
  2: ['Progreso'],
  3: ['Creatividad'],
  4: ['Propiedad'],
  5: ['Influencia', 'Social'],
  6: ['Escasez'],
  7: ['Curiosidad'],
  8: ['Evitación']
};

var ORDEN_RELOJ = [1, 3, 5, 7, 8, 6, 4, 2];
var NIVEL_LABEL = { alto: 'Alto', medio: 'Medio', bajo: 'Bajo' };

/* ---------------------------------------------------------------- LAS 4 FASES */
/* El mismo motivador no sirve igual el primer día que un año después. */

var FASES = [
  {
    id: 'descubrimiento', n: 1, nombre: 'Descubrimiento', cuando: 'todavía no entra',
    pregunta: '¿Por qué alguien se acercaría siquiera?',
    def: 'Todavía no participa: está decidiendo si esto le interesa. Aquí no hay progreso que mostrar ni comunidad que ofrecer. Solo una promesa.',
    dominan: [1, 7], apoyan: [5, 6],
    haz: [
      'Una razón que se entienda en una frase: qué gana y por qué existe esto',
      'Algo que despierte curiosidad sin explicarlo todo de entrada',
      'Que se lo cuente alguien de confianza, no un anuncio',
      'Que entrar se sienta un privilegio: cupos, invitación, primeros en la fila'
    ],
    falla: 'Nadie entra. Tienes un sistema perfecto que no vio nadie.'
  },
  {
    id: 'tutorial', n: 2, nombre: 'Tutorial', cuando: 'los primeros días',
    pregunta: '¿Entiende las reglas y siente que puede?',
    def: 'Ya entró. Está aprendiendo cómo funciona y necesita ganar algo pronto para creer que vale la pena. Es la fase más frágil de las cuatro.',
    dominan: [2, 3], apoyan: [4, 7],
    haz: [
      'Una primera victoria rápida, casi regalada, el primer día',
      'Respuesta inmediata a cada acción: que sepa si va bien',
      'Enseñar una regla a la vez, nunca el manual completo'
    ],
    falla: 'Entran y se van el mismo día. Es donde se pierde más gente.'
  },
  {
    id: 'desarrollo', n: 3, nombre: 'Desarrollo', cuando: 'el día a día',
    pregunta: '¿Por qué vuelve mañana, y pasado?',
    def: 'Ya sabe jugar. Esta es la rutina larga, el día a día, y es donde vive casi toda la experiencia. También donde más fácil se cae en el aburrimiento.',
    dominan: [4, 5, 7, 8], apoyan: [2, 3, 6],
    haz: [
      'Una racha que cuidar: lo que ya se lleva ganado pesa más que lo que falta',
      'Algo que ir juntando, y alguien con quien compararse',
      'Dosis de sorpresa para romper la rutina',
      'Margen para hacerlo a su manera: es lo único que no se gasta con el tiempo',
      'Metas intermedias que se vean cerca'
    ],
    falla: 'Se aburren a la semana. Cumplen por obligación y el sistema se vuelve un trámite.'
  },
  {
    id: 'maestria', n: 4, nombre: 'Maestría', cuando: 'el que lleva años',
    pregunta: '¿Por qué sigue el que ya lo tiene todo?',
    def: 'Ya consiguió lo que había y no quedan niveles por desbloquear. Si no le das una razón distinta se va, y es justo la persona que más te sirve.',
    dominan: [1, 5, 8], apoyan: [3, 6],
    haz: [
      'Un rol: mentor, referente, alguien que cuida el estándar',
      'Estatus que solo se consigue con tiempo',
      'Algo que solo ellos puedan hacer o decidir',
      'Que sientan que lo construido se perdería si se van'
    ],
    falla: 'Los mejores se van justo cuando más valen, y se llevan lo que sabían.'
  }
];

/* ---------------------------------------------------------------- QUIZ */

var QUIZ = [
  { cd: 8, texto: 'Llevas 47 días seguidos estudiando y la app te avisa que hoy todavía no has entrado.', pista: 'No estudias hoy por aprender: estudias por no romper la racha.' },
  { cd: 6, texto: 'Queda una habitación a ese precio, dice la página. Decides en treinta segundos lo que ibas a pensar una semana.', pista: 'Lo limitado acelera la decisión. Con cien habitaciones lo pensarías.' },
  { cd: 7, texto: 'Cada video que aparece al deslizar es distinto, y nunca sabes cuál viene.', pista: 'Lo que engancha no es el video: es no saber qué sigue.' },
  { cd: 2, texto: 'Una barra te dice que tu perfil está completo al 70%.', pista: 'Nadie te obliga. Te mueve ver el avance y querer cerrarlo.' },
  { cd: 4, texto: 'Acumulas estrellas en una cafetería, y por eso vuelves a esa y no a la de enfrente.', pista: 'Las estrellas ya son tuyas. Cambiar de cafetería sería dejarlas atrás.' },
  { cd: 5, texto: 'La factura del agua te dice que tu vecino ahorró 50 m³ más que tú este año.', pista: 'El agua cuesta lo mismo que ayer. Lo que cambió es que ahora te comparas con alguien.' },
  { cd: 1, texto: 'Escribes un artículo gratis, sin tu nombre, para que cualquiera pueda leerlo.', pista: 'No hay recompensa ni reconocimiento. Hay una causa más grande que tú.' },
  { cd: 3, texto: 'Cocinas sin receta: pruebas, le falta sal, le echas, vuelves a probar.', pista: 'Decides tú y el plato te responde de inmediato. Ese ir y venir es el motor.' }
];

/* ---------------------------------------------------------------- PREGUNTAS */
/* w: { <core drive>: peso }. Heurísticos: punto de partida para hablar con el
   equipo, no una medición. */

var PREGUNTAS = [
  {
    id: 'edad',
    titulo: '¿Qué edad tiene la mayor parte de tu equipo?',
    ayuda: 'El rango donde cae más gente, no el promedio exacto.',
    multi: false,
    opciones: [
      { v: '18-24', t: '18 a 24 años', w: { 5: 18, 7: 14, 6: 10, 2: 8, 4: 6, 1: -6 } },
      { v: '25-34', t: '25 a 34 años', w: { 2: 14, 4: 12, 5: 10, 7: 6 } },
      { v: '35-44', t: '35 a 44 años', w: { 4: 14, 1: 12, 8: 10, 2: 8, 7: -4 } },
      { v: '45-54', t: '45 a 54 años', w: { 1: 16, 8: 14, 4: 10, 5: 6, 6: -6, 7: -8 } },
      { v: '55+', t: '55 años o más', w: { 1: 18, 8: 16, 5: 8, 3: 6, 6: -8, 7: -10 } }
    ]
  },
  {
    id: 'trabajo',
    titulo: '¿Qué hace tu equipo la mayor parte del día?',
    ayuda: 'Si es mixto, elige lo que hace la mayoría.',
    multi: false,
    opciones: [
      { v: 'cara', t: 'Atiende gente', w: { 5: 16, 4: 10, 3: 8, 7: 6, 2: -10 } },
      { v: 'produccion', t: 'Produce o fabrica', w: { 3: 8, 8: 8, 4: 6, 2: 2 } },
      { v: 'logistica', t: 'Mueve o gestiona inventario', w: { 4: 10, 8: 10 } },
      { v: 'ventas', t: 'Vende', w: { 6: 12, 4: 10, 5: 8, 2: 6 } },
      { v: 'admin', t: 'Trabajo administrativo', w: { 1: 8, 3: 6, 7: -4, 2: 2 } },
      { v: 'tecnico', t: 'Trabajo técnico o de campo', w: { 3: 12, 4: 8 } }
    ]
  },
  {
    id: 'plata',
    titulo: '¿Qué tanto pesa la plata en el día a día de tu equipo?',
    ayuda: 'No es una pregunta incómoda: es de las más útiles. Si el sueldo es lo que aprieta, lo material no es un premio más — es el premio.',
    multi: false,
    opciones: [
      { v: 'aprieta', t: 'El mes se estira: cualquier peso extra cuenta', w: { 4: 24, 8: 12, 6: 10, 1: -8, 3: -6 } },
      { v: 'variable', t: 'Parte de lo que ganan es variable: propina, comisión, horas', w: { 4: 18, 2: 12, 6: 8, 7: 6 } },
      { v: 'justo', t: 'Sueldo fijo que les alcanza, sin holgura', w: { 4: 10, 2: 8, 8: 6 } },
      { v: 'holgado', t: 'Ganan bien: la plata no es lo que los mueve', w: { 4: -10, 1: 12, 3: 12, 5: 8, 2: 6 } }
    ]
  },
  {
    id: 'social',
    titulo: 'Durante el turno, ¿cómo trabajan?',
    ayuda: 'Es el mejor predictor de cuánto pesa lo social.',
    multi: false,
    opciones: [
      { v: 'juntos', t: 'Varios juntos, todo el tiempo', w: { 5: 18, 1: 6 } },
      { v: 'mixto', t: 'A ratos juntos, a ratos solos', w: { 5: 6 } },
      { v: 'solos', t: 'Solos o en parejas', w: { 5: -12, 2: 10, 7: 8, 3: 6 } },
      { v: 'remoto', t: 'Cada uno por su lado o a distancia', w: { 5: -16, 2: 12, 3: 10, 4: 6 } }
    ]
  },
  {
    id: 'rotacion',
    titulo: '¿Cuánto dura la gente en el puesto?',
    ayuda: 'La rotación define si hay que enganchar rápido o construir a largo plazo.',
    multi: false,
    opciones: [
      { v: 'alta', t: 'Menos de 6 meses', w: { 6: 14, 7: 12, 2: 6, 4: -8, 1: -12, 5: -4 } },
      { v: 'media', t: 'Entre 6 meses y 2 años', w: { 2: 8, 4: 6 } },
      { v: 'baja', t: 'Más de 2 años', w: { 1: 16, 5: 12, 4: 10, 3: 8, 6: -8 } }
    ]
  },
  {
    id: 'libre',
    titulo: '¿Qué hace tu equipo en su tiempo libre?',
    ayuda: 'Elige todas las que reconozcas. Es la señal más fuerte del diagnóstico: conducta real, no demografía.',
    multi: true,
    opciones: [
      { v: 'equipo', t: 'Deportes en equipo', w: { 5: 18, 2: 12, 8: 6 } },
      { v: 'gym', t: 'Gimnasio o deporte individual', w: { 2: 18, 4: 8, 8: 8 } },
      { v: 'gaming', t: 'Videojuegos', w: { 2: 14, 7: 14, 3: 10, 6: 8 } },
      { v: 'redes', t: 'Redes sociales', w: { 5: 16, 7: 12, 6: 8 } },
      { v: 'salir', t: 'Salir con amigos, rumba', w: { 5: 18, 7: 10 } },
      { v: 'familia', t: 'Estar con la familia', w: { 1: 16, 8: 14, 4: 8, 6: -6 } },
      { v: 'estudiar', t: 'Estudiar o tomar cursos', w: { 2: 18, 3: 10, 1: 8 } },
      { v: 'musica', t: 'Música, bailar, tocar algo', w: { 3: 18, 5: 10 } },
      { v: 'crear', t: 'Cocinar, tejer, manualidades', w: { 3: 18, 4: 12 } },
      { v: 'apuestas', t: 'Chance, rifas, apuestas', w: { 7: 20, 6: 12, 4: 6 } },
      { v: 'series', t: 'Series y streaming', w: { 7: 10, 1: 4, 2: -6, 5: -4 } },
      { v: 'viajar', t: 'Viajar, salir a conocer', w: { 7: 16, 3: 10, 1: 8 } },
      { v: 'comunidad', t: 'Iglesia, voluntariado, comunidad', w: { 1: 20, 5: 12, 8: 6 } },
      { v: 'negocio', t: 'Un negocio o venta por fuera', w: { 4: 16, 2: 12, 6: 8 } },
      { v: 'coleccion', t: 'Coleccionar algo', w: { 4: 20, 6: 10, 7: 6 } },
      { v: 'videos', t: 'Crear contenido, grabar videos', w: { 3: 16, 5: 14, 7: 6 } }
    ]
  },
  {
    id: 'origen',
    titulo: '¿De dónde es tu equipo?',
    ayuda: 'Opcional, y es el factor que menos pesa. Marca todos los que apliquen, o sáltala. Solo ajusta el punto de partida: el contexto cultural cambia qué tan normal se siente competir en público o jugarse algo al azar. No describe a las personas.',
    opcional: true,
    multi: true,
    /* Los pesos son regionales, no nacionales: los países de una misma región
       comparten valores porque no hay con qué sostener una diferencia entre
       ellos. Van separados porque meterlos en un mismo renglón se lee mal. */
    opciones: [
      { v: 'co', t: 'Colombia', w: { 7: 8, 6: 6, 5: 4, 1: 4 } },
      { v: 'mx', t: 'México', w: { 1: 8, 4: 6, 7: 6, 5: 4 } },
      { v: 've', t: 'Venezuela', w: { 8: 8, 4: 6, 5: 2 } },
      { v: 'ec', t: 'Ecuador', w: { 8: 8, 4: 6, 5: 2 } },
      { v: 'pe', t: 'Perú', w: { 8: 8, 4: 6, 5: 2 } },
      { v: 'bo', t: 'Bolivia', w: { 8: 8, 4: 6, 5: 2 } },
      { v: 'ar', t: 'Argentina', w: { 2: 8, 3: 8, 5: -2 } },
      { v: 'cl', t: 'Chile', w: { 2: 8, 3: 8, 5: -2 } },
      { v: 'uy', t: 'Uruguay', w: { 2: 8, 3: 8, 5: -2 } },
      { v: 'py', t: 'Paraguay', w: { 2: 8, 3: 8, 5: -2 } },
      { v: 'br', t: 'Brasil', w: { 3: 8, 7: 6, 5: 4 } },
      { v: 'ca', t: 'Centroamérica', w: { 1: 8, 8: 6, 5: 2 } },
      { v: 'car', t: 'Caribe', w: { 7: 8, 3: 6, 5: 4 } },
      { v: 'es', t: 'España', w: { 2: 8, 3: 6, 5: 2 } },
      { v: 'us', t: 'Estados Unidos o Canadá', w: { 2: 10, 4: 8, 3: 6, 5: -6 } }
    ]
  }
];

/* ---------------------------------------------------------------- TIPOS DE JUGADOR */

var TIPOS_JUGADOR = [
  {
    id: 'killer', nombre: 'Asesinos', original: 'Killers',
    cds: [2, 5], extra: [],
    def: 'Les gusta ganar, y les gusta sobre todo cuando se nota que ganaron. Necesitan que alguien vea el logro para que el logro cuente.',
    dale: 'Rankings visibles, retos cara a cara, reconocimiento público. Ojo: si el ranking siempre lo gana el mismo, el resto se retira.'
  },
  {
    id: 'achiever', nombre: 'Cazadores', original: 'Achievers',
    cds: [2, 6], extra: [],
    def: 'Buscan el logro más grande posible dentro del sistema, siempre que el objetivo sea de verdad difícil. Un reto fácil no les interesa.',
    dale: 'Metas exigentes, niveles escalonados y cosas que solo se desbloquean con esfuerzo real. Nada de premios de participación.'
  },
  {
    id: 'socializer', nombre: 'Socializadores', original: 'Socializers',
    cds: [5], extra: [],
    def: 'Están ahí por la gente. Compartir y colaborar es la razón, no el medio. Es el perfil más común de lejos: a cerca del 80% de las personas la mueve lo social, y aun así casi todos los programas de incentivos se arman para que cada quien compita solo.',
    dale: 'Retos en grupo, recompensas que dependan de otro, espacios donde conversar. Competir solos los apaga.'
  },
  {
    id: 'explorer', nombre: 'Exploradores', original: 'Explorers',
    cds: [7, 3], extra: [],
    def: 'Quieren descubrir qué más hay. Prueban los límites del sistema, experimentan y encuentran los atajos que nadie buscó.',
    dale: 'Cosas escondidas, sorpresas, mecánicas que se revelan con el tiempo y margen para hacerlo a su manera.'
  }
];

/* ---------------------------------------------------------------- RECOMPENSAS */

var SAPS = [
  {
    letra: 'S', nombre: 'Estatus', en: 'Status', cds: [5, 2, 6], nivel: 1,
    def: 'Formas de que se le note lo que logró.',
    ejemplos: ['Tablas de los mejores por día, semana o mes', 'Comparar por grupo: sede, ciudad, turno', 'Categorías por nivel, como en los deportes', 'Un distintivo visible por algo logrado', 'Reconocer la calidad, no la cantidad'],
    costo: 'Muy bajo'
  },
  {
    letra: 'A', nombre: 'Acceso', en: 'Access', cds: [6], nivel: 2,
    def: 'Privilegios u oportunidades que solo tienen algunos.',
    ejemplos: ['Entrar a un espacio o un beneficio que otros no tienen', 'Trato preferente al ir avanzando', 'Enterarse o participar antes que los demás', 'Elegir turno, ruta o herramienta antes que el resto'],
    costo: 'Bajo'
  },
  {
    letra: 'P', nombre: 'Poder', en: 'Power', cds: [3], nivel: 3,
    def: 'Poder cambiar una regla a su favor, o tener el trabajo más fácil por un rato.',
    ejemplos: ['Ventajas que duran un rato y hay que aprovechar', 'Poder cambiar una regla a su favor', 'Comodines para saltarse un paso cuando ellos decidan'],
    costo: 'Bajo',
    nota: 'Cuesta poco y se puede dar seguido sin desgastarse, así que conviene tenerla disponible todo el tiempo — no solo en fechas especiales.'
  },
  {
    letra: 'S', nombre: 'Cosas', en: 'Stuff', cds: [4], nivel: 4,
    def: 'Lo material: puntos, objetos, descuentos, comida, dinero. Lo único que sirve cuando alguien todavía no te conoce y no tiene ninguna razón para creerte.',
    ejemplos: ['Dinero, que es lo más directo y lo que menos hay que explicar', 'Bonos y descuentos', 'Premios que se llevan a la casa', 'Puntos que se cambian por algo'],
    costo: 'Alto',
    nota: 'Es la puerta de entrada, y por eso es insustituible al principio. Lo que no aguanta es ser lo único: cuesta plata, se consume, y una vez puesta, quitarla duele más de lo que sumó darla. Úsala para que entren, y ve sumando las otras tres para que se queden.'
  }
];

/* tecnica: el número de la Técnica de Juego de Octalysis con que la nombra
   el boletín The Octalysis Observer. */
var ENTREGAS = [
  { id: 'fija', tecnica: 7, icono: 'fija.png', nombre: 'Acción Fija', cds: [2, 4, 6], def: 'La persona sabe exactamente qué hacer y exactamente qué va a recibir. Diez sellos, un café.', cuando: 'Para volver algo costumbre: es la más clara y la más fácil de explicar.' },
  { id: 'aleatoria', tecnica: 72, icono: 'aleatoria.png', nombre: 'Recompensas Aleatorias', cds: [7], def: 'Sabe qué tiene que hacer, pero no qué va a recibir a cambio.', cuando: 'Cuando la rutina ya se volvió aburrida y hay que despertar la curiosidad. El raspa y gana es esto.' },
  { id: 'easter', tecnica: 30, icono: 'inesperada.png', nombre: 'Recompensas Inesperadas (Easter Eggs)', cds: [7, 5], def: 'Una sorpresa que nadie anunció. La persona cumplió el requisito sin enterarse de que existía.', cuando: 'Para que se corra la voz: lo primero que hace quien la recibe es contarlo.' },
  { id: 'loteria', tecnica: 74, icono: 'loteria.png', nombre: 'Recompensas Rotativas (Lotería)', cds: [7, 6], def: 'Un premio grande para unos pocos, elegidos al azar. Entrar cuesta poco y ganar es difícil; entre más participa uno, más opciones tiene.', cuando: 'Cuando quieres que participe mucha gente sin gastar mucho.' },
  { id: 'social', tecnica: 63, icono: 'social.png', nombre: 'Tesoro Social', cds: [5], def: 'Algo que solo se consigue a través de otra persona: no se compra ni se gana solo.', cuando: 'Para que la gente se busque entre sí. Referidos, comisiones, regalos entre compañeros.' },
  { id: 'coleccion', tecnica: 16, icono: 'coleccion.svg', nombre: 'Elementos Coleccionables', cds: [4, 7], def: 'El premio llega partido: hay que juntar todas las piezas para armarlo.', cuando: 'Para sostener el esfuerzo en el tiempo. Es lo mismo que llenar una tarjeta de sellos.' }
];

/* tecnica: el número de la Técnica de Juego de Octalysis (Yu-kai Chou):
   Mystery Box #72, Magnetic Caps #68, Boosters #31. */
var MECANICAS_POTENTES = [
  {
    nombre: 'Caja Misteriosa', tecnica: 72, icono: 'sorpresa.png', cds: [7, 8, 2, 4, 3],
    def: 'Algo que se recibe solo por aparecer, y que cambia cada día. La persona sabe que va a recibir algo; no sabe qué. Como una caja que se abre al llegar.',
    como: 'Crea la costumbre de volver todos los días, y mantiene la cosa presente en la cabeza de la gente.',
    ojo: 'Si lo que sale adentro siempre es parecido, deja de ser impredecible y se vuelve trámite.'
  },
  {
    nombre: 'Topes Magnéticos', tecnica: 68, icono: 'tope.png', cds: [6, 8],
    def: 'Un máximo puesto a propósito un poco por encima de lo que la gente ya hace, que se amplía para quien avanza.',
    como: 'Suena al revés, pero funciona: si quieres que algo se haga más, ponle un límite.',
    ojo: 'El tope tiene que quedar cerca de lo que la gente ya hace. Muy alto no se siente; muy bajo desespera.'
  },
  {
    nombre: 'Potenciadores', tecnica: 31, icono: 'ventajas.png', cds: [3, 2],
    def: 'Un beneficio que dura poco y que le facilita las cosas a la persona mientras corre: cuenta doble, se salta un requisito, elige primero.',
    como: 'Mientras la ventaja está activa, la gente busca hacer justo lo que tú querías. Es la hora feliz: el mismo trago, pero todo el mundo llega a las seis.',
    ojo: 'Es la de mayor valor de todas, y conviene que exista todo el tiempo, no una vez al año.'
  }
];

/* ---------------------------------------------------------------- ESTADO */

var respuestas = {};
var resultado = null;
var CLAVE_STORAGE = 'octalysis-diagnostico-v1';

function guardar() {
  try { localStorage.setItem(CLAVE_STORAGE, JSON.stringify(respuestas)); } catch (e) { /* modo privado */ }
}
function recuperar() {
  try {
    var raw = localStorage.getItem(CLAVE_STORAGE);
    if (raw) respuestas = JSON.parse(raw) || {};
  } catch (e) { respuestas = {}; }
}

function pad(n) { return n < 10 ? '0' + n : String(n); }

/* El nombre de un motivador va siempre con su ícono del folleto. */
function iconoCD(cd) { return '<img class="gm-cd-ico" src="assets/cd/cd' + cd + '.png" alt="">'; }
function chipCD(cd, extra) {
  return '<span class="gm-cd-chip' + (extra ? ' ' + extra : '') + '">' +
    iconoCD(cd) + DRIVES[cd].corto + '</span>';
}

/* ---------------------------------------------------------------- OCTÁGONO */

/* Geometría. El octágono base es fijo y queda hueco en el centro: es donde
   viven los íconos. La masa tiene un vértice por motivador, y cada vértice
   sale derecho desde el centro del lado que le toca: qué tan lejos está del
   centro es cuánto hay de ese motivador. Entre vértice y vértice va una
   recta. En las esquinas del octágono base no hay vértice. */
var OCTA = { cx: 380, cy: 380, inner: 104, base: 300, punta: 215 };

var COS22 = Math.cos(22.5 * Math.PI / 180);
/* Apotema: del centro al centro del lado. Ahí arranca cada vértice. */
var APOTEMA = OCTA.base * COS22;
/* Lo más lejos que puede llegar un vértice. */
var R_TOPE = APOTEMA + OCTA.punta;

var VALOR_NIVEL = { alto: 100, medio: 58, bajo: 24 };
/* Las etiquetas arrancan más allá de la esquina más lejana posible, así la
   masa nunca se les monta encima. Las de los lados se alinean hacia afuera. */
var R_ETIQUETA = R_TOPE + 24;

/* viewBox según lo que tenga que caber: el octágono plano no se sale, el
   medido sí, y si además lleva etiquetas por fuera, hay que dejarles ancho. */
function vistaDe(radio) {
  var lado = radio * 2, orig = OCTA.cx - radio;
  return orig.toFixed(0) + ' ' + orig.toFixed(0) + ' ' + lado.toFixed(0) + ' ' + lado.toFixed(0);
}
var VISTA = {
  plano: '0 0 760 760',
  ejes: vistaDe(450),
  masa: vistaDe(R_TOPE + 10),
  masaEtiquetas: vistaDe(R_ETIQUETA + 80)
};

function ancla(angDeg) {
  if (angDeg === 0 || angDeg === 180) return '';
  return angDeg < 180 ? ' a-ini' : ' a-fin';
}

function punto(r, angDeg) {
  var a = (angDeg - 90) * Math.PI / 180;
  return [OCTA.cx + r * Math.cos(a), OCTA.cy + r * Math.sin(a)];
}

function coords(p) { return p[0].toFixed(1) + ' ' + p[1].toFixed(1); }
function poligono(puntos) { return 'M ' + puntos.map(coords).join(' L ') + ' Z'; }

/* Octágono completo a un radio dado: el marco y las marcas de referencia. */
function octPath(r) {
  return poligono(ORDEN_RELOJ.map(function (cd) { return punto(r, DRIVES[cd].ang - 22.5); }));
}

/* Segmento plano: trapecio del anillo interior al borde. */
function pathSegmento(angDeg, rExt, rInt) {
  var gap = 2.2;
  var a0 = angDeg - 22.5 + gap, a1 = angDeg + 22.5 - gap;
  return poligono([punto(rExt, a0), punto(rExt, a1), punto(rInt, a1), punto(rInt, a0)]);
}

/* El vértice de un motivador: sale del centro de su lado y se aleja según
   cuánto haya de él. En 0 queda pegado al lado; en 100 llega al tope. */
function radioVertice(valor) {
  return APOTEMA + OCTA.punta * (Math.max(0, Math.min(100, valor)) / 100);
}

/* Octágono de referencia a una altura dada sobre el lado: tiene sus vértices
   donde los tendría la masa, no en las esquinas del octágono base. */
function octMedio(r) {
  return poligono(ORDEN_RELOJ.map(function (cd) { return punto(r, DRIVES[cd].ang); }));
}
function octOffset(h) { return octMedio(APOTEMA + h); }

function haciaEl(a, b, r) {
  var dx = b[0] - a[0], dy = b[1] - a[1];
  var len = Math.sqrt(dx * dx + dy * dy) || 1;
  var t = Math.min(r, len / 2) / len;
  return [a[0] + dx * t, a[1] + dy * t];
}

/* Polígono con las esquinas matadas: la masa es una sola pieza blanda, no un
   recorte de aristas. */
function poligonoRedondo(pts, r) {
  var n = pts.length, d = '';
  for (var i = 0; i < n; i++) {
    var cur = pts[i];
    var p1 = haciaEl(cur, pts[(i - 1 + n) % n], r);
    var p2 = haciaEl(cur, pts[(i + 1) % n], r);
    d += (i === 0 ? 'M ' : ' L ') + coords(p1) + ' Q ' + coords(cur) + ' ' + coords(p2);
  }
  return d + ' Z';
}

/* La masa: los ocho vértices unidos, menos el octágono base, que queda hueco.
   Una sola pieza, un solo verde. Un motivador bajo igual se ve, solo que su
   vértice apenas se despega del lado. */
function bordeMasa(valores) {
  var pts = ORDEN_RELOJ.map(function (cd) {
    return punto(radioVertice(valores[cd]), DRIVES[cd].ang);
  });
  return poligonoRedondo(pts, 22);
}
function pathMasa(valores) {
  return bordeMasa(valores) + ' ' + octPath(OCTA.base);
}

/* Los dos ejes de las lecturas; el CSS muestra solo el de la lente activa.
   ajustado: el octágono ocupa todo el ancho, así que las etiquetas no caben a
   los lados: Extrínsecos e Intrínsecos van debajo, cada una en su lado, y los
   sombreros arriba y abajo, pegados al octágono. */
var EJES_AJUSTE = { lado: OCTA.base + 6, arriba: 44, abajo: 52 };
function svgEjes(ajustado) {
  var largo = ajustado ? EJES_AJUSTE.lado : 336, rLbl = 302;
  var cx = OCTA.cx, cy = OCTA.cy;
  var yAbajo = cy + EJES_AJUSTE.lado + 38;
  var motiv = ajustado
    ? '<text class="gm-eje-lbl es-ext es-abajo" x="' + (cx - EJES_AJUSTE.lado) + '" y="' + yAbajo + '">Extrínsecos</text>' +
      '<text class="gm-eje-lbl es-int es-abajo" x="' + (cx + EJES_AJUSTE.lado) + '" y="' + yAbajo + '">Intrínsecos</text>'
    : '<text class="gm-eje-lbl es-ext" x="' + (cx - rLbl) + '" y="' + (cy + 9) + '">Extrínsecos</text>' +
      '<text class="gm-eje-lbl es-int" x="' + (cx + rLbl) + '" y="' + (cy + 9) + '">Intrínsecos</text>';
  var hat = ajustado
    ? '<text class="gm-eje-lbl es-blanco" x="' + cx + '" y="' + (cy - EJES_AJUSTE.lado - 16) + '">Sombrero blanco</text>' +
      '<text class="gm-eje-lbl es-negro" x="' + cx + '" y="' + yAbajo + '">Sombrero negro</text>'
    : '<text class="gm-eje-lbl es-blanco" x="' + cx + '" y="' + (cy - rLbl) + '">Sombrero blanco</text>' +
      '<text class="gm-eje-lbl es-negro" x="' + cx + '" y="' + (cy + rLbl + 20) + '">Sombrero negro</text>';
  return (
    '<g class="gm-eje gm-eje-motiv">' +
      '<line class="gm-eje-linea" x1="' + cx + '" y1="' + (cy - largo) + '" x2="' + cx + '" y2="' + (cy + largo) + '"/>' +
      motiv +
    '</g>' +
    '<g class="gm-eje gm-eje-hat">' +
      '<line class="gm-eje-linea" x1="' + (cx - largo) + '" y1="' + cy + '" x2="' + (cx + largo) + '" y2="' + cy + '"/>' +
      hat +
    '</g>'
  );
}

/* opciones: { niveles, valores, interactivo, centro1, centro2, centro, etiquetas, iconos }
   centro: ['línea', ...] -> una frase en el núcleo, en vez de centro1/centro2
   valores: { <cd>: 0..100 } -> dibuja puntas (el octágono "medido")
   niveles: { <cd>: 'alto'|'medio'|'bajo' } -> colorea, y si no hay valores,
            los deriva de VALOR_NIVEL
   iconos: 'dentro' -> ícono grande + nombre dentro del segmento
           'ancla'  -> ícono pequeño pegado al anillo interior
   etiquetas: 'fuera' -> nombre, puntaje y nivel por fuera del octágono
   nucleo: false -> sin el círculo del centro; las cuñas llegan casi al medio
                    y ahí queda vacío */
function dibujarOctagono(contenedor, opciones) {
  if (!contenedor) return;
  opciones = opciones || {};
  var niveles = opciones.niveles;
  var valores = opciones.valores;
  if (!valores && niveles) {
    valores = {};
    ORDEN_RELOJ.forEach(function (cd) { valores[cd] = VALOR_NIVEL[niveles[cd]]; });
  }
  var iconos = opciones.iconos;
  var conNucleo = opciones.nucleo !== false;
  /* Sin núcleo las cuñas se acercan al centro; con núcleo arrancan en su borde. */
  var rInt = conNucleo ? OCTA.inner : 52;
  var partes = [];

  if (opciones.ejes) partes.push(svgEjes());

  var medido = null;
  if (valores) {
    medido = {};
    ORDEN_RELOJ.forEach(function (cd) {
      medido[cd] = Math.max(0, Math.min(100, Math.round(valores[cd])));
    });

    /* Referencia: hasta dónde llegaría un motivador al tope, y las marcas
       intermedias. Sin esto, un lado empujado no se sabe contra qué es largo. */
    [0.25, 0.5, 0.75].forEach(function (k) {
      partes.push('<path class="gm-octa-tick" d="' + octOffset(OCTA.punta * k) + '" />');
    });
    partes.push('<path class="gm-octa-tope" d="' + octOffset(OCTA.punta) + '" />');

    /* La masa: una sola pieza, un solo verde, con el octágono base hueco. */
    partes.push('<path class="gm-octa-masa" d="' + pathMasa(medido) + '" />');
    /* El borde verde solo por fuera: por dentro, donde toca el octágono, no. */
    partes.push('<path class="gm-octa-masa-borde" d="' + bordeMasa(medido) + '" />');
  }

  ORDEN_RELOJ.forEach(function (cd) {
    var d = DRIVES[cd];
    var nivel = niveles ? niveles[cd] : null;
    var valor = medido ? medido[cd] : null;
    var clases = 'gm-seg' + (nivel ? ' nivel-' + nivel : '');
    var rol = opciones.interactivo ? ' role="tab" tabindex="-1" aria-selected="false"' : '';
    /* Cuando hay valores la forma la dibuja la masa completa; el grupo solo
       lleva el ícono y las etiquetas. Con piezas, el octágono base se parte en
       las mismas piezas redondeadas de los octágonos de arriba, con el hueco
       del centro libre para la frase. */
    var forma = '';
    if (valor === null) {
      forma = '<path d="' + pathSegmento(d.ang, OCTA.base, rInt) + '"/>';
    } else if (opciones.piezas) {
      var pieza = pathPieza(d.ang, R_HUECO);
      forma = '<path d="' + pieza + '" filter="url(#gm-pieza-sombra-medido)" style="fill:#17181C;fill-opacity:.94;stroke:none"/>' +
        '<path d="' + pieza + '"/>';
    }
    var dentro = '';

    if (iconos === 'dentro') {
      var lado = ladoIcono(cd, 70);
      var cIcono = punto(conNucleo ? 146 : 130, d.ang);
      var cNombre = punto(232, d.ang);
      var lineas = NOMBRE_OCTA[cd];
      var texto = lineas.map(function (t, i) {
        return '<tspan x="' + cNombre[0].toFixed(0) + '" dy="' + (i === 0 ? 0 : 23) + '">' + t + '</tspan>';
      }).join('');
      dentro =
        '<image class="gm-seg-icono" href="assets/cd/cd' + cd + '.png" ' +
          'x="' + (cIcono[0] - lado / 2).toFixed(0) + '" y="' + (cIcono[1] - lado / 2).toFixed(0) + '" ' +
          'width="' + lado + '" height="' + lado + '" />' +
        '<text class="gm-seg-nombre" x="' + cNombre[0].toFixed(0) + '" y="' +
          (cNombre[1] - (lineas.length - 1) * 11).toFixed(0) + '">' + texto + '</text>';
    } else if (iconos === 'ancla') {
      /* El ícono vive dentro del octágono base, sobre su lado: así se sabe
         de quién es cada tramo de la masa. */
      var lado2 = ladoIcono(cd, 74);
      var cIcono2 = punto(opciones.piezas ? (R_HUECO + APOTEMA) / 2 : 207, d.ang);
      dentro =
        '<image class="gm-seg-icono" href="assets/cd/cd' + cd + '.png" ' +
          'x="' + (cIcono2[0] - lado2 / 2).toFixed(0) + '" y="' + (cIcono2[1] - lado2 / 2).toFixed(0) + '" ' +
          'width="' + lado2 + '" height="' + lado2 + '" />';
    }

    var fuera = '';
    if (opciones.etiquetas === 'fuera') {
      var pLbl = punto(valor === null ? OCTA.base + 34 : R_ETIQUETA, d.ang);
      var an = valor === null ? '' : ancla(d.ang);
      fuera =
        '<text class="gm-seg-lbl' + an + '" x="' + pLbl[0].toFixed(0) + '" y="' + pLbl[1].toFixed(0) + '">' + d.corto + '</text>' +
        (valor === null ? '' :
          '<text class="gm-seg-nivel' + an + '" x="' + pLbl[0].toFixed(0) + '" y="' + (pLbl[1] + 27).toFixed(0) + '">' +
            valor + ' · ' + NIVEL_LABEL[nivel] + '</text>');
    }

    partes.push(
      '<g class="' + clases + '" data-cd="' + cd + '"' + rol +
        ' aria-label="Motivador ' + cd + ': ' + d.nombre +
        (valor === null ? '' : '. ' + valor + ' de 100') +
        (nivel ? '. Nivel ' + NIVEL_LABEL[nivel] : '') + '">' +
        forma + dentro + fuera +
      '</g>'
    );
  });

  if (conNucleo) {
    partes.push('<circle class="gm-octa-core" cx="' + OCTA.cx + '" cy="' + OCTA.cy + '" r="' + OCTA.inner + '"/>');
  }
  if (conNucleo || opciones.centro) {
    if (opciones.centro) {
      /* Una frase en varias líneas, centrada en bloque sobre el núcleo. */
      var n = opciones.centro.length;
      partes.push('<text class="gm-core-frase" x="' + OCTA.cx + '" y="' + OCTA.cy + '">' +
        opciones.centro.map(function (t, i) {
          return '<tspan x="' + OCTA.cx + '" dy="' + (i === 0 ? ((1 - n) / 2 * 1.15 + .35) : 1.15) + 'em">' + t + '</tspan>';
        }).join('') + '</text>');
    } else {
      partes.push('<text class="gm-core-t1" x="' + OCTA.cx + '" y="' + (OCTA.cy - 6) + '">' + (opciones.centro1 || 'OCTALYSIS') + '</text>');
      partes.push('<text class="gm-core-t2" x="' + OCTA.cx + '" y="' + (OCTA.cy + 20) + '">' +
        (opciones.centro2 || (valores ? 'tu equipo' : '8 motivadores')) + '</text>');
    }
  }

  var vista = valores
    ? (opciones.etiquetas === 'fuera' ? VISTA.masaEtiquetas : VISTA.masa)
    : (opciones.ejes ? VISTA.ejes : VISTA.plano);

  contenedor.innerHTML = '<svg class="gm-octa-svg' + (valores ? ' is-medido' : '') + '" viewBox="' + vista + '"' +
    (opciones.interactivo ? ' role="tablist"' : ' role="img"') +
    ' aria-label="Octágono de los ocho motivadores">' +
    (opciones.piezas ? '<defs><filter id="gm-pieza-sombra-medido" x="-30%" y="-30%" width="160%" height="170%">' +
      '<feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#000" flood-opacity=".35"/></filter></defs>' : '') +
    partes.join('') + '</svg>';
}

/* ---------------------------------------------------------------- OCTÁGONO EN PIEZAS */

/* El mismo octágono del hero: ocho piezas sueltas con las puntas redondeadas
   y sombra. Cada pieza es una cuña que va de cerca del centro hasta el lado,
   con una separación de ancho fijo entre vecinas. Adentro, el ícono va
   centrado en la mitad interior y el número con el nombre en la exterior. */
/* Hueco central del octágono medido en piezas: cabe la frase del centro. */
var R_HUECO = 104;
var PIEZA = { gap: 7, rInt: 68, curva: 20, rIcono: 106, icono: 52, rTexto: 206, rCirculo: 132 };
var TAN22 = Math.tan(22.5 * Math.PI / 180);

function pathPieza(angDeg, rInt) {
  rInt = rInt || PIEZA.rInt;
  var h = (PIEZA.gap / 2) / COS22;
  var a = (angDeg - 90) * Math.PI / 180;
  var u = [Math.cos(a), Math.sin(a)], v = [-u[1], u[0]];
  function en(t, lado) {
    var sv = lado * (t * TAN22 - h);
    return [OCTA.cx + u[0] * t + v[0] * sv, OCTA.cy + u[1] * t + v[1] * sv];
  }
  return poligonoRedondo([en(APOTEMA, -1), en(APOTEMA, 1), en(rInt, 1), en(rInt, -1)], PIEZA.curva);
}

function dibujarOctagonoPiezas(contenedor, opciones) {
  if (!contenedor) return;
  opciones = opciones || {};
  var piezas = [], contenido = [];
  var sombra = 'gm-pieza-sombra-' + (contenedor.id || 'octa');
  /* gris: el gris del octágono del hero; si no, negro profundo. */
  var fondoPieza = opciones.gris ? 'fill:#17181C;fill-opacity:.94;stroke:none' : 'fill:#0B0C0E;stroke:none';
  /* ajustado: el viewBox pegado al octágono, para que se vea más grande. */
  var vista = opciones.ajustado
    ? (opciones.ejes
        ? [OCTA.cx - EJES_AJUSTE.lado, OCTA.cy - EJES_AJUSTE.lado - EJES_AJUSTE.arriba,
           EJES_AJUSTE.lado * 2, EJES_AJUSTE.lado * 2 + EJES_AJUSTE.arriba + EJES_AJUSTE.abajo].join(' ')
        : vistaDe(OCTA.base + 6))
    : (opciones.ejes ? VISTA.ejes : VISTA.plano);

  ORDEN_RELOJ.forEach(function (cd) {
    var d = DRIVES[cd];
    var forma = pathPieza(d.ang);
    /* Fondo negro con sombra, como en el hero; encima, el color de la lente
       o el del estado (activo, hover). */
    var fondo =
      '<path d="' + forma + '" filter="url(#' + sombra + ')" style="' + fondoPieza + '"/>' +
      '<path d="' + forma + '"/>';

    var cI = punto(PIEZA.rIcono, d.ang), lado = ladoIcono(cd, PIEZA.icono);
    var cT = punto(PIEZA.rTexto, d.ang);
    var lineas = NOMBRE_OCTA[cd];
    /* Bloque de texto centrado en su punto: número arriba, nombre abajo. */
    var yNum = cT[1] - 2 - (lineas.length - 1) * 12;
    var nombre = lineas.map(function (t, i) {
      return '<tspan x="' + cT[0].toFixed(0) + '" dy="' + (i === 0 ? 0 : 25) + '">' + t + '</tspan>';
    }).join('');
    var dentro =
        '<image class="gm-seg-icono" href="assets/cd/cd' + cd + '.png" ' +
          'x="' + (cI[0] - lado / 2).toFixed(0) + '" y="' + (cI[1] - lado / 2).toFixed(0) + '" ' +
          'width="' + lado + '" height="' + lado + '" />' +
        '<text class="gm-seg-num" x="' + cT[0].toFixed(0) + '" y="' + yNum.toFixed(0) + '">' + pad(cd) + '</text>' +
        '<text class="gm-seg-nombre" x="' + cT[0].toFixed(0) + '" y="' + (yNum + 30).toFixed(0) + '">' + nombre + '</text>';

    /* Con ejes, las piezas y su contenido van en capas separadas para que el
       eje quede en medio. Sin ejes, cada motivador es un solo grupo: así se
       puede tocar entero en el explorador. */
    if (opciones.ejes) {
      piezas.push('<g class="gm-seg" data-cd="' + cd + '">' + fondo + '</g>');
      contenido.push('<g class="gm-seg" data-cd="' + cd + '">' + dentro + '</g>');
    } else {
      var rol = opciones.interactivo ? ' role="tab" tabindex="-1" aria-selected="false"' : '';
      piezas.push(
        '<g class="gm-seg" data-cd="' + cd + '"' + rol + ' aria-label="Motivador ' + cd + ': ' + d.nombre + '">' +
          fondo + dentro +
        '</g>'
      );
    }
  });

  /* El círculo claro del centro, donde viven los íconos, como en el hero. */
  var circulo =
    '<circle cx="' + OCTA.cx + '" cy="' + OCTA.cy + '" r="' + PIEZA.rCirculo + '" fill="#fff" fill-opacity=".04"/>' +
    '<circle cx="' + OCTA.cx + '" cy="' + OCTA.cy + '" r="' + (PIEZA.rCirculo - .5) + '" fill="none" stroke="#fff" stroke-opacity=".08"/>';

  /* Orden: piezas, luego el eje, luego íconos y textos. Así el eje se ve
     sobre las piezas oscuras y los íconos y nombres quedan encima de él. */
  contenedor.innerHTML =
    '<svg class="gm-octa-svg gm-octa-piezas" viewBox="' + vista + '"' +
    (opciones.interactivo ? ' role="tablist"' : ' role="img"') +
    ' aria-label="Octágono de los ocho motivadores">' +
      '<defs><filter id="' + sombra + '" x="-30%" y="-30%" width="160%" height="170%">' +
        '<feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#000" flood-opacity=".35"/>' +
      '</filter></defs>' +
      piezas.join('') + circulo + (opciones.ejes ? svgEjes(opciones.ajustado) : '') + contenido.join('') +
    '</svg>';
}

/* ---------------------------------------------------------------- EXPLORADOR */

function initExplorador() {
  var wrap = document.getElementById('octa-explorar');
  var panel = document.getElementById('octa-panel');
  if (!wrap || !panel) return;

  dibujarOctagonoPiezas(wrap, { interactivo: true, gris: true, ajustado: true });
  var segs = Array.prototype.slice.call(wrap.querySelectorAll('.gm-seg'));

  function pintar(cd) {
    // Sin etiquetas de categoría: lo de arriba/abajo e izquierda/derecha se ve
    // en el capítulo 4, y ponerle un nombre acá no le dice nada a nadie.
    var d = DRIVES[cd];
    panel.innerHTML =
      '<div class="gm-panel-head">' +
        '<img class="gm-panel-icono" src="assets/cd/cd' + d.n + '.png" alt="">' +
        '<div><p class="gm-panel-num">Motivador ' + pad(d.n) + '</p>' +
        '<h3>' + d.nombre + '</h3></div>' +
      '</div>' +
      '<p class="gm-panel-def">' + d.def + '</p>' +
      '<p class="gm-panel-largo">' + d.largo + '</p>' +
      '<p class="gm-panel-sub">Lo has visto aquí</p>' +
      '<div class="gm-ejemplos">' + EJEMPLOS[cd].map(function (e) {
        return '<div class="gm-ejemplo"><strong>' + e.app + '</strong><span>' + e.que + '</span></div>';
      }).join('') + '</div>' +
      '<p class="gm-panel-sub">Cómo se activa</p>' +
      '<ul class="gm-lista">' + d.palancas.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>';
  }

  function seleccionar(seg, enfocar) {
    segs.forEach(function (s) {
      var on = s === seg;
      s.classList.toggle('is-active', on);
      s.setAttribute('aria-selected', on ? 'true' : 'false');
      s.setAttribute('tabindex', on ? '0' : '-1');
    });
    pintar(parseInt(seg.getAttribute('data-cd'), 10));
    if (enfocar) seg.focus();
  }

  segs.forEach(function (seg) {
    seg.addEventListener('click', function () { seleccionar(seg); });
    seg.addEventListener('keydown', function (e) {
      var i = segs.indexOf(seg);
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); seleccionar(segs[(i + 1) % segs.length], true); }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); seleccionar(segs[(i - 1 + segs.length) % segs.length], true); }
      else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); seleccionar(seg); }
    });
  });

  seleccionar(segs[0]);
}

/* ---------------------------------------------------------------- LAS DOS LECTURAS */

function initLecturas() {
  var wrap = document.getElementById('octa-lecturas');
  if (!wrap) return;
  dibujarOctagonoPiezas(wrap, { ejes: true, gris: true, ajustado: true });

  var botones = Array.prototype.slice.call(document.querySelectorAll('.gm-lente-btn'));
  var paneles = Array.prototype.slice.call(document.querySelectorAll('.gm-lectura'));

  botones.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lente = btn.getAttribute('data-lente');
      botones.forEach(function (b) {
        var on = b === btn;
        b.classList.toggle('active', on);
        b.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      wrap.setAttribute('data-lente', lente);
      paneles.forEach(function (p) {
        p.hidden = p.getAttribute('data-lente') !== lente;
      });
    });
  });
}

/* ---------------------------------------------------------------- LAS 4 FASES */

function initFases() {
  var tabs = document.getElementById('fases-tabs');
  var cuerpo = document.getElementById('fases-cuerpo');
  if (!tabs || !cuerpo) return;

  tabs.innerHTML = FASES.map(function (f, i) {
    return '<button type="button" class="gm-fase-tab' + (i === 0 ? ' active' : '') + '" data-fase="' + f.id + '"' +
      ' role="tab" aria-selected="' + (i === 0) + '">' +
      '<span class="gm-fase-n">' + f.n + '</span>' +
      '<span class="gm-fase-nombre">' + f.nombre + '<em>' + f.cuando + '</em></span>' +
    '</button>';
  }).join('');

  function chip(cd, tipo) {
    var d = DRIVES[cd];
    return '<span class="gm-fase-cd ' + tipo + ' hat-' + d.hat + '">' + iconoCD(cd) + d.corto + '</span>';
  }

  function pintar(id) {
    var f = FASES.filter(function (x) { return x.id === id; })[0];
    var niveles = {};
    for (var cd = 1; cd <= 8; cd++) {
      niveles[cd] = f.dominan.indexOf(cd) >= 0 ? 'alto' : (f.apoyan.indexOf(cd) >= 0 ? 'medio' : 'bajo');
    }
    cuerpo.innerHTML =
      '<div class="gm-fase-octa" id="fase-octa"></div>' +
      '<div class="gm-fase-texto">' +
        '<p class="gm-fase-pregunta">' + f.pregunta + '</p>' +
        '<p class="gm-fase-def">' + f.def + '</p>' +
        '<p class="gm-panel-sub">Lo que manda en este momento</p>' +
        '<div class="gm-fase-cds">' + f.dominan.map(function (cd) { return chip(cd, 'domina'); }).join('') +
          f.apoyan.map(function (cd) { return chip(cd, 'apoya'); }).join('') + '</div>' +
        '<p class="gm-panel-sub">Qué tiene que pasar</p>' +
        '<ul class="gm-lista">' + f.haz.map(function (h) { return '<li>' + h + '</li>'; }).join('') + '</ul>' +
        '<p class="gm-fase-falla"><strong>Si fallas aquí:</strong> ' + f.falla + '</p>' +
      '</div>';
    dibujarOctagono(document.getElementById('fase-octa'), {
      niveles: niveles, iconos: 'ancla',
      centro1: 'FASE ' + f.n, centro2: f.nombre
    });
  }

  tabs.addEventListener('click', function (e) {
    var btn = e.target.closest('.gm-fase-tab');
    if (!btn) return;
    Array.prototype.slice.call(tabs.children).forEach(function (b) {
      var on = b === btn;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    pintar(btn.getAttribute('data-fase'));
  });

  pintar(FASES[0].id);
}

/* ---------------------------------------------------------------- QUIZ */

var quiz = { orden: [], i: 0, aciertos: 0, respondida: false };

function initQuiz() {
  var cont = document.getElementById('quiz');
  if (!cont) return;

  var opciones = ORDEN_RELOJ.slice().sort(function (a, b) { return a - b; });

  function barajar(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* En celular las 8 obligan a scrollear: solo 4, siempre con la correcta. */
  function opcionesPara(correcta) {
    if (!window.matchMedia('(max-width: 768px)').matches) return opciones;
    var otras = barajar(opciones.filter(function (cd) { return cd !== correcta; })).slice(0, 3);
    return otras.concat(correcta).sort(function (a, b) { return a - b; });
  }

  function arrancar() {
    quiz.orden = barajar(QUIZ.map(function (_, i) { return i; }));
    quiz.i = 0; quiz.aciertos = 0; quiz.respondida = false;
    pintar();
  }

  function pintar() {
    if (quiz.i >= quiz.orden.length) return pintarFinal();
    var item = QUIZ[quiz.orden[quiz.i]];
    cont.innerHTML =
      '<div class="gm-quiz-top">' +
        '<span class="gm-quiz-paso">Situación ' + (quiz.i + 1) + ' de ' + quiz.orden.length + '</span>' +
        '<span class="gm-quiz-marcador">' + quiz.aciertos + ' de ' + quiz.i + '</span>' +
      '</div>' +
      '<div class="gm-quiz-barra"><i style="width:' + Math.round((quiz.i / quiz.orden.length) * 100) + '%"></i></div>' +
      '<p class="gm-quiz-texto">' + item.texto + '</p>' +
      '<p class="gm-quiz-instruccion">¿Qué motivador está trabajando?</p>' +
      '<div class="gm-quiz-ops">' + opcionesPara(item.cd).map(function (cd) {
        return '<button type="button" class="gm-quiz-op" data-cd="' + cd + '">' +
          '<b>' + pad(cd) + '</b>' + DRIVES[cd].corto + '</button>';
      }).join('') + '</div>' +
      '<div class="gm-quiz-feedback" id="quiz-feedback" aria-live="polite"></div>';
  }

  function pintarFinal() {
    var n = quiz.aciertos, total = quiz.orden.length;
    var msg = n === total ? 'Perfecto. Ya lees el octágono.'
      : n >= total - 2 ? 'Muy bien. Tienes el marco claro.'
      : n >= total / 2 ? 'Vas bien. Vuelve al octágono de arriba y repasa los que fallaste.'
      : 'Todavía no. No pasa nada: vuelve al octágono, tócalos uno por uno y regresa.';
    cont.innerHTML =
      '<div class="gm-quiz-final">' +
        '<p class="gm-quiz-score"><strong>' + n + '</strong> <span>de ' + total + '</span></p>' +
        '<p class="gm-quiz-msg">' + msg + '</p>' +
        '<button type="button" class="gm-btn-ghost" id="quiz-reintentar">Volver a intentarlo</button>' +
      '</div>';
    document.getElementById('quiz-reintentar').addEventListener('click', arrancar);
  }

  cont.addEventListener('click', function (e) {
    var op = e.target.closest('.gm-quiz-op');
    if (op && !quiz.respondida) {
      quiz.respondida = true;
      var elegido = parseInt(op.getAttribute('data-cd'), 10);
      var item = QUIZ[quiz.orden[quiz.i]];
      var correcto = elegido === item.cd;
      if (correcto) quiz.aciertos++;

      cont.querySelectorAll('.gm-quiz-op').forEach(function (b) {
        var cd = parseInt(b.getAttribute('data-cd'), 10);
        b.disabled = true;
        if (cd === item.cd) b.classList.add('es-correcta');
        else if (cd === elegido) b.classList.add('es-errada');
      });

      document.getElementById('quiz-feedback').innerHTML =
        '<div class="gm-quiz-resultado ' + (correcto ? 'bien' : 'mal') + '">' +
          '<p class="gm-quiz-veredicto">' + (correcto ? 'Correcto' : 'Era el ' + pad(item.cd) + ' · ' + DRIVES[item.cd].corto) + '</p>' +
          '<p class="gm-quiz-pista">' + item.pista + '</p>' +
          '<button type="button" class="gm-btn-ghost" id="quiz-siguiente">' +
            (quiz.i + 1 >= quiz.orden.length ? 'Ver resultado' : 'Siguiente') + '</button>' +
        '</div>';
      document.getElementById('quiz-siguiente').addEventListener('click', function () {
        quiz.i++; quiz.respondida = false; pintar();
      });
    }
  });

  arrancar();
}

/* ---------------------------------------------------------------- SAPS + ENTREGAS (estático) */

/* Ícono, nombre y técnica de juego: la cabecera de las tarjetas de "Cómo
   darlo" y de las tres mecánicas. Con i, el nombre lleva su número delante. */
function cabeceraNumerada(m, i, carpeta) {
  var num = i === null ? '' : '<span class="gm-entrega-num">' + pad(i + 1) + '</span>';
  return '<div class="gm-entrega-top">' +
    '<img class="gm-entrega-ico" src="' + carpeta + m.icono + '" alt="">' +
    '<div><h4>' + num + m.nombre + '</h4>' +
    '<span class="gm-entrega-tec">Técnica de juego #' + m.tecnica + '</span></div>' +
  '</div>';
}

function initRecompensas() {
  var contS = document.getElementById('saps-lista');
  var contE = document.getElementById('entregas-lista');
  var contM = document.getElementById('mecanicas-lista');

  if (contS) {
    contS.innerHTML = SAPS.map(function (s) {
      return '<article class="gm-rec gm-saps-item nivel-' + s.nivel + '">' +
        '<div class="gm-rec-top">' +
          '<h4>' + s.nombre + '</h4>' +
          '<span class="gm-rec-costo">Costo: ' + s.costo + '</span>' +
        '</div>' +
        '<p class="gm-rec-def">' + s.def + '</p>' +
        '<div class="gm-rec-chips">' + s.cds.map(function (cd) { return chipCD(cd); }).join('') + '</div>' +
        '<ul class="gm-lista gm-lista-sm">' + s.ejemplos.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' +
        (s.nota ? '<p class="gm-rec-nota">' + s.nota + '</p>' : '') +
      '</article>';
    }).join('');
  }

  if (contE) {
    contE.innerHTML = ENTREGAS.map(function (m, i) {
      return '<article class="gm-rec gm-entrega">' +
        cabeceraNumerada(m, i, 'assets/entregas/') +
        '<p class="gm-rec-def">' + m.def + '</p>' +
        '<div class="gm-rec-chips">' + m.cds.map(function (cd) { return chipCD(cd); }).join('') + '</div>' +
        '<p class="gm-rec-cuando"><strong>Cuándo usarla:</strong> ' + m.cuando + '</p>' +
      '</article>';
    }).join('');
  }

  if (contM) {
    contM.innerHTML = MECANICAS_POTENTES.map(function (m) {
      return '<article class="gm-rec gm-entrega">' +
        cabeceraNumerada(m, null, 'assets/mecanicas/') +
        '<p class="gm-rec-def">' + m.def + '</p>' +
        '<div class="gm-rec-chips">' + m.cds.map(function (cd) { return chipCD(cd); }).join('') + '</div>' +
        '<p class="gm-rec-cuando"><strong>Para qué sirve:</strong> ' + m.como + '</p>' +
        '<p class="gm-rec-nota"><strong>Ojo:</strong> ' + m.ojo + '</p>' +
      '</article>';
    }).join('');
  }
}

function initJugadores() {
  var cont = document.getElementById('jugadores-lista');
  if (!cont) return;
  cont.innerHTML = TIPOS_JUGADOR.map(function (t) {
    return '<article class="gm-jug">' +
      '<div class="gm-jug-top"><h4>' + t.nombre + ' <span>' + t.original + '</span></h4></div>' +
      '<p class="gm-jug-cds">Se mueve por ' + t.cds.map(function (c) { return chipCD(c); }).join('') + '</p>' +
      '<p>' + t.def + '</p>' +
      '<p class="gm-jug-dale"><strong>Qué les sirve:</strong> ' + t.dale + '</p>' +
    '</article>';
  }).join('');
}

/* ---------------------------------------------------------------- DIAGNÓSTICO */

function preguntasObligatorias() {
  return PREGUNTAS.filter(function (p) { return !p.opcional; });
}

function respondidas() {
  return preguntasObligatorias().filter(function (p) {
    var r = respuestas[p.id];
    return p.multi ? (r && r.length) : !!r;
  }).length;
}

function completo() { return respondidas() === preguntasObligatorias().length; }

/* Punto de partida antes de saber nada del equipo. Siete motivadores arrancan
   parejos; el 5 arranca arriba porque alrededor del 80% de las personas tiene
   un componente social elevado (The Octalysis Observer ES, "Tipos de usuarios
   en la gamificación"). El 64 está calibrado para que el 5 salga alto en el
   ~80% de los equipos, que es justo lo que dice ese dato. No lo bloquea: un
   equipo que trabaja solo o a distancia lo baja igual. */
var BASE = { 1: 40, 2: 40, 3: 40, 4: 40, 5: 64, 6: 40, 7: 40, 8: 40 };

function calcular() {
  var puntos = {}, porques = {};
  for (var i = 1; i <= 8; i++) { puntos[i] = BASE[i]; porques[i] = []; }

  function aplicar(pesos, etiqueta, factor) {
    factor = factor === undefined ? 1 : factor;
    Object.keys(pesos).forEach(function (cd) {
      var d = pesos[cd] * factor;
      puntos[cd] += d;
      if (Math.abs(d) >= 4) porques[cd].push({ etiqueta: etiqueta, delta: d });
    });
  }

  PREGUNTAS.forEach(function (p) {
    var r = respuestas[p.id];
    if (!r) return;
    if (p.multi) {
      if (!r.length) return;
      // Se promedia en vez de sumar: marcar más casillas mezcla el perfil, no lo infla.
      r.forEach(function (v) {
        var op = p.opciones.filter(function (o) { return o.v === v; })[0];
        if (op) aplicar(op.w, op.t, 1 / r.length);
      });
    } else {
      var op2 = p.opciones.filter(function (o) { return o.v === r; })[0];
      if (op2) aplicar(op2.w, op2.t, 1);
    }
  });

  var lista = Object.keys(puntos).map(function (cd) {
    return { cd: parseInt(cd, 10), puntos: puntos[cd], porques: porques[cd] };
  }).sort(function (a, b) { return b.puntos - a.puntos; });

  /* El puntaje 0-100 que dibuja el largo de cada punta. Es relativo al propio
     equipo: el motivador más alto llega al tope y el más bajo se queda en 20.
     No es una medida absoluta — es la inclinación de este equipo. */
  var max = lista[0].puntos, min = lista[lista.length - 1].puntos;
  var rango = (max - min) || 1;

  lista.forEach(function (item, i) {
    item.nivel = i < 3 ? 'alto' : (i < 5 ? 'medio' : 'bajo');
    item.valor = Math.round(14 + 86 * ((item.puntos - min) / rango));
    item.porques.sort(function (a, b) { return Math.abs(b.delta) - Math.abs(a.delta); });
  });

  var porCd = {};
  lista.forEach(function (it) { porCd[it.cd] = it; });

  return { lista: lista, porCd: porCd, jugadores: calcularJugadores(porCd) };
}

function calcularJugadores(porCd) {
  var pesoNivel = { alto: 1, medio: 0.4, bajo: 0.05 };

  function promedio(cds) {
    if (!cds || !cds.length) return null;
    var s = cds.reduce(function (a, cd) { return a + pesoNivel[porCd[cd].nivel]; }, 0);
    return s / cds.length;
  }

  var crudos = TIPOS_JUGADOR.map(function (t) {
    var primario = promedio(t.cds);
    var secundario = promedio(t.extra);
    var crudo = secundario === null ? primario : primario * 0.88 + secundario * 0.12;
    // Al cubo para separar los tipos: sin esto los cuatro quedan cerca del 25%.
    return { tipo: t, crudo: crudo, bruto: Math.pow(crudo, 3) };
  });

  var total = crudos.reduce(function (a, b) { return a + b.bruto; }, 0) || 1;
  crudos.forEach(function (c) { c.pct = Math.max(2, Math.round((c.bruto / total) * 100)); });
  crudos.sort(function (a, b) { return b.pct - a.pct; });

  var suma = crudos.reduce(function (a, b) { return a + b.pct; }, 0);
  if (suma !== 100 && crudos.length) crudos[0].pct += (100 - suma);

  // Los cuatro perfiles se alimentan de los motivadores 2, 3, 5, 6 y 7. Si el
  // equipo se mueve por el 1, el 4 o el 8, ninguno encaja, y decirlo es más
  // útil que coronar a un ganador por diferencias mínimas.
  var mejor = crudos[0].crudo;
  crudos.encaje = mejor >= 0.6 ? 'claro' : (mejor >= 0.38 ? 'parcial' : 'bajo');
  return crudos;
}

function initFormulario() {
  var cont = document.getElementById('form-equipo');
  if (!cont) return;

  cont.innerHTML = PREGUNTAS.map(function (p, i) {
    var ops = p.opciones.map(function (o) {
      return '<button type="button" class="gm-op" data-pregunta="' + p.id + '" data-valor="' + o.v + '" aria-pressed="false">' + o.t + '</button>';
    }).join('');
    return '<fieldset class="gm-q" data-pregunta="' + p.id + '">' +
      '<legend><span class="gm-q-num">' + (i + 1) + '</span>' + p.titulo +
        (p.opcional ? ' <span class="gm-q-opt">opcional</span>' : '') +
        (p.multi ? ' <span class="gm-q-opt gm-q-multi">elige varias</span>' : '') +
      '</legend>' +
      '<p class="gm-q-ayuda">' + p.ayuda + '</p>' +
      '<div class="gm-ops">' + ops + '</div>' +
    '</fieldset>';
  }).join('');

  cont.addEventListener('click', function (e) {
    var btn = e.target.closest('.gm-op');
    if (!btn) return;
    var pid = btn.getAttribute('data-pregunta');
    var val = btn.getAttribute('data-valor');
    var p = PREGUNTAS.filter(function (q) { return q.id === pid; })[0];

    if (p.multi) {
      var arr = respuestas[pid] || [];
      var i = arr.indexOf(val);
      if (i >= 0) arr.splice(i, 1); else arr.push(val);
      respuestas[pid] = arr;
    } else {
      respuestas[pid] = respuestas[pid] === val ? null : val;
      if (!respuestas[pid]) delete respuestas[pid];
    }
    guardar();
    pintarSeleccion();
    actualizarProgreso();

    // Al elegir en una pregunta de una sola opción, baja sola a la siguiente.
    // En las de "elige varias" no, porque ahí se marcan varias seguidas.
    if (!p.multi && respuestas[pid]) {
      var fs = btn.closest('.gm-q');
      var sig = fs && fs.nextElementSibling;
      var destino = sig || document.querySelector('.gm-form-acciones');
      if (destino) {
        setTimeout(function () {
          destino.scrollIntoView({ behavior: 'smooth', block: sig ? 'start' : 'center' });
        }, 250);
      }
    }
  });

  pintarSeleccion();
  actualizarProgreso();

  var btnCalc = document.getElementById('btn-calcular');
  if (btnCalc) {
    btnCalc.addEventListener('click', function () {
      if (!completo()) return;
      resultado = calcular();
      pintarResultado();
      document.body.classList.add('tiene-resultado');
      var destino = document.getElementById('resultado');
      if (destino) destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  var btnReset = document.getElementById('btn-reiniciar');
  if (btnReset) {
    btnReset.addEventListener('click', function () {
      respuestas = {}; resultado = null;
      guardar(); pintarSeleccion(); actualizarProgreso();
      document.body.classList.remove('tiene-resultado');
      document.getElementById('paso-diagnostico').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

function pintarSeleccion() {
  document.querySelectorAll('.gm-op').forEach(function (btn) {
    var pid = btn.getAttribute('data-pregunta');
    var val = btn.getAttribute('data-valor');
    var r = respuestas[pid];
    var on = Array.isArray(r) ? r.indexOf(val) >= 0 : r === val;
    btn.classList.toggle('is-on', !!on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  PREGUNTAS.forEach(function (p) {
    var fs = document.querySelector('.gm-q[data-pregunta="' + p.id + '"]');
    if (!fs) return;
    var r = respuestas[p.id];
    fs.classList.toggle('is-listo', !!(p.multi ? (r && r.length) : r));
  });
}

function actualizarProgreso() {
  var n = respondidas(), total = preguntasObligatorias().length;
  var texto = document.getElementById('form-progreso-texto');
  var barra = document.getElementById('form-progreso-barra');
  var btn = document.getElementById('btn-calcular');
  if (texto) texto.textContent = n + ' de ' + total + ' respondidas';
  if (barra) barra.style.width = Math.round((n / total) * 100) + '%';
  if (btn) {
    btn.disabled = !completo();
    btn.textContent = completo() ? 'Calcular el octágono de mi equipo' : 'Responde las ' + total + ' preguntas';
  }
}

function pintarResultado() {
  if (!resultado) return;
  var niveles = {}, valores = {};
  resultado.lista.forEach(function (it) { niveles[it.cd] = it.nivel; valores[it.cd] = it.valor; });
  dibujarOctagono(document.getElementById('octa-resultado'), {
    niveles: niveles, valores: valores, iconos: 'ancla', etiquetas: 'fuera',
    nucleo: false, piezas: true
  });
  pintarListaCompacta();
  pintarNiveles();
  pintarJugadoresResultado();
}

/* En pantallas pequeñas las etiquetas laterales del SVG se salen del
   contenedor: allí se ocultan y el contenido pasa a esta lista. */
function pintarListaCompacta() {
  var cont = document.getElementById('octa-lista');
  if (!cont) return;
  cont.innerHTML = resultado.lista.map(function (it) {
    var d = DRIVES[it.cd];
    return '<li class="nivel-' + it.nivel + '">' +
      '<img class="gm-ol-ico" src="assets/cd/cd' + d.n + '.png" alt="">' +
      '<span class="gm-ol-nombre">' + d.corto + '</span>' +
      '<span class="gm-ol-valor">' + it.valor + '</span>' +
      '<span class="gm-ol-nivel">' + NIVEL_LABEL[it.nivel] + '</span>' +
    '</li>';
  }).join('');
}

function porqueTexto(item) {
  var arriba = item.porques.filter(function (p) { return p.delta > 0; }).slice(0, 2);
  var abajo = item.porques.filter(function (p) { return p.delta < 0; }).slice(0, 2);
  var usar = item.nivel === 'bajo' && abajo.length ? abajo : arriba;
  if (!usar.length) return '';
  var etiquetas = usar.map(function (p) { return '<em>' + p.etiqueta.toLowerCase() + '</em>'; });
  var verbo = (item.nivel === 'bajo' && abajo.length) ? 'Lo empujó hacia abajo' : 'Pesó sobre todo';
  return verbo + ': ' + etiquetas.join(' y ') + '.';
}

function pintarNiveles() {
  var cont = document.getElementById('resultado-niveles');
  if (!cont) return;
  var grupos = [
    { nivel: 'alto', titulo: 'Tus 3 palancas fuertes', sub: 'Aquí vas a ver movimiento rápido. Diseña sobre esto.' },
    { nivel: 'medio', titulo: 'Tus 2 intermedias', sub: 'Funcionan, pero necesitan buen diseño. Son tu segunda ola.' },
    { nivel: 'bajo', titulo: 'Tus 3 débiles', sub: 'No las fuerces. Invertir aquí da poco, y mal usadas restan.' }
  ];

  cont.innerHTML = grupos.map(function (g) {
    var items = resultado.lista.filter(function (it) { return it.nivel === g.nivel; });
    return '<div class="gm-grupo nivel-' + g.nivel + '">' +
      '<div class="gm-grupo-head"><span class="gm-grupo-badge">' + NIVEL_LABEL[g.nivel] + '</span>' +
      '<h3>' + g.titulo + '</h3><p>' + g.sub + '</p></div>' +
      '<div class="gm-grupo-items">' + items.map(function (it) {
        var d = DRIVES[it.cd];
        var texto = g.nivel === 'bajo' ? d.bajo : d.alto;
        var palancas = g.nivel === 'bajo' ? '' :
          '<p class="gm-res-sub">Qué hacer con esto</p><ul class="gm-lista">' +
          d.palancas.slice(0, g.nivel === 'alto' ? 4 : 2).map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>';
        return '<article class="gm-res-card">' +
          '<header><img class="gm-res-ico" src="assets/cd/cd' + d.n + '.png" alt=""><h4>' + d.nombre + '</h4></header>' +
          '<p class="gm-res-lectura">' + texto + '</p>' +
          '<p class="gm-res-porque">' + porqueTexto(it) + '</p>' +
          palancas +
        '</article>';
      }).join('') + '</div>' +
    '</div>';
  }).join('');
}

function pintarJugadoresResultado() {
  var cont = document.getElementById('resultado-jugadores');
  if (!cont) return;
  var dom = resultado.jugadores[0];
  var encaje = resultado.jugadores.encaje;

  var titular = encaje === 'bajo'
    ? '<p class="gm-dominante">Ninguno de los cuatro perfiles encaja <strong>del todo</strong> con tu equipo</p>' +
      '<p class="gm-encaje-nota">A tu gente la mueve el propósito, lo que siente suyo o no perder lo ganado — y esos no son los motores de ninguno de los cuatro. Los porcentajes de abajo dan la inclinación, pero léelos con pinzas: lo útil acá es tu octágono.</p>'
    : '<p class="gm-dominante">Tu equipo se inclina hacia los <strong>' + dom.tipo.nombre.toLowerCase() + '</strong></p>' +
      (encaje === 'parcial'
        ? '<p class="gm-encaje-nota">Encaja a medias: la inclinación existe, pero parte de lo que mueve a tu equipo queda por fuera.</p>'
        : '');

  cont.innerHTML = titular +
    '<div class="gm-jug-grid">' + resultado.jugadores.map(function (j, i) {
      return '<article class="gm-jug' + (i === 0 && encaje !== 'bajo' ? ' es-dominante' : '') + '">' +
        '<div class="gm-jug-top">' +
          '<h4>' + j.tipo.nombre + '</h4>' +
          '<span class="gm-jug-pct">' + j.pct + '%</span>' +
        '</div>' +
        '<div class="gm-jug-barra"><i style="width:' + j.pct + '%"></i></div>' +
        '<p class="gm-jug-cds">Se mueve por ' + j.tipo.cds.map(function (c) { return chipCD(c); }).join('') + '</p>' +
        '<p class="gm-jug-dale"><strong>Qué les sirve:</strong> ' + j.tipo.dale + '</p>' +
      '</article>';
    }).join('') + '</div>';
}

/* ---------------------------------------------------------------- NAVEGACIÓN */

function initRail() {
  var rail = document.getElementById('rail');
  if (!rail) return;
  var enlaces = Array.prototype.slice.call(rail.querySelectorAll('a'));
  var pasos = enlaces.map(function (a) { return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
  if (!('IntersectionObserver' in window) || !pasos.length) return;

  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (!e.isIntersecting) return;
      enlaces.forEach(function (a) {
        a.classList.toggle('is-actual', a.getAttribute('href') === '#' + e.target.id);
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  pasos.forEach(function (p) { obs.observe(p); });
}

/* Botón flotante: baja a la sección que sigue a la que está en pantalla.
   Se esconde en la última, donde ya no hay a dónde bajar. */
function initSiguiente() {
  var btn = document.getElementById('btn-siguiente');
  if (!btn) return;
  var secciones = Array.prototype.slice.call(document.querySelectorAll('section.gm-hero, section.gm-cap'));

  function siguiente() {
    return secciones.filter(function (s) { return s.getBoundingClientRect().top > 8; })[0] || null;
  }

  function actualizar() { btn.classList.toggle('is-oculto', !siguiente()); }

  btn.addEventListener('click', function () {
    var s = siguiente();
    if (s) s.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  window.addEventListener('scroll', actualizar, { passive: true });
  window.addEventListener('resize', actualizar);
  actualizar();
}

function initReveal() {
  var els = document.querySelectorAll('.reveal, .reveal-right');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (el) { obs.observe(el); });
}

function initAcordeones() {
  document.querySelectorAll('.accordion-header').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.accordion-item');
      var body = item.querySelector('.accordion-body');
      var abierto = item.classList.contains('open');
      item.classList.toggle('open', !abierto);
      btn.setAttribute('aria-expanded', abierto ? 'false' : 'true');
      // La base del sitio solo define max-height:0; la altura abierta la pone el JS.
      body.style.maxHeight = abierto ? '0px' : body.scrollHeight + 'px';
    });
  });
}

function initMenuMovil() {
  var burger = document.getElementById('hamburger');
  var menu = document.getElementById('mobile-menu');
  if (!burger || !menu) return;
  function toggle() {
    var abierto = menu.classList.toggle('open');
    burger.classList.toggle('active', abierto);
    document.body.style.overflow = abierto ? 'hidden' : '';
  }
  burger.addEventListener('click', toggle);
  burger.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('open');
      burger.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ---------------------------------------------------------------- ARRANQUE */

document.addEventListener('DOMContentLoaded', function () {
  recuperar();
  initExplorador();
  initLecturas();
  initFases();
  initQuiz();
  initJugadores();
  initRecompensas();
  initFormulario();
  initRail();
  initSiguiente();
  initAcordeones();
  initReveal();
  initMenuMovil();

  if (completo()) {
    resultado = calcular();
    pintarResultado();
    document.body.classList.add('tiene-resultado');
  }
});
