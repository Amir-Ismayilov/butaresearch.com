<template>
  <div class="short_blogs_area page_part">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title_info_wrapper">
            <h1>{{ $t('blogs') }}</h1>
          </div>
        </div>

        <div class="col-12 col-sm-12 col-md-6 col-lg-4" v-for="(bloq,index) in this.blogsAll.slice(-3)" :key="index">
          <BlogsItem :blogsId="bloq.id"
                     :blogsImage="bloq.image"
                     :blogsDescription="bloq.title"
                     :blogsContent="bloq.description"
                     :blogsPublishDate="bloq.created_at">
          </BlogsItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogsItem from "./BlogsItem";
import {mapGetters} from "vuex";

export default {
  name: "ShortBlogs",
  components: {
    BlogsItem,
  },
  computed: {
    ...mapGetters({
      blogsAll: "module/blog/getAllBlogs",
    }),
  },
}
</script>

<style scoped>

</style>
