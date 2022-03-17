<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 
          i.fas.fa-info
      h1 Introducción

    .cajon-b.color-primario.p-3.mb-5
      p.mb-0 El planeta tierra está compuesto por diferentes factores que interactúan entre ellos y permiten que se desarrolle la vida tal y como la conocemos, con diferentes pisos térmicos, ecosistemas, especies, minerales, elementos y demás componentes ambientales, cada uno con un papel fundamental dentro del ciclo en el planeta. En el siguiente video, encontrará una apertura a la temática correspondiente a este componente formativo.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.py-5
      .col-lg-8.col-md-12
        scan Para la elaboración de este componente, se abordaron varios autores conocidos en 
        scan.color-texto-secundario.text-bold sistemas socioecológicos
        | , de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de 
        scan.color-texto-secundario.text-bold conservación, protección y restauración de los sistemas socioecológicos.
      .col-lg-4.col-md-12
        img(src='@/assets/curso/intro/guacamaya2.png')
    separador
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
