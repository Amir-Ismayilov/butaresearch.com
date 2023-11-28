<template>
  <section class="section_index_page">
    <!-- Slider Area -->
    <IndexSlider/>

    <!-- Index About Area -->
    <IndexAbout/>

    <!-- Index Services Area -->
    <IndexServices/>

    <!-- Project slider Area -->
    <ProjectSlider/>

    <!-- Partners Slider Area -->
    <PartnersSlider/>

    <!-- Blogs Area -->
    <ShortBlogs/>
  </section>
</template>

<script>
import IndexSlider from "../components/sliders/IndexSlider";
import IndexAbout from "../components/about/IndexAbout";
import IndexServices from "../components/services/IndexServices";
import ProjectSlider from "../components/project/ProjectSlider";
import PartnersSlider from "../components/partners/PartnersSlider";
import ShortBlogs from "../components/blog/ShortBlogs";
import {mapGetters} from "vuex";

export default {
  middleware: ["store-middleware"],
  name: 'IndexPage',
  components: {
    IndexSlider,
    IndexAbout,
    IndexServices,
    ProjectSlider,
    PartnersSlider,
    ShortBlogs,
  },
  data() {
    return {
      title: this.$t("home_page"),
    }
  },
  computed: {
    ...mapGetters({settingsAll: "module/setting/getAllSettings"}),
  },
  // Page head() Title, description for SEO
  head() {
    return {
      title: this.title,
    }
  }
}
</script>