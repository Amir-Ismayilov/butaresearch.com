<template>
  <!-- Projects Inside -->
  <section class="projects_inside">
    <BreadCrumb
      :BreadCrumbTitle="getProjects.title"
      :BreadCrumbBefore="LinkBefore"
      :BreadCrumbAfter="getProjects.title"
    />

    <div class="main_page_body">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-8">
            <div class="projects_inside_left">
              <div class="slider">
                <swiper :options="swiperOptions">
                  <swiper-slide v-for="(slider, index) in getProjects.images" :key="index">
                    <img :src="AddUrl + slider" alt="project_images">
                  </swiper-slide>
                  <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <div class="swiper-button-next" v-if="getProjects.images.length > 1"></div>
                <div class="swiper-button-prev" v-if="getProjects.images.length > 1"></div>
              </div>

              <div class="main_text">
                <div class="project_short_info">
                  <img src="../../assets/icons/main/date.png" alt="date-icon">
                  <span>{{ getProjects.date }}</span>
                </div>

                <div class="text">
                  <h1>{{ getProjects.title }}</h1>
                  <div v-html="getProjects.description"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <div class="projects_inside_right">
              <div class="other_post_container">
                <span>{{ $t('other_posts') }}</span>
                <article class="project_item" v-for="(project,index) in projectsAll.slice(-5)" :key="index">
                  <div class="project_item_image_wrapper">
                    <nuxt-link :to="`/${$i18n.locale!='az' ? $i18n.locale : '/' }`+`/project/` +  project.id">
                      <img :src="project.image" :alt="project.title">
                    </nuxt-link>
                  </div>

                  <div class="project_item_text_wrapper">
                    <nuxt-link :to="`/${$i18n.locale!='az' ? $i18n.locale : '/' }`+`/project/` +  project.id">
                      <p>{{ project.title }}</p>
                      <span>{{ project.current_date }}</span>
                    </nuxt-link>
                  </div>
                </article>
              </div>
              <shortInfo/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import shortInfo from "../../components/contact/shortInfo"

export default {
  components: {
    shortInfo
  },

  // name: "_id.vue",
  data() {
    return {
      AddUrl: process.env.ASSET_URL,
      LinkBefore: 'Ana-sehife',

      swiperOptions: {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        autoplay: {
          delay: 5000,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        },
      }
    }
  },
  mounted() {
    console.log(this.getProjects)
  },
  head() {
    return {
      title: this.getProjects.meta_title,
      meta: [
        { hid: 'description', name: 'description', content: this.getProjects.meta_description },
        { hid: 'keywords', name: 'keywords', content: this.getProjects.meta_keyword }
      ]
    }
  },
  computed: {
    ...mapGetters({completedProjects: "module/project/getAllProjects"}),
    ...mapGetters({projectsAll: "module/project/getAllProjects"}),
  },

  async asyncData({store, route}) {
    await store.dispatch('module/project/getProjectsArray')
    let response = await store.dispatch('module/project/getProjectsByIdApi', route.params.id)
    return {getProjects: response}
  },
}
</script>

<style scoped>
.main_text .text h1 {
  font-size: 26px;
  color: var(--light-mode-color-4);
  margin-bottom: 5px;
  font-weight: 600;
}

.project_short_info {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}

.project_short_info img {
  height: 25px;
  width: 25px;
}

.project_short_info span {
  font-size: 15px;
  color: var(--light-mode-color-4);
  font-weight: 500;
  margin-top: 5px;
}


/*-----------------------------------PROJECT INSIDE LEFT------------------------------------------------------*/

.projects_inside_left {
  height: 100%;
}

.projects_inside_left .slider {
  border: 1px solid #ddd;
  box-shadow: 3px 4px 9px rgba(36, 36, 36, .15);
  border-radius: 10px;
  margin-bottom: 40px;
  position: relative;
}


.projects_inside_left .slider img {
  height: 400px;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}

/*-----------------------------------OTHER PROJECTS------------------------------------------------------*/
.other_post_container {
  margin-bottom: 20px;
}

.other_post_container > span {
  display: block;
  font-size: 20px;
  color: var(--light-mode-color-4);
  font-weight: 600;
  margin-bottom: 10px;
}

.project_item {
  display: flex;
  gap: 20px;
  margin-bottom: 13px;
  padding-bottom: 8px;
  border-bottom: 1px solid #E2E2E2;
}

.project_item:last-child {
  border-bottom: 1px solid transparent;
}

.project_item_image_wrapper {
  width: 80px;
  height: 80px;
}

.project_item_image_wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project_item_text_wrapper p {
  font-size: 18px;
  color: var(--light-mode-color-4);
  margin-bottom: 5px;
}

.project_item_text_wrapper span {
  font-size: 15px;
  color: #0071dc;
}

@media screen and (max-width: 992px) {
  .other_post_container {
    margin-top: 30px;
  }
}
</style>
