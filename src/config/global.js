export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Identificación de peligros y riesgos en el entorno escolar',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Identificación de peligros y riesgos en el entorno escolar',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Proceso de los diferentes factores de peligro y sus posibles patologías',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Plan de emergencias en trabajo con infantes',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'La prevención de riesgos en una escuela infantil - Quirónprevención. (s. f.). Quirónprevención.',
      link:
        'https://www.quironprevencion.com/blogs/es/prevenidos/prevencion-riesgos-escuela-infantil',
    },
    {
      referencia:
        'Ministerio de Educación Nacional de Colombia. (2022). Circular Ministerial No. 19 de 2022: ORIENTACIONES PARA LA GESTIÓN INTEGRAL DEL RIESGO ESCOLAR.',
      link:
        'https://www.mineducacion.gov.co/1780/articles-423963_recurso_95.pdf',
    },
    {
      referencia:
        'PREDES. Guía metodológica educativa para la prevención de desastres en instituciones educativas: Regiones Moquenga y Arequipa. Ministerio de Educación - Centro de Estudios y Prevención de Desastres - Instituto de Defensa Civil; abr. 2005. (Págs. 82 a 95).',
      link:
        'https://www.eird.org/cd/toolkit08/material/insercion-curricular/guia-educ-pdd/guiaeducat.pdf',
    },
    {
      referencia:
        'Vásquez Muñoz, Edith. Guía para el desarrollo del programa de seguridad y emergencia escolar. Dirección General de Protección Civil, México, Secretaría de Educación y Cultura Veracruz, 2004.',
      link:
        'http://cidbimena.bvs.hn/docum/crid/Jun-Jul2004/pdf/spa/doc14057/doc14057-d.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Accidente',
      significado:
        'Suceso inesperado que puede causar daño físico o emocional a los infantes.',
    },
    {
      termino: 'Aislamiento',
      significado:
        'Medida para evitar el contacto entre personas y prevenir contagios.',
    },
    {
      termino: 'Amenaza',
      significado:
        'Posibilidad de ocurrencia de un evento que puede causar daño.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Conjunto de normas para proteger la salud frente a riesgos biológicos.',
    },
    {
      termino: 'Carga física',
      significado:
        'Esfuerzo corporal realizado al manipular niños o materiales pesados.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'Transferencia de microorganismos entre personas, objetos o superficies.',
    },
    {
      termino: 'Desastre',
      significado:
        'Consecuencia grave de una amenaza en una población vulnerable.',
    },
    {
      termino: 'Emergencia',
      significado: 'Situación imprevista que requiere intervención inmediata.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'Ciencia que adapta el entorno de trabajo a las capacidades humanas.',
    },
    {
      termino: 'Evacuación',
      significado:
        'Proceso de desalojo seguro y ordenado en situaciones de riesgo.',
    },
    {
      termino: 'Exposición',
      significado: 'Contacto directo o indirecto con un factor de riesgo.',
    },
    {
      termino: 'Higiene',
      significado:
        'Prácticas destinadas a preservar la salud mediante la limpieza y el orden.',
    },
    {
      termino: 'Incidente',
      significado:
        'Evento no deseado que no causa daño, pero tiene el potencial de hacerlo.',
    },
    {
      termino: 'Lesión',
      significado:
        'Daño físico causado por un accidente o situación peligrosa.',
    },
    {
      termino: 'Patología',
      significado:
        'Alteración de la salud producida por factores físicos, químicos o biológicos.',
    },
    {
      termino: 'Prevención',
      significado: 'Conjunto de acciones para evitar o reducir riesgos.',
    },
    {
      termino: 'Protocolo',
      significado:
        'Conjunto de instrucciones que guían la actuación en situaciones específicas.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Probabilidad de que una amenaza cause daño a personas o bienes.',
    },
    {
      termino: 'Seguridad',
      significado: 'Condición de estar libre de peligro o daño.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'Grado en que una persona o sistema puede verse afectado por una amenaza.',
    },
  ],
}
