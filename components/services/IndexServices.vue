<template>
  <div class="services_index_info page_part">
    <div class="buta_animation_wrapper">
      <img src="../../assets/icons/main/place_point.png" alt="buta_icon">
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title_info_wrapper">
            <h1>{{ $t('services_2') }}</h1>
            <h2>{{ $t('service_dream') }}</h2>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-4 col-lg-4" v-for="(service, index) in servicesAll" :key="index">
          <OurServicesItem :ServicesId="service.id" :ServicesText="service.name" :ServicesImage="service.image"
            :ServicesStatus="service.status" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OurServicesItem from "../../components/services/OurServicesItem";
import { mapGetters } from "vuex";

export default {
  name: "IndexServices",
  components: {
    OurServicesItem
  },
  computed: {
    ...mapGetters({
      servicesAll: "module/service/getAllServices",
    })
  },
}
</script>

<style scoped>
.services_index_info {
  position: relative;
}
</style>