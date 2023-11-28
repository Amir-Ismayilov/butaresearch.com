<template>
  <section class="section_news_container">
    <BreadCrumb
      :BreadCrumbTitle="TitlePage"
      :BreadCrumbBefore="LinkBefore"
      :BreadCrumbAfter="LinkAfter"
    />

    <div class="main_page_body">
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-sm-6 col-md-6 col-lg-4"
            v-for="(newsItem, index) in paginatedNews"
            :key="index"
          >
            <BlogsItem
              :blogsId="newsItem.id"
              :blogsImage="newsItem.image"
              :blogsDescription="newsItem.title"
              :blogsContent="newsItem.description"
              :blogsPublishDate="newsItem.created_at"
            />
          </div>
        </div>

        <div class="pagination" v-if="blogsAll.length > 6">
          <button @click="changePage(page - 1)" :disabled="page <= 1">
            <img class="arrow" src="../../assets/icons/arrow/left-arrow.png" alt="arrow_left" />
          </button>

          <button v-if="page > 3" @click="goToPage(1)">1</button>
          <span v-if="page > 4">...</span>

          <button
            v-for="pageNumber in centeredPages"
            :key="pageNumber"
            @click="goToPage(pageNumber)"
            :class="{ active: pageNumber === page }"
          >
            {{ pageNumber }}
          </button>

          <span v-if="page < totalPages - 3">...</span>
          <button v-if="page < totalPages - 2" @click="goToPage(totalPages)">{{ totalPages }}</button>

          <button @click="changePage(page + 1)" :disabled="page >= totalPages">
            <img class="arrow" src="../../assets/icons/arrow/right-arrow.png" alt="arrow_right" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BreadCrumb from "../../components/BreadCrumb";
import BlogsItem from "../../components/blog/BlogsItem";
import { mapGetters } from "vuex";

export default {
  middleware: ["blogs-middleware"],
  name: "index",
  components: {
    BreadCrumb,
    BlogsItem,
  },
  data() {
    return {
      page: 1,
      itemsPerPage: 6,

      title:  this.$t('blogs'),
      TitlePage: this.$t('blogs'),
      LinkBefore: this.$t('home_page'),
      LinkAfter:  this.$t('blogs'),
    };
  },
  computed: {
    ...mapGetters({ blogsAll: "module/blog/getAllBlogs" }),

    totalPages() {
      return Math.ceil(this.blogsAll.length / this.itemsPerPage);
    },

    paginatedNews() {
      const startIndex = (this.page - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.blogsAll.slice(startIndex, endIndex);
    },

    centeredPages() {
      const start = Math.max(this.page - 2, 1);
      const end = Math.min(this.page + 2, this.totalPages);
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    },
  },
  methods: {
    changePage(newPage) {
      this.page = Math.min(Math.max(newPage, 1), this.totalPages);
    },

    goToPage(pageNum) {
      this.page = pageNum;
    },
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.arrow {
  width: 20px;
  height: 20px;
  object-fit: cover;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 7px;
  user-select: none;
  width: 40px;
  height: 40px;
  transition: 0.5s;
  color: var(--light-mode-color-1);
  border: 1px solid var(--light-mode-color-1);
  border-radius: 5px;
}

.pagination button:hover {
  color: #fff;
  background: var(--light-mode-color-1);
}

.pagination button.active {
  background-color: var(--light-mode-color-2);
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 5px;
}

.pagination button:disabled {
  display: none;
  cursor: not-allowed;
}
</style>
