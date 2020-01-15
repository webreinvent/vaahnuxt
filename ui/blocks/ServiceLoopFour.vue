<template>
  <div class="spacer">
    <div class="container is-fullhd">
      <!-- Row  -->
      <div class="columns is-centered">
        <div class="column is-10 has-text-centered">
          <h2 class="title">{{content.main_heading}}</h2>
          <h6 class="subtitle">{{content.sub_text}}</h6>
        </div>
      </div>
      <!-- Row  -->

      <div v-if="content.features"
           v-for="(feature,index) in content.features">

        <div v-if="index%2==0" class="columns">
          <div class="columns is-gapless">
            <div class="column is-6">
              <img :src=feature.src alt="wrapkit" class="image-fluid">
            </div>
            <div class="column is-6">
              <div class="p-3">
                <h2 class="title">{{feature.heading}}</h2>
                <p>{{feature.details}}</p>

                <ul v-if="feature.list"
                    v-for="items in feature.list">
                  <li>{{items.item}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="columns">
          <div class="columns is-gapless">
            <div class="column is-6">
              <div class="p-3">
                <h2 class="title">{{feature.heading}}</h2>
                <p>{{feature.details}}</p>

                <ul v-if="feature.list"
                    v-for="items in feature.list">
                  <li class="text-left">{{items.item}}</li>
                </ul>
              </div>
            </div>
            <div class="column is-6 bg-cover  px-0">
              <img :src=feature.src alt="wrapkit" class="image-fluid">
            </div>
          </div>
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


