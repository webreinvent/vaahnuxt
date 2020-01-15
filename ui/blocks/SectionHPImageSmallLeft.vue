<template>
  <div class="container is-fullhd">
    <div class="columns">
      <div class="column is-5 is-gapless">
        <img src="https://via.placeholder.com/625x350">
      </div>
      <div class="column is-7">
        <div class="section is-vcentered spacer">
          <h1 class="has-text-dark">{{content.heading}}</h1>
          <p>{{content.details_one}}</p>
          <p class="m-t-30">{{content.details_two}}</p>

          <nuxt-link  v-if="content.link" class="button is-primary" to="/contact">
            {{content.link.label}}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    props: ['content']
  }
</script>


