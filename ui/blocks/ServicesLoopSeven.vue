<template>
  <div>
    <div class="spacer feature12">
      <div class="container">
        <div class="columns">
          <div class="column is-6">
            <h2 class="m-b-30 m-t-20">{{content.main_heading}}</h2>
            <h4 class="text-muted font-light">{{content.sub_text}}</h4>
            <div class="columns">
              <div v-if="content.services"
                   v-for="service in content.services" class="column is-6 m-t-30">
                <h5 class="font-medium">{{service.heading}}</h5>
                <p>{{service.details}}</p>
              </div>
            </div>
          </div>

          <div class="column is-6">
            <div class="columns wrap-feature-12">
              <div class="column is-6">
                <div class="columns">
                  <div class="column is-12"><img src="https://via.placeholder.com/287x281" class="rounded img-shadow img-responsive" alt="wrapkit" /></div>
                  <div class="column is-12"><img src="https://via.placeholder.com/287x281" class="rounded img-shadow img-responsive m-t-20" alt="wrapkit" /></div>
                  <div class="column is-12"><img src="https://via.placeholder.com/287x281" class="rounded img-shadow img-responsive m-t-20" alt="wrapkit" /></div>
                  <div class="column is-12"><img src="https://via.placeholder.com/287x281" class="rounded img-shadow img-responsive m-t-20" alt="wrapkit" /></div>
                </div>
              </div>
              <div class="column is-6 uneven-box">
                <div class="columns">
                  <div class="column is-12"><img src="https://via.placeholder.com/287x281" class="rounded img-shadow img-responsive m-t-40" alt="wrapkit" /></div>
                  <div class="column is-12"><img src="https://via.placeholder.com/287x281" class="rounded img-shadow img-responsive m-t-20" alt="wrapkit" /></div>
                  <div class="column is-12"><img src="https://via.placeholder.com/287x281" class="rounded img-shadow img-responsive m-t-20" alt="wrapkit" /></div>
                  <div class="column is-12"><img src="https://via.placeholder.com/287x281" class="rounded img-shadow img-responsive m-t-20" alt="wrapkit" /></div>
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


