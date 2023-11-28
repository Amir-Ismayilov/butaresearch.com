<template>
  <section class="section_completed_projects">
    <BreadCrumb
      :BreadCrumbTitle="TitlePage"
      :BreadCrumbBefore="LinkBefore"
      :BreadCrumbAfter="LinkAfter"
    />

    <div class="main_page_body">
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-sm-6 col-md-6 col-lg-3"
            v-for="(project, index) in paginatedProjects"
            :key="index"
          >
            <ProjectItemSlider
              :ProjectsId="project.id"
              :ProjectsTitle="project.title"
              :ProjectsDescription="project.description"
              :ProjectsImage="project.image"
              :ProjectsLink="project.link"
            />
          </div>
        </div>

        <div class="pagination" v-if="ProjectsAll.length > 8">
          <button @click="changePage(page - 1)" :disabled="page <= 1">
            <img class="arrow" src="../../assets/icons/arrow/left-arrow.png" alt="arrow_left">
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
            <img class="arrow" src="../../assets/icons/arrow/right-arrow.png" alt="arrow_right">
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import BreadCrumb from "../../components/BreadCrumb";
import ProjectItemSlider from "../../components/project/ProjectItemSlider";

export default {
  middleware: ['project-middleware'],
  name: "index",
  components: {
    BreadCrumb,
    ProjectItemSlider,
  },

  data() {
    return {
      page: 1,
      itemsPerPage: 8,
      title: this.$t('our_works'),
      TitlePage: this.$t('our_works'),
      LinkBefore: this.$t('home_page'),
      LinkAfter: this.$t('our_works'),
    };
  },
  computed: {
    ...mapGetters({ ProjectsAll: "module/project/getAllProjects" }),

    totalPages() {
      return Math.ceil(this.ProjectsAll.length / this.itemsPerPage);
    },

    paginatedProjects() {
      const startIndex = (this.page - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.ProjectsAll.slice(startIndex, endIndex);
    },

    centeredPages() {
      const start = Math.max(this.page - 2, 1);
      const end = Math.min(this.page + 2, this.totalPages);
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
  },

  methods: {
    changePage(newPage) {
      this.page = Math.min(Math.max(newPage, 1), this.totalPages);
    },

    goToPage(pageNum) {
      this.page = pageNum;
    }
  },
  head() {
    return {
      title: this.title,
    }
  }
}
</script>

<style scoped>
.section_completed_projects {

}

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
  background-color: var(--light-mode-color-1);
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
