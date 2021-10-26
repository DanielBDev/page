const sectionPage = new fullpage("#fullpage", {
  // ──────────────────────────────────────────────────
  //   :::::: Opciones Basicas
  // ──────────────────────────────────────────────────
  autoScrolling: true, // Se activa el scroll.
  fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
  fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
  easing: "easeInOutCubic", // Funcion de tiempo de la animacion.
  scrollingSpeed: 800, // Velocidad del scroll. Valores: en milisegundos.
  css3: true, // Si usara CSS3 o javascript.
  easingcss3: "ease-out", // Curva de velocidad del efecto.
  loopBottom: false, // Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima sección y el ususario siga scrolleando.
  // ──────────────────────────────────────────────────
  //   :::::: Barra de navegación
  // ──────────────────────────────────────────────────
  navigation: true, // Muesta la barra de navegación.
  menu: "#menu", // Menu de navegación.
  anchors: ["home", "about", "skills", "proyects", "contact"], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
  navigationTooltips: ["Home", "About", "Skills", "Proyects", "Contact"], // Tooltips que mostrara por cada boton.
  showActiveTooltip: false, // Mostrar tooltip activa.
  // ──────────────────────────────────────────────────
  //   :::::: Secciones
  // ──────────────────────────────────────────────────
  sectionsColor: ["#000", "#c2c2c2", "#c2c2c2", "#c2c2c2"], // Color de fondo de cada seccion.
  verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.
  // ──────────────────────────────────────────────────
  //   :::::: Slides
  // ──────────────────────────────────────────────────
  controlArrows: true, // Flechas del slide
  slidesNavigation: false, // Indicadores del slide
  afterLoad: function(origin, destination){
    if(destination.anchor == 'contact'){
        document.querySelector('.contact h2').style.opacity = 1;        
    }else if(destination.anchor == 'about'){
        document.querySelector('.text-animated').style.opacity = 1;
        document.querySelector('.text-p').style.opacity = 1;
    }else if(destination.anchor == 'skills'){
      document.querySelector('.text-s').style.opacity = 1;
    }else if(destination.anchor == 'proyects'){
      document.querySelector('.text-py').style.opacity = 1;
      document.querySelector('.text-h4').style.opacity = 1;
    }
  }
});


const typed = new Typed('.typed', {
    strings: [
        '<i class="automatic-text">Front End</i>', 
        '<i class="automatic-text">Back End</i>', 
        '<i class="automatic-text">Full Stack</i>'
    ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
