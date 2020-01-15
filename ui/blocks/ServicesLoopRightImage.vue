<template>
  <div class="spacer has-background-light">
    <!-- Row  -->
    <div class="container">
      <div class="columns">
        <div class="column is-7">
          <div class="" data-aos="fade-right" data-aos-duration="1200">
            <h2 class="title text-uppercase">{{content.main_heading}}</h2>
            <p class="op-8">{{content.sub_text}}</p>
            <div class="columns m-t-30">
              <div v-if="content.services" v-for="service in content.services" class="column is-6">
                <div class="card card-shadow">
                  <div class="card-body text-center text-uppercase">
                    <h6 class="m-t-10 font-medium">{{service.details}}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-5 right-image"> <img :src="content.src" class="half-radius img-fluid" alt="wrappixel" data-aos="fade-left" data-aos-duration="3000" data-aos-offset="500" /> </div>
        <!-- Column -->
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    props: ['content']
  }
</script>


