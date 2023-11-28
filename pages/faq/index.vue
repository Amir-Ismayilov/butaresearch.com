<template>
  <section class="section_faq_container">
    <BreadCrumb
      :BreadCrumbTitle="TitlePage"
      :BreadCrumbBefore="LinkBefore"
      :BreadCrumbAfter="LinkAfter"
    />

    <div class="main_page_body">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12"  v-for="(faq,index) in faqsAll" :key="index">
          <FaqItem
            :question="faq.question"
            :answer="faq.answer"
          />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import BreadCrumb from "../../components/BreadCrumb";
import FaqItem from "../../components/faq/FaqItem";

export default {
  middleware: ["faq-middleware"],
  name: "index",
  components: {
    BreadCrumb,
    FaqItem
  },
  data() {
    return {
      title: this.$t('faq'),
      TitlePage: this.$t('faq'),
      LinkBefore: this.$t('home_page'),
      LinkAfter: this.$t('faq'),
    }
  },
  computed: {
    ...mapGetters({
      faqsAll: "module/faq/getAllFaqs"
    }),
  },
  // Page head() Title, description for SEO
  head() {
    return {
      title: this.title,
    }
  }
}
</script>

<style scoped>
</style>
