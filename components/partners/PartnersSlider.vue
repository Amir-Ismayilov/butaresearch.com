<template>
  <div class="partners_slider page_part">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title_info_wrapper">
            <h1>{{ $t('partners') }}</h1>
          </div>
        </div>

        <swiper :options="swiperOptions">
          <swiper-slide v-for="(partner, index) in partnersAll" :key="index" class="col-6 col-sm-6 col-md-4 col-lg-2">
            <a :href="partner.link" target="_blank">
              <div class="partners_image_wrapper">
                <img :src="partner.logo" :alt="partner.text">
              </div>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "PartnersSlider",
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 3000,
        },
        breakpoints: {
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        },
      }
    };
  },
  computed: {
    ...mapGetters({
      partnersAll: "module/partners/getAllPartners"
    }),
  },
}
</script>

<style scoped>
.partners_slider {
}

.swiper-slide {
  padding: 10px 0;
}

.partners_image_wrapper {
  margin: auto 5px;
  border-radius: 5px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  transition: 0.5s;
  box-shadow: 0 2px 10px 0 rgb(8 18 109 / 10%);
}

.partners_image_wrapper:hover {
  transform: translateY(-5px);
}

.partners_image_wrapper img {
  padding: 15px 0;
  max-width: 125px;
}
</style>
