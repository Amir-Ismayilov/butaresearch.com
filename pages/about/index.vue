<template>
  <section class="section_about_us">
    <BreadCrumb
      :BreadCrumbTitle="TitlePage"
      :BreadCrumbBefore="LinkBefore"
      :BreadCrumbAfter="LinkAfter"
    />

    <div class="main_page_body">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <div class="about_left">
              <h1>{{ $t('about_us') }}</h1>
              <p>{{ aboutAll.title }}</p>
              <div v-html="aboutAll.description"></div>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <div class="about_right">
              <AboutUsSlider/>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-12 col-lg-12">
            <div class="our_services">
              <h1>{{ $t('services') }}</h1>
                <div class="row">
                  <div class="col-12 col-sm-6 col-md-6 col-lg-4" v-for="(service,index) in servicesAll" :key="index">
                    <OurServicesItem
                      :ServicesId="service.id"
                      :ServicesText="service.name"
                      :ServicesImage="service.image"
                      :ServicesStatus="service.status"
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BreadCrumb from "../../components/BreadCrumb";
import AboutUsSlider from "../../components/about/AboutUsSlider";
import OurServicesItem from "../../components/services/OurServicesItem";
import {mapGetters} from "vuex";
// import _ from "lodash";

export default {
  middleware: ["about-middleware"],
  name: "index",
  components: {
    BreadCrumb,
    OurServicesItem,
    AboutUsSlider
  },
  data() {
    return {
      title: 'About us',
      TitlePage: 'About us',
      LinkBefore: 'Ana-sehife',
      LinkAfter: 'About us',
    }
  },
  computed: {
    ...mapGetters({
      aboutAll: "module/about/getAllAbouts",
      servicesAll: "module/service/getAllServices"
    }),
  },
  mounted() {
    console.log(this.aboutAll)
  },
  head() {
    return {
      title: this.title,
    }
  }
}
</script>

<style scoped>
.our_services {
  padding-top: 80px;
}

.our_services h1 {
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 30px;
  font-size: 35px;
  line-height: 1.2;
}

.about_left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.about_left h1 {
  color: var(--light-mode-color-1);
  margin-bottom: 8px;
  font-size: 15px;
}

.about_left p {
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 1.2;
  color: var(--light-mode-color-4);
}
</style>
