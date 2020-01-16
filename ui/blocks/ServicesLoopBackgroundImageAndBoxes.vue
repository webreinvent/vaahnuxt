<template>
  <div class="spacer ServicesLoopBackgroundImageAndBoxes">
    <div class="feature46" style="background-image:url('https://via.placeholder.com/1920x1080');">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-10 has-text-centered">
            <h2 class="title text-uppercase">{{content.main_heading}}</h2>
            <h6 class="subtitle">{{content.sub_task}}</h6>
          </div>
        </div>
        <div class="columns ">
          <div v-if="content.features" v-for="feature in content.features" class="column is-4">
            <div class="card card-shadow aos-init" data-aos="fade-right" data-aos-duration="1200">
              <div class="card-body p-30">
                <h6 class="font-medium">{{feature.heading}}</h6>
                <p class="m-t-20">{{feature.details}}</p>
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

