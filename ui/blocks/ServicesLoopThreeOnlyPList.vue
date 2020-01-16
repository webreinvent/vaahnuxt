<template>

  <div>

    <div class="spacer feature2">
      <div class="container">
        <!-- columns  -->
        <div class="columns is-centered">
          <div class="column is-7 has-text-centered">
            <h2 class="title">{{content.main_heading}}</h2>
            <h6 class="subtitle">{{content.sub_text}}</h6>
          </div>
        </div>
        <!-- columns  -->

        <div v-if="content.features"
             v-for="(feature,index) in content.features">

          <div v-if="index%2==0" class="columns">
            <div class="column is-6 m-t-40 m-b-40">
              <div class="max-box m-t-40 m-b-40">
                <h2 class="title">{{feature.heading}}</h2>
                <p class="">{{feature.details}}</p>
                <div v-if="feature.services" v-for="text in feature.services">
                  <h4 class="title">{{text.heading}}</h4>
                  <p class="m-t-10">{{text.details}}</p>
                </div>
              </div>
            </div>
            <div class="column is-5 column is-5 ml-auto m-t-40 m-b-40"> <img :src=feature.src alt="wrapkit" class="img-responsive"> </div>
          </div>
          <div v-else class="columns">
            <div class="column is-5 column is-5 m-t-40 m-b-40"> <img :src=feature.src alt="wrapkit" class="img-responsive"> </div>
            <div class="column is-6 m-t-40 m-b-40">
              <div class="max-box m-t-40 m-b-40">
                <h2 class="title">{{feature.heading}}</h2>
                <p class="">{{feature.details}}</p>
                <div v-if="feature.services" v-for="text in feature.services">
                  <h4 class="title">{{text.heading}}</h4>
                  <p class="m-t-10">{{text.details}}</p>
                </div>
              </div>
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

<style scoped>
  .duo-list{
    list-style: square;
  }
</style>
