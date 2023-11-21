<template>
  <section class="section_services_container">
    <BreadCrumb :BreadCrumbTitle="TitlePage" :BreadCrumbBefore="LinkBefore" :BreadCrumbAfter="LinkAfter" />

    <div class="main_page_body">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-8">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-6 col-lg-4" v-for="(service, index) in servicesAll" :key="index">
                <OurServicesItem :ServicesId="service.id" :ServicesText="service.name" :ServicesImage="service.image"
                  :ServicesStatus="service.status" />
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <shortInfo class="sticky-column" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BreadCrumb from "../../components/BreadCrumb";
import OurServicesItem from "../../components/services/OurServicesItem";
import shortInfo from "../../components/contact/shortInfo";
import { mapGetters } from "vuex";

export default {
  middleware: ["services-middleware"],
  name: "index",
  components: {
    BreadCrumb,
    OurServicesItem,
    shortInfo
  },
  data() {
    return {
      title: 'Services',
      TitlePage: 'Services',
      LinkBefore: 'Home',
      LinkAfter: 'Services',
    }
  },
  computed: {
    ...mapGetters({
      servicesAll: "module/service/getAllServices"
    })
  },
  head() {
    return {
      title: this.title,
    }
  }
}
</script>

<style scoped>
.sticky-column {
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
}
</style>
