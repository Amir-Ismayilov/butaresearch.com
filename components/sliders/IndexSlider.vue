<template>
  <!-- Main slider section -->
  <div class="main_sliders_area">
    <div class="container-fluid">
      <div class="row">

        <!-- Swiper container -->
        <swiper :options="swiperOptions">

          <!-- Slides loop -->
          <swiper-slide v-for="(slider, index) in slidersAll" :key="index" class="my_swiper">

            <!-- Single slide content -->
            <div class="slider_wrapper" :style="{ 'background-image': `url(${slider.image})` }"
              style="background-position: center ">

              <!-- Slider main info -->
              <div class="slider_main_info">
                <h2>{{ slider.title }}</h2>
                <span v-html="slider.description"></span>
                <br>
                <nuxt-link :to="`/${$i18n.locale != 'az' ? $i18n.locale : '/'}` + slider.link">{{ $t('more_details') }}</nuxt-link>
                <nuxt-link :to="localePath('contacts')">{{ $t('contacts') }}</nuxt-link>
              </div>

            </div>
          </swiper-slide>

          <!-- Swiper controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "IndexSlider",
  data() {
    return {
      slides: [1, 2, 3, 4, 5],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 10000,
        },
        loop: true
      }
    }
  },
  computed: {
    ...mapGetters({
      slidersAll: "module/sliders/getAllSliders"
    }),
  },
}
</script>

<style scoped>
.slider_wrapper {
  height: calc(100vh - 115px);
  position: relative;
  background-size: cover;
}

.slider_main_info {
  position: absolute;
  left: 75px;
  bottom: 50%;
  width: 80%;
  transform: translate(0%, 52%);
}

.slider_main_info h2 {
  font-size: 60px;
  color: #ffffff;
  font-weight: 700;
  max-width: 780px;
  filter: drop-shadow(2px 4px 6px black);
}

.slider_main_info span {
  color: var(--light-mode-font-color-white);
  display: block;
  margin: 10px 0;
  font-size: 17px;
  font-weight: 400;
  filter: drop-shadow(2px 4px 6px black);
  ;
}

.slider_main_info a {
  text-transform: capitalize;
  padding: 10px 15px;
  color: #ffffff !important;
  background-color: var(--light-mode-color-1);
  border-radius: 50px;
  filter: drop-shadow(2px 4px 6px black);
}

.slider_main_info a:last-child {
  background-color: #ffc221;
  margin-left: 10px;
}

.my_swiper img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.animated-text {
  opacity: 0;
}


@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@media screen and (max-width: 768px) {
  .slider_main_info h2 {
    font-size: 35px;
    font-weight: 600;
  }

  .slider_main_info span {
    font-size: 17px;
    font-weight: 600;
  }
}

@media screen and (max-width: 576px) {
  .slider_main_info {
    bottom: calc(50% + 25px);
    left: 12px;
    width: calc(100% - 24px);
  }
}



  
</style>
