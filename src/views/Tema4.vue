<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Metodologías
    .row.align-items-center.justify-content-end.me-3.mt-5  
      .col-lg-10.col-md-11.col-sm-11.fondocajon.mt-5
        p.pt-4.ps-5.pb-4.margenParrafo.mb-0 Cuando se hace referencia a las fuentes de información o a las fuentes de documentación, se hace mención del origen de un dato en particular o de la manera en la cual se puede recuperar este mismo. Es por esto que las referencias pueden ser de diferentes formas, aunque todas ellas apuntan a que los datos que sean utilizados provengan de una fuente confiable y, así, influir en que los resultados que se obtengan sean verídicos. Para esto, se deben tener en cuenta las diferentes fuentes de información descritas a continuación: 
    .row.align-items-center.justify-content-start.mt-3
      .col-lg-5.col-md-1.col-sm-1
        img.subir(src='@/assets/curso/tema4/imagen1.png') 
    .row.my-5
      .col-12.fondotema1
        .row.my-3
          .col-lg-4.col-md-5
            p.text-center.text-white.mb-0.fondo3.p-4.text-bold Fuentes de información
        img(src='@/assets/curso/tema4/imagen2.png') 

    separador
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema4',
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
