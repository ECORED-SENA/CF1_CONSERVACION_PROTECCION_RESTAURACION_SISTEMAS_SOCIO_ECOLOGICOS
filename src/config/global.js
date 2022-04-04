export default {
  global: {
    componenteFormativo: 'Sistemas socioecológicos.',
    descripcionCurso:
      '<p style="margin-bottom: 100px;">En este componente formativo, se abordan temas que le permitirán entender cómo está compuesto un sistema socioecológico, sus interacciones y la forma de analizarlo y documentarlo, para una oportuna toma de decisiones que permitan su conservación, protección y restauración.</p>',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/fondo-banner-interno.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Componentes ambientales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistemas socioecológicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normatividad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Metodologías',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'García-Frapolli, E. y Toledo, V. (2008). Evaluación de sistemas socioecológicos en áreas protegidas: un instrumento desde la economía ecológica. Argumentos, 21(56), p. 103-116',
      link: 'http://www.scielo.org.mx/pdf/argu/v21n56/v21n56a6.pdf',
    },
    {
      referencia:
        'Khan Academy. (2017). Introducción a los ciclos biogeoquímicos.',
      link:
        'https://es.khanacademy.org/science/biology/ecology/biogeochemical-cycles/a/introduction-to-biogeochemical-cycles',
    },
    {
      referencia:
        'Salas-Zapata, W., Ríos-Osorio, L. y Álvarez-Del Castillo, J. (2011). Bases conceptuales para una clasificación de los sistemas socioecológicos de la investigación en sostenibilidad. Revista Lasallista de Investigación, 8(2).',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S1794-44492011000200015',
    },
    {
      referencia:
        'Universidad de Guadalajara. (s. f.). Clasificación general de las fuentes de información. Biblioteca Virtual del Sistema de Universidad Virtual.',
      link:
        'http://biblioteca.udgvirtual.udg.mx/portal/clasificacion-general-de-las-fuentes-de-informacion',
    },
  ],
  glosario: [
    {
      termino: 'Componentes ambientales',
      significado:
        'Son todos los elementos, factores o recursos naturales que presentan interacciones entre sí, lo cual permite que se genere la vida en nuestro planeta.',
    },
    {
      termino: 'Factores bióticos',
      significado:
        'Son todos aquellos organismos que tienen vida, como los animales, las plantas o los microorganismos.',
    },
    {
      termino: 'Factores abióticos',
      significado:
        'Son aquellos que no tienen vida, pero, de igual manera, son de vital importancia para el desarrollo de los ecosistemas y de los seres vivos.',
    },
    {
      termino: 'Leyes ambientales',
      significado:
        'Corresponden a los principios y normas que buscan la protección, conservación, recuperación del medio ambiente y preservación de los recursos naturales. ',
    },
    {
      termino: 'Resolución ambiental',
      significado:
        'Son todos los lineamientos que la autoridad requiere para la elaboración y ejecución de los estudios ambientales que deben ser presentados ante las autoridades.',
    },
  ],
  complementario: [
    {
      texto: 'Bejarano, L. (2018). Componentes Ambientales',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_jl2o3uk5P8',
    },
    {
      texto:
        'Correa, E. (2021). Introducción a la Normatividad Ambiental en Colombia',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XPeC4Fw_T10',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Víctor Julián Ardila',
        cargo: 'Experto temático',
        centro: 'Regional Tolima - Centro Agropecuario La Granja ',
      },
      {
        nombre: 'Beatriz Eugenia Agudelo Vásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial ',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico ',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Anllelo Andrés Reina Montanez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Emilsen Alfonso Bautista',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
