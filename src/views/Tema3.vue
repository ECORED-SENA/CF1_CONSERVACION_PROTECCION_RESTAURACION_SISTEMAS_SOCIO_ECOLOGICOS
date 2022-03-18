<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Normatividad    
    .row.justify-content-center
      .col-12.fondotema1
        img(src='@/assets/curso/tema3/faunaflora.png')
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 Los sistemas socioecológicos son básicamente la interacción entre los sistemas sociales y los sistemas ecológicos, donde, por una parte, se encuentran todas las actividades e intervenciones de índole cultural, político, social y económico, que generan afectaciones positivas o negativas en el medio ambiente y en la naturaleza. Por otra parte, los ecosistemas y sus diferentes dinámicas tienen una amplia influencia en las culturas humanas, al igual que las actividades económicas que se desarrollan en cada ecosistema.
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          br
          span Clasificación normatividad ambiental
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.text-center Clasificación
                th.text-center Concepto
                th.text-center Factores
            tbody
              tr
                td Protección del ambiente.
                td Son todas aquellas normas que tienen como propósito la prevención, reducción y eliminación de contaminaciones o afectaciones al medio ambiente. 
                td Se tienen en cuenta el cambio de procesos para prevenir emisiones atmosféricas y, a su vez, controles y mediciones en laboratorios especializados.
              tr
                td Gestión de aguas residuales.
                td Estas normas están encaminadas hacia la prevención de la contaminación de aguas superficiales. 
                td Las redes de transporte de aguas y el tratamiento de sus residuos. 
              tr
                td Gestión de residuos.
                td Se refiere a las actividades que tienen como objetivo prevenir la generación de residuos y, así, poder disminuir las afectaciones que tiene al ambiente. 
                td La recolección y transporte de los residuos es clave en este proceso, asimismo, el tratamiento y la eliminación de residuos peligrosos.
              tr
                td Protección y recuperación de suelos, aguas subterráneas y aguas superficiales.
                td Son todas aquellas medidas para prevenir las filtraciones de contaminantes en los suelos y cuerpos de agua. 
                td Se usan para limpiar el suelo y cuerpos de agua de contaminantes que puedan traer repercusiones en la salud humana.
              tr
                td Atenuación de ruidos y vibraciones.
                td Son las medidas que tienden a controlar los ruidos y vibraciones, en su mayoría generadas por procesos industriales. 
                td Se realizan modificaciones preventivas de los procesos en la fuente, como lo son instalaciones de sistemas antirruido y vibraciones.
              tr
                td Protección de la biodiversidad y de los paisajes.
                td Se refiere a aquellas actividades destinadas a la conservación y rehabilitación de especies de fauna y flora.
                td Es la protección y rehabilitación de hábitat y especies que han sido intervenidos.
              tr
                td Protección contra las radiaciones.
                td Son todas aquellas normas que mediante mediciones pretenden reducir las consecuencias negativas que traen consigo las radiaciones.
                td Se tiene en cuenta el tratamiento y transporte que tienen los residuos radiactivos.

        p.my-5 En Colombia, existe gran cantidad de normas ambientales como las que se describen a continuación:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Constitución Nacional" :icono="require('@/assets/componentes/tema3/constitucion.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Constitución Nacional
            p.mt-4 Principios principales que expone la constitución:
            ul.lista-ul.ms-5
              li 
                i.fas.fa-leaf
                | Derecho a un ambiente sano.
              li 
                i.fas.fa-leaf
                | El medio ambiente como patrimonio cultural.
              li 
                i.fas.fa-leaf
                | Desarrollo sostenible. 
       
          .col-md-5
            figure
              img(src='@/assets/template/tema3/imagen1.png', alt='Constitución Nacional')

      .py-4.py-md-5(titulo="Decreto Ley 2811 de 1974" :icono="require('@/assets/componentes/tema3/decreto.svg')")
        .row
          .col-md-7
            h4 Decreto Ley 2811 de 1974
            p Código Nacional de los Recursos Naturales Renovables y de Protección del Medio Ambiente, en el cual se establece el uso de los recursos naturales renovables.
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/template/tema3/imagen2.png', alt='Decreto Ley 2811 de 1974')
        
      .py-4.py-md-5(titulo="Ley Sanitaria Ley 09 de 1979" :icono="require('@/assets/componentes/tema3/leysanitaria.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Ley Sanitaria Ley 09 de 1979
            p Su principal objetivo es la conservación de la salud y del bienestar humano.
        
          .col-md-5
            figure
              img(src='@/assets/template/tema3/imagen3.png', alt='Ley Sanitaria Ley 09 de 1979')

      .py-4.py-md-5(titulo="Ley 99 de 1993" :icono="require('@/assets/componentes/tema3/ley99.svg')")
        .row
          .col-md-7
            h4 Ley 99 de 1993
            p Se crea el Ministerio del Medio Ambiente.
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/template/tema3/logo-mads.png', alt='Ley 99 de 1993')        
      
      .py-4.py-md-5(titulo="Ley 685 del 2001" :icono="require('@/assets/componentes/tema3/ley685.svg')")
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Código Minero Ley 685 del 2001
            p Se expide el Código de Minas.
          .col-md-5
            figure
              img(src='@/assets/template/tema3/imagen4.png', alt='Ley 685 del 2001')

    .row.justify-content-center
      .col-12.fondotema1
        .row.justify-content-start.fondo5.align-items-center
          .col-lg-3.col-md-10.col-sm-10
            img(src='@/assets/curso/tema3/imagen1.png') 
          .col-lg-6.col-md-10.col-sm-10
            span.text-white.text-bold Tratados internacionales: 
            span.text-white son acuerdos entre dos o más países que quedan por escrito, están regulados por las normas del derecho internacional. Algunos de los tratados internacionales establecidos en Colombia son:

        .titulo-sexto.color-acento-contenido.my-5
          h5 Tabla 2
          br
          span Tratados internacionales en Colombia
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.text-center Tratados
                th.text-center Concepto
            tbody
              tr
                td Convención para el cambio climático.
                td Busca desarrollar temas frente a la educación, formación, sensibilización y cumplimiento de los compromisos adquiridos.
              tr
                td Convención para la protección de la biodiversidad.
                td Se estableció en la conferencia de Río de Janeiro en el año 1991 y tiene como principal objetivo la protección de la biodiversidad.
              tr
                td Convención de Basilea sobre residuos peligrosos (1989).
                td Su fin fue reducir el volumen de residuos, para proteger la salud humana y del medio ambiente. Colombia la ratificó mediante la Ley 256 de 1996.
              tr
                td Convenio de Viena para la protección de la capa de ozono y el Protocolo de Montreal.
                td Ratificado por Colombia por medio de la Ley 30 de 1990.

        .row.justify-content-end.fondo6.align-items-center
          .col-lg-6.col-md-10.col-sm-10
            span.text-bold Leyes ambientales: 
            | corresponden a los principios y normas que buscan la protección, conservación, recuperación del medio ambiente y preservación de los recursos naturales. 
          .col-lg-3.col-md-10.col-sm-10
            img(src='@/assets/curso/tema3/imagen2.png') 
    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido.my-5
          h5 Tabla 3
          br
          span Leyes ambientales en Colombia
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.text-center Leyes generales
                th.text-center Concepto
            tbody
              tr
                td Ley 99 de 1993.
                td Por la cual se crea el Ministerio del Medio Ambiente.
              tr
                td Ley 23 de 1973.
                td En la cual se dictan los principios sobre prevención de los contaminantes del agua, suelo y aire.
              tr
                td Ley 388 de 1997.
                td Se define el ordenamiento territorial municipal y distrital.
              tr
                td Ley 491 de 1999.
                td Se modifica el Código Penal y se establecen delitos contra los recursos naturales y el medio ambiente. 
              tr
                td Ley 29 de 1992.
                td Por medio de la cual se adopta el "Protocolo de Montreal relativo a las sustancias agotadoras de la capa de ozono”.

    .row.justify-content-start.fondo5.align-items-center
      .col-lg-3.col-md-10.col-sm-10
        img(src='@/assets/curso/tema3/imagen3.png') 
      .col-lg-6.col-md-10.col-sm-10
        span.text-white.text-bold Decretos ambientales: 
        span.text-white tienen como propósito velar por la recuperación, conservación, protección, manejo, uso y aprovechamiento de los recursos naturales renovables de la nación. Destina como un servicio público la salud y el saneamiento ambiental.

    .row.justify-content-center
      .col-8
        .titulo-sexto.color-acento-contenido.my-5
          h5 Tabla 4
          br
          span Decretos ambientales en Colombia
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.text-center Decreto
                th.text-center Concepto
            tbody
              tr
                td Decreto 1791.
                td Aprovechamiento forestal.
              tr
                td Decreto 870 de 2017.
                td Se establece el pago por servicios ambientales.
              tr
                td Decreto 2820 de 2010.
                td Se reglamenta el Título VIII de la Ley 99 de 1993 sobre licencias ambientales.
              tr
                td Decreto 283.
                td Hidrocarburos.

    .row.justify-content-end.fondo6.align-items-center
      .col-lg-6.col-md-10.col-sm-10
        span.text-bold Resoluciones ambientales: 
        | son todos los lineamientos que la autoridad requiere para la elaboración y ejecución de los estudios ambientales que deben ser presentados ante las autoridades. 
      .col-lg-3.col-md-10.col-sm-10
        img(src='@/assets/curso/tema3/imagen4.png') 

    .row.justify-content-center
      .col-8
        .titulo-sexto.color-acento-contenido.my-5
          h5 Tabla 5
          br
          span Resoluciones ambientales en Colombia
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.text-center Resolución
                th.text-center Concepto
            tbody
              tr
                td Resolución 1561 de 2019.
                td Se establecen los términos de referencia para la elaboración de estudios de impacto ambiental. 
              tr
                td Resolución 2210 de 2018.
                td Se reglamenta el uso del sello minero ambiental.
              tr
                td Resolución 1447 de 2018.
                td Se reglamenta el sistema de monitoreo y evaluación de las acciones de mitigación.
              tr
                td Resolución 689 de 2016.
                td Se reglamentan los límites máximos de fósforo en jabones.
              tr
                td Resolución 260 de 2011.
                td En la cual se fijan las tarifas para el cobro de los servicios de evaluación y seguimiento de licencias ambientales. 
              tr
                td Resolución 2064 de 2010.
                td En esta se reglamentan las medidas a tomar luego del decomiso de especies de fauna y flora. 
              tr
                td Resolución 1023 de 2005.
                td Se adoptan guías ambientales que serán utilizadas como medidas de autogestión.
    separador
</template>
<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
