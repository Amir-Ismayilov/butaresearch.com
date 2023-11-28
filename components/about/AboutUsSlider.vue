<template>
  <div class="synced_slider">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(slider, index) in aboutAll.image" :key="index" class="col-6 col-sm-6 col-md-4 col-lg-2">
        <img :src="AddUrl + slider" alt="about_image">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AboutUsSlider",
  data() {
    return {
      AddUrl: process.env.ASSET_URL,
      swiperOptions: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        autoplay: {
          delay: 3000,
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
    };
  },
  computed: {
    ...mapGetters({
      aboutAll: "module/about/getAllAbouts"
    })
  },
}
</script>

<style scoped>
.synced_slider img {
  height: 300px;
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
}

@media screen and (max-width: 992px) {
  .synced_slider {
    margin-top: 40px;
  }

  .synced_slider img {
    height: 250px;
  }
}
</style>
