<template>
  <section class="section_contacts_container">
    <BreadCrumb
      :BreadCrumbTitle="TitlePage"
      :BreadCrumbBefore="LinkBefore"
      :BreadCrumbAfter="LinkAfter"
    />

    <div class="main_page_body">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>{{ $t('have_question') }}</h2>
          </div>

          <div class="col-lg-4">
            <shortInfo/>
          </div>

          <div class="col-lg-8">
            <FormComponent class="form_component_wrapper"/>
          </div>
        </div>
      </div>
    </div>

    <div class="map_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12">
            <LeafletMap
              :latitude="settingAll.contact[0].latitude"
              :longitude="settingAll.contact[0].longitude"
              :address="settingAll.contact[0].address"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BreadCrumb from "../../components/BreadCrumb";
import FormComponent from "../../components/contact/FormComponent";
import shortInfo from "../../components/contact/shortInfo";
import LeafletMap from '../../components/LeafletMap'
import {mapGetters} from "vuex";

export default {
  name: "index",
  components: {
    BreadCrumb,
    FormComponent,
    shortInfo,
    LeafletMap,
  },
  data() {
    return {
      title: this.$t('contacts'),
      TitlePage: this.$t('contacts'),
      LinkBefore: this.$t('home_page'),
      LinkAfter: this.$t('contacts'),
    }
  },
  computed: {
    ...mapGetters({
      settingAll: "module/setting/getAllSettings",
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
.main_page_body h2 {
  font-size: 35px;
  font-weight: 600;
  margin-top: 0;
  line-height: 1.2;
  color: var(--light-mode-color-4);
  margin-bottom: 25px;
  text-align: center;
}

.map_wrapper {
  margin: 50px 0;
}



@media only screen and (max-width: 992px) {
  .login-box {
    margin-top: 40px;
  }

  .form_component_wrapper {
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 3px 4px 9px rgba(36, 36, 36, 0.15);
  }
}
</style>
