<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in").mb-4.mb-lg-0
    
      .col-lg-8
        .bg-color-6.p-4(data-aos="fade-left").mb-4
          p.mb-0 En un entorno escolar donde la protección y el bienestar de los infantes son prioridades fundamentales, la identificación de peligros y riesgos constituye una etapa crucial para garantizar un ambiente seguro y saludable para todos los actores de la comunidad educativa. La presencia de diversos factores de peligro en las instituciones educativas, que pueden derivar en patologías o lesiones, requiere un proceso sistemático y especializado que permita detectar, evaluar y controlar dichas amenazas, promoviendo así un entorno propicio para el desarrollo integral de los niños y niñas, así como para la protección del personal docente y auxiliar. En este contexto, la presente unidad de formación, titulada "Identificación de Peligros y Riesgos en el Entorno Escolar", se presenta como una herramienta esencial para capacitar a los profesionales en la detección temprana y manejo adecuado de los diferentes factores de peligro que puedan afectar la seguridad y salud en los centros educativos.
        

    .row.mb-5
      .col-lg-auto
        figure
          img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")
      .col-lg
        p(data-aos="fade-left").mb-4 Este programa tiene como finalidad dotar a los participantes de conocimientos básicos y habilidades prácticas para reconocer los diversos factores de peligro en el contexto escolar, así como comprender los procesos mediante los cuales estos factores pueden derivar en patologías o problemas de salud en los infantes y el personal. A través de metodologías participativas, análisis de casos y actividades prácticas, se busca promover un aprendizaje activo que facilite la aplicación de herramientas y conceptos en la realidad escolar, permitiendo implementar medidas preventivas y correctivas efectivas para reducir riesgos y prevenir patologías relacionadas con las condiciones del entorno.


    .row.mb-0
      .col-lg-8
        .bg-color-4.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 La unidad se estructura en tres módulos principales: el primero, "Proceso de Identificación de Factores de Peligro en el Entorno Escolar", ofrece una visión general sobre los pasos y metodologías para detectar y clasificar los diferentes peligros presentes en las instituciones educativas, incluyendo la recopilación de información, observación y registros; el segundo, "Factores de Peligro y sus Posibles Patologías", profundiza en los tipos de peligros más comunes en el entorno escolar, como riesgos biológicos, químicos, físicos y ergonómicos, así como las patologías o problemas de salud que pueden derivar de cada uno, tales como enfermedades transmisibles, lesiones, alergias o trastornos musculoesqueléticos; y el tercero, "Estrategias para la Evaluación y Control de Riesgos", presenta las técnicas y herramientas para evaluar la gravedad y la probabilidad de ocurrencia de los peligros identificados, además de establecer medidas preventivas, planes de acción y seguimiento para minimizar los riesgos y proteger la salud de toda la comunidad educativa.
        
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/intro/3.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    


</template>

<script>
export default {
  name: 'Introduccion',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.lista-ul--color.color-dark li > i:first-of-type
  color: #453179 !important
</style>
