<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row
      .col-lg-4.col-md-5
        p.text-center.text-white.mb-0.fondo3.p-4.text-bold Síntesis
    p.my-5 El siguiente mapa detalla los elementos más relevantes estudiados durante el desarrollo del componente formativo:
    img.mb-5(src='@/assets/curso/sintesis/sintesis.svg')
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Sintesis',
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
