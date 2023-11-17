<template>
  <div class="project_sliders_area page_part">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="title_info_wrapper">
            <h1>{{ $t('our_works') }}</h1>
            <h2>{{ $t('our_latest_crafts') }}</h2>
          </div>
        </div>

        <div class="card_slider">
          <swiper :options="swiperOptions">
            <swiper-slide class="col-6 col-sm-6 col-md-4 col-lg-2"
                          v-for="(Project, index) in projectsAll" :key="index">
              <ProjectItemSlider
                :ProjectsId="Project.id"
                :ProjectsImage="Project.image"
                :ProjectsTitle="Project.title"
                :ProjectsDescription="Project.content"
              />
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectItemSlider from "@/components/project/ProjectItemSlider";
import {mapGetters} from "vuex";

export default {
  name: "ProjectSlider",
  components: {
    ProjectItemSlider
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 5000,
        },
        breakpoints: {
          580: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      }
    };
  },
  computed: {
    ...mapGetters({projectsAll: "module/project/getAllProjects"}),
  },
}
</script>

<style scoped>
.card_slider {
  display: flex;
  align-items: center;
}
</style>
