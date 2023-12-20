<template>
  <div class="about_index_info page_part">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
          <div class="about_left">
            <h2>{{ $t('about_us') }}</h2>
            <p class="description">{{ aboutAll.title }}</p>
            <div v-html="aboutAll.description"></div>
            <nuxt-link :to="localePath('about')" class="btn_more_text">{{$t("more_details")}}</nuxt-link>
          </div>
        </div>

        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
          <div class="about_right">
            <AboutUsSlider/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutUsSlider from "../../components/about/AboutUsSlider";
import {mapGetters} from "vuex";

export default {
  name: "IndexAbout",
  components: {
    AboutUsSlider
  },
  computed: {
    ...mapGetters({
      aboutAll: "module/about/getAllAbouts"
    }),
  },
}
</script>

<style scoped>
.about_left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.btn_more_text {
  font-size: 18px;
  font-weight: bold;
  color: var(--light-mode-color-1);
}

.about_left h2 {
  color: var(--light-mode-color-1);
  margin-bottom: 8px;
  display: block;
  font-size: 15px;
}

.about_left .description {
  font-size: 35px;
  font-weight: 600;
  line-height: 1.2;
}

.about_left div {
  margin-top: 10px;
}
</style>
