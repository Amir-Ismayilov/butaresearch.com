<template>
  <!-- Services Inside -->
  <section class="services_inside">
    <BreadCrumb
      :BreadCrumbTitle="getServices.name"
      :BreadCrumbBefore="LinkBefore"
      :BreadCrumbAfter="getServices.name"
    />

    <div class="main_page_body">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-8">
            <div
              class="slider"
              style="position: relative"
              v-if="getServices.images !== null"
            >
              <swiper :options="swiperOptions">
                <swiper-slide
                  v-for="(service, index) in getServices.images"
                  :key="index"
                >
                  <img :src="AddUrl + service" alt="service_images" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
              <div
                class="swiper-button-next"
                v-if="getServices.images.length > 1"
              ></div>
              <div
                class="swiper-button-prev"
                v-if="getServices.images.length > 1"
              ></div>
            </div>

            <div class="services_inside_main_text">
              <h1>{{ getServices.name }}</h1>

              <div v-html="getServices.description"></div>
            </div>

            <div class="services_inside_video">
              <div v-for="(videoItem, index) in getServices.video" :key="index">
                <video
                  :src="AddUrl + videoItem.download_link"
                  title="Play"
                  width="100%"
                  loop
                  autoplay
                  controls
                ></video>
              </div>
            </div>

            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
              <div class="services_inside_form">
                <h1>{{ $t("service_offer") }}</h1>
                <div class="form_component_wrapper">
                  <FormComponent />
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <div class="projects_inside_right">
              <div class="other_post_container">
                <span>{{ $t("other_service") }}</span>
                <article
                  class="project_item"
                  v-for="(service, index) in servicesAll"
                  :key="index"
                >
                  <div class="project_item_image_wrapper">
                    <nuxt-link
                      :to="
                        `/${$i18n.locale != 'az' ? $i18n.locale : '/'}` +
                        `/service/` +
                        service.id
                      "
                    >
                      <img :src="service.image" :alt="service.name" />
                    </nuxt-link>
                  </div>

                  <div class="project_item_text_wrapper">
                    <nuxt-link
                      :to="
                        `/${$i18n.locale != 'az' ? $i18n.locale : '/'}` +
                        `/service/` +
                        service.id
                      "
                    >
                      <p>{{ service.name }}</p>
                    </nuxt-link>
                  </div>
                </article>
              </div>
              <shortInfo class="sticky-column" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FormComponent from "~/components/contact/FormComponent";
import shortInfo from "../../components/contact/shortInfo";

import BreadCrumb from "../../components/BreadCrumb";
import { mapGetters } from "vuex";

export default {
  // name: "_id.vue",
  components: {
    BreadCrumb,
    FormComponent,
    shortInfo,
  },
  data() {
    return {
      AddUrl: process.env.ASSET_URL,
      LinkBefore: this.$t("home_page"),

      swiperOptions: {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
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
      },
    };
  },
  async asyncData({ store, route }) {
    let response = await store.dispatch(
      "module/service/getBlogsByIdApi",
      route.params.id
    );
    return { getServices: response };
  },
  computed: {
    ...mapGetters({
      servicesAll: "module/service/getAllServices",
    }),
  },
  head() {
    return {
      title: this.getServices.meta_title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.getServices.meta_description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.getServices.meta_keyword,
        },
      ],
    };
  },
};
</script>

<style scoped>
.services_inside_main_text {
  margin-bottom: 25px;
}

.services_inside_main_text h1 {
  font-size: 26px;
  margin-bottom: 15px;
  font-weight: 600;
  color: var(--light-mode-color-4);
}

.form_component_wrapper {
  padding: 20px 0;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 3px 4px 9px rgba(36, 36, 36, 0.15);
}

.services_inside_form {
  height: 100%;
  display: flex;
  gap: 12px;
  flex-direction: column;
  justify-content: space-between;
}

.services_inside_form h1 {
  font-size: 28px;
  color: #fff;
  font-weight: 500;
  padding: 10px;
  background-color: var(--light-mode-color-2);
  border-radius: 5px;
}

.slider {
  border: 1px solid #ddd;
  box-shadow: 3px 4px 9px rgba(36, 36, 36, 0.15);
  border-radius: 10px;
  margin-bottom: 40px;
}

.slider img {
  height: 400px;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}

video {
  border-radius: 5px;
  margin-bottom: 12px;
}

/*-----------------------------------OTHER SERVICES------------------------------------------------------*/
.other_post_container {
  margin-bottom: 20px;
}

.other_post_container > span {
  display: block;
  font-size: 20px;
  color: var(--light-mode-color-4);
  font-weight: 600;
  margin-bottom: 20px;
}

.project_item {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 13px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e2e2e2;
}

.project_item:last-child {
  border-bottom: 1px solid transparent;
}

.project_item_image_wrapper {
  width: 50px;
  height: 50px;
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

.projects_inside_right {
  height: 100%;
}

.sticky-column {
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
}

.login-box {
  padding: 0 12px;
}

@media screen and (max-width: 992px) {
  .other_post_container {
    margin-top: 30px;
  }
}

@media screen and (max-width: 992px) {
  .contact_info {
    margin-top: 40px;
  }
}
</style>
