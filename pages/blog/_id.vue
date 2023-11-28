<template>
  <!-- Blogs Inside -->
  <section class="blogs_inside">
    <BreadCrumb :BreadCrumbTitle="getBlogs.title"
                :BreadCrumbBefore="LinkBefore" 
                :BreadCrumbAfter="getBlogs.title" />

    <div class="main_page_body">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-8">
            <div class="blogs_inside_left">
              <div class="slider">
                <swiper :options="swiperOptions">
                  <swiper-slide v-for="(blog, index) in getBlogs.images" :key="index">
                    <img :src="AddUrl + blog" alt="about_image">
                  </swiper-slide>
                  <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <div class="swiper-button-next" v-if="getBlogs.images.length > 1"></div>
                <div class="swiper-button-prev" v-if="getBlogs.images.length > 1"></div>
              </div>

              <div class="main_text">
                <div class="blogs_short_info">
                  <img src="../../assets/icons/main/date.png" alt="date-icon">
                  <span>{{ getBlogs.created_at }}</span>
                </div>

                <div class="text">
                  <h1>{{ getBlogs.title }}</h1>
                  <div v-html="getBlogs.description"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <div class="blogs_inside_right">
              <shortInfo />
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-12 col-lg-12">
            <div class="blogs_other_wrapper">
              <div class="row">

                <div class="col-12">
                  <div class="title_info_wrapper">
                    <h1>{{ $t('other_news') }}</h1>
                  </div>
                </div>

                <div class="col-12 col-sm-12 col-md-6 col-lg-4" v-for="blogs in limitedNews" :key="news.id">
                  <BlogsItem :blogsId="blogs.id" :blogsImage="blogs.image" :blogsDescription="blogs.title"
                    :blogsContent="blogs.description" :blogsPublishDate="blogs.created_at">
                  </BlogsItem>
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
import { mapGetters } from "vuex";
import BreadCrumb from "../../components/BreadCrumb";
import shortInfo from "../../components/contact/shortInfo";
import blog from "../../pages/blog/index";
import BlogsItem from "../../components/blog/BlogsItem";


export default {
  components: {
    BreadCrumb,
    shortInfo,
    BlogsItem
  },
  data() {
    return {
      AddUrl: process.env.ASSET_URL,
      current_index: 0,
      hideFooter: false,
      LinkBefore: this.$t('home_page'),
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
  head() {
    return {
      title: this.getBlogs.meta_title,
      meta: [
        { hid: 'description', name: 'description', content: this.getBlogs.meta_description },
        { hid: 'keywords', name: 'keywords', content: this.getBlogs.meta_keyword }
      ]
    }
  },
  computed: {
    ...mapGetters({ news: "module/blog/getAllBlogs" }),
    limitedNews() {
      return this.shuffleArray(this.news.filter(newsItem => newsItem.id !== this.getBlogs.id)).slice(0, 3);
    }
  },
  async asyncData({ store, route }) {
    await store.dispatch('module/blog/getBlogsArray');
    let response = await store.dispatch('module/blog/getBlogsByIdApi', route.params.id);
    return { getBlogs: response };
  },
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
  },
}
</script>

<style scoped>
/*-----------------------------------BLOGS INSIDE LEFT------------------------------------------------------*/
.blogs_other_wrapper {
  margin-top: 60px;
}

.blogs_inside_left {
  height: 100%;
}

.blogs_inside_left .slider {
  border: 1px solid #ddd;
  box-shadow: 3px 4px 9px rgba(36, 36, 36, .15);
  border-radius: 10px;
  margin-bottom: 40px;
  position: relative;
}

.blogs_inside_left .slider img {
  height: 400px;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.main_text .text h1 {
  font-size: 26px;
  color: var(--light-mode-color-4);
  margin-bottom: 5px;
  font-weight: 600;
}

.blogs_short_info {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}

.blogs_short_info img {
  height: 25px;
  width: 25px;
}

.blogs_short_info span {
  font-size: 15px;
  color: var(--light-mode-color-4);
  font-weight: 500;
  margin-top: 5px;
}


/*-----------------------------------BLOGS INSIDE RIGHT ------------------------------------------------------*/
.blogs_inside_right {
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
}

/*-----------------------------------OTHER BLOGS --------------------------------------------------------------*/

@media screen and (max-width: 992px) {
  .contact_info {
    margin-top: 30px;
  }

  .main_text text {
    margin-bottom: 30px;
  }
}
</style>
