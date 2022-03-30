<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Componentes ambientales
    .row.justify-content-center
      .col-12.fondotema1


        //--.bloque-texto-g.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/imagen1.png')})`}"
          )
          .bloque-texto-g__texto.p-4.fondo2
            p.mb-0.ms-5.ps-5 Los componentes ambientales son todos los elementos, factores o recursos naturales que presentan interacciones entre sí, lo cual permite que se genere la vida en nuestro planeta. Estos componentes tienen una vital influencia en el medio ambiente y, por ende, en cada uno de los seres vivos. Existen dos grandes grupos, tal como se observa en la siguiente figura:
        //-img.mover(src='@/assets/curso/tema1/imagen1.png') 
        .row.align-items-center.justify-content-end.me-3.mt-5  
          .col-lg-10.col-md-11.col-sm-11.fondo2
            p.p-4.margenParrafo Los componentes ambientales son todos los elementos, factores o recursos naturales que presentan interacciones entre sí, lo cual permite que se genere la vida en nuestro planeta. Estos componentes tienen una vital influencia en el medio ambiente y, por ende, en cada uno de los seres vivos. Existen dos grandes grupos, tal como se observa en la siguiente figura:
        .row.align-items-center.justify-content-start
          .col-lg-5.col-md-1.col-sm-1
            img.subir(src='@/assets/curso/tema1/imagen1.png') 

        .row.justify-content-center.mt-5
          .col-10
            img(src='@/assets/curso/tema1/figura1.png')
        p.my-5 Conozca un poco sobre el primer grupo, los aspectos físicos y biológicos, que se encuentra subdividido en:
        .row
          .col-lg-4.col-md-5.correr-izq
            p.text-center.text-white.mb-0.fondo3.p-4.text-bold Factores bióticos:
        p.my-5 Son todos aquellos organismos que tienen vida, como los animales, las plantas o los microorganismos, y que influyen directamente en la forma de algún ecosistema, sea de manera positiva o negativa, por medio de la interacción entre ellos. Algunas de sus principales características se pueden identificar así: 
    img.p-2(src='@/assets/curso/tema1/figura2.svg')
    p.my-5 Ahora, los factores bióticos se pueden clasificar en dos formas, principalmente: según su organización ecológica o según cómo estén posicionados dentro de la cadena alimentaria o cadena trófica. 
    p.mb-5 En la primera parte, se tendrán en cuenta los factores según su organización ecológica, los cuales presentan tres diferentes grupos, descritos a continuación: 

    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/template/tema1/figura1.jpg')

      .tarjeta.fondotarjeta.p-3(x="30%" y="9%" numero="+")
        span.text-bold Población:  
        | esto hace referencia a un grupo de individuos de una misma especie, que comparten el mismo espacio y el mismo tiempo, por lo tanto, presentan diversas relaciones entre ellos, por ejemplo, de alimentación o de reproducción.

      .tarjeta.fondotarjeta.p-3(x="19%" y="45%" numero="+")
        span.text-bold Individuos: 
        | son organismos unitarios, que presentan una estructura independiente, la cual puede ser unicelular o pluricelular, y además no tienen la necesidad de otro ser vivo para poder sobrevivir en algún ecosistema. 

      .tarjeta.fondotarjeta.p-3(x="59.5%" y="55%" numero="+")
        span.text-bold Comunidad: 
        | se conoce como el conjunto de varias poblaciones, que pueden ser, a su vez, de diferentes especies, pero que habitan en un mismo ecosistema o territorio determinado.
    p.my-5 En segunda instancia, podrá encontrar la clasificación que se tiene de los factores bióticos según su posición dentro de la cadena alimenticia, tal como se explica en el siguiente video:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)     
    .row
      .col-lg-4.col-md-5.correr-izq
        p.text-center.text-white.mb-0.fondo3.p-4.text-bold Factores abióticos:
    p.my-5 Son aquellos que no tienen vida, pero de igual manera son de vital importancia para el desarrollo de los ecosistemas y de los seres vivos. Estos factores afectan la capacidad que tienen los seres vivos para sobrevivir y reproducirse. 

    p.mb-5 Los factores abióticos se pueden dividir en dos categorías: físicos y químicos. La siguiente infografía le ayudará a comprender el tema:
    .row.fondo7
      .col-12
        ImagenInfografica.color-secundario.mb-5.mt-2
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema1/figura2.jpg')

          .tarjeta.fondotarjeta.p-3(x="67%" y="7%" numero="1")
            span.text-bold Luz solar: 
            | esta luz es la principal fuente de energía en el planeta Tierra, tanto para las plantas como para los animales, entre ellos el ser humano, ya que las ondas emitidas por el sol influyen en la temperatura de los mares, del aire y de la tierra.  

          .tarjeta.fondotarjeta.p-3(x="79%" y="32%" numero="2")
            span.text-bold Temperatura:   
            | la temperatura, sin importar cual sea su nivel, incide en la generación de vida y en las relaciones entre diferentes organismos.  

          .tarjeta.fondotarjeta.p-3(x="66%" y="44%" numero="3")
            span.text-bold Presión atmosférica:  
            | Los diferentes cambios de presión que ejerce la atmósfera sobre la tierra son un factor fundamental para el desarrollo de los elementos que componen cualquier ecosistema.  
          .tarjeta.fondotarjeta.p-3(x="54%" y="30%" numero="4")
            span.text-bold Clima: 
            | la región climática donde se encuentre cada ecosistema influye totalmente en sus características y en el tipo de organismos que allí habitan. 
          .tarjeta.fondotarjeta.p-3(x="57%" y="66%" numero="5")
            span.text-bold pH: 
            | este factor es determinante para la generación de vida, ya que afecta las propiedades químicas tanto del agua como del suelo, lo cual le otorga características particulares a cada ecosistema. 
          .tarjeta.fondotarjeta.p-3(x="25%" y="75%" numero="6")
            span.text-bold Química del aire y del suelo: 
            | hace referencia a los diferentes compuestos químicos que están disueltos tanto en el suelo como en el aire y que proporcionan los niveles de oxígeno necesarios para la sustentabilidad de los ecosistemas.

        p.my-5 Dentro del segundo grupo, se pueden encontrar los factores socioculturales: 
        .row.bajar
          .col-lg-4.col-md-5.my-5.correr-izq
            p.text-center.text-white.mb-0.fondo3.p-4.text-bold Factores socioculturales: 
    img.mb-5(src='@/assets/curso/tema1/grupo.png')

    .row.justify-content-center
      .col-10
        .cajon.fondocajon.p-4.mb-4
          p Los factores socioculturales son el conjunto tanto de factores internos, como lo son las creencias y las habilidades personales, como de factores externos, como el efecto de la educación dentro de la sociedad. 

          p Es necesario, entonces, primero entender cada factor por separado. En primer lugar, los factores sociales son aquellos que influyen en las actitudes, los valores y el estilo de vida de cada persona, y cuando se habla de ellos se hace referencia a las clases sociales, los comportamientos y las creencias arraigadas en cada comunidad. En segundo lugar, cuando se hace referencia a un factor sociocultural, se entiende como la relación que se presenta entre las comunidades y sus entornos, teniendo en cuenta aspectos económicos, culturales, sociales, históricos y políticos.
    p.my-5 De igual forma, se encuentra que los elementos y compuestos inorgánicos forman parte de la materia viva y fluyen en el ecosistema a través de los ciclos biogeoquímicos.

    .row
      .col-lg-4.col-md-5.my-5.correr-izq
        p.text-center.text-white.mb-0.fondo3.p-4.text-bold Ciclos biogeoquímicos: 
    p.my-5 Los ciclos biogeoquímicos son básicamente procesos naturales que se generan por el reciclaje de elementos en formas químicas que están presentes en el medio ambiente y fluyen hacia los organismos y de manera contraria. Algunos de estos ciclos son los del: agua, carbono, oxígeno, nitrógeno, fósforo, entre otros. 
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/componentes/tema1/agua.svg' alt='Agua')
        p.text-center.text-white Agua

      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/componentes/tema1/carbono.svg' alt='Carbono')
        p.text-center.text-white Carbono

      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/componentes/tema1/oxigeno.svg' alt='Oxígeno')
        p.text-center Oxígeno

      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/componentes/tema1/nitrogeno.svg' alt='Nitrógeno')
        p.text-center.text-white Nitrógeno

      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/componentes/tema1/fosforo.svg' alt='Fósforo')
        p.text-center.text-white Fósforo

    p.my-5 En estos ciclos, también, como en cualquier ecosistema, existe una parte biótica y otra abiótica:

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/componentes/tema1/arboles.svg' alt='Árboles')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.fondocajon
            .p-4
              h2.text-center Biótica
              p.text-center Es aquella que comprende los organismos vivos que adquieren elementos inorgánicos y, posteriormente, al momento de morir, se descomponen, y estos elementos regresan al medio ambiente y son aprovechados por otros organismos.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/componentes/tema1/rio.svg' alt='Río')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.fondocajon
            .p-4
              h2.text-center Abiótica
              p.text-center Son todas las sustancias inorgánicas que se descomponen lentamente y están disponibles para cualquier organismo de forma constante y abundante, como lo es el agua, el carbono y el oxígeno. 

    p.my-5 En la naturaleza, existen recursos naturales que son limitados, por esto, requieren ser reciclados para poder evitar su agotamiento y, por ende, la desaparición de la vida en nuestro planeta. Por este motivo, estos ciclos son fundamentales para aprovechar los elementos químicos que perduran luego de que un ser vivo muere. 

    p.mb-5 Son seis (6) los ciclos biogeoquímicos más relevantes y serán detallados en el siguiente video:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador   
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema1',
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
