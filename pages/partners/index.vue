<template>
  <section class="section_partners">
    <BreadCrumb
      :BreadCrumbTitle="TitlePage"
      :BreadCrumbBefore="LinkBefore"
      :BreadCrumbAfter="LinkAfter"
    />

    <div class="main_page_body">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(partner, index) in partnersAll" :key="index">
            <div class="partners_wrapper">
              <a :href="partner.link" target="_blank">
                <div class="partners_imgage">
                  <img :src="partner.logo" :alt="partner.name">
                </div>

                <div class="partners_text">
                  <h4>{{ partner.name }}</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BreadCrumb from "../../components/BreadCrumb";
import {mapGetters} from "vuex";

export default {
  middleware: ["partners-middleware"],
  name: "index",
  components: {
    BreadCrumb,
  },
  data() {
    return {
      title: 'Partners',
      TitlePage: 'Partners',
      LinkBefore: 'Ana-sehife',
      LinkAfter: 'Partners',
    };
  },
  computed: {
    ...mapGetters({
      partnersAll: "module/partners/getAllPartners"
    })
  },
  head() {
    return {
      title: this.title,
    }
  }
}
</script>

<style scoped>
.partners_wrapper {
  border-radius: 5px;
  padding: 12px;
  border: 1px solid #ffffff;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  transition: all 0.5s;
  margin-bottom: 25px;
}

.partners_wrapper:hover {
  border: 1px solid #ffffff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 10px, rgba(0, 0, 0, 0.05) 0px 5px 5px;
  transition: all 0.5s;
  transform: translateY(-2px);
}

.partners_wrapper a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.partners_imgage {
  width: 120px;
}

.partners_imgage img {
  width: 100%;
  height: 70px;
  object-fit: contain;
}

.partners_text h4 {
  font-size: 22px;
  font-weight: 500;
  color: var(--light-mode-color-1);
  margin-top: 15px;
}
</style>
