<template>
  <section class="section_main_footer">
    <footer>
      <div class="container hr">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="footer_list_wrapper logo_main_wrapper">
              <nuxt-link :to="localePath('index')">
                <div class="image_footer_wrapper">
                  <img
                    :src="settingAll.contact[0].footer_logo"
                    alt="main_logo"
                  />
                  <h3>
                    Buta <br />
                    Research
                  </h3>
                </div>

                <div class="logo_main_wrapper_text">
                  {{ settingAll.contact[0].short_description }}
                </div>
              </nuxt-link>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="footer_list_wrapper">
              <h1>{{ $t("site_map") }}</h1>
              <ul>
                <li>
                  <nuxt-link :to="localePath('index')">{{
                    $t("home_page")
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('about')">{{
                    $t("about_us")
                  }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('service')">{{
                    $t("services")
                  }}</nuxt-link>
                </li>

                <li>
                  <nuxt-link :to="localePath('blog')">{{
                    $t("blogs")
                  }}</nuxt-link>
                </li>

                <li class="header_main_item">
                  <nuxt-link :to="localePath('project')">{{
                    $t("our_works")
                  }}</nuxt-link>
                </li>
                <li class="header_main_item">
                  <nuxt-link :to="localePath('faq')">{{ $t("faq") }}</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="localePath('contacts')">{{
                    $t("contacts")
                  }}</nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="footer_list_wrapper">
              <h1>{{ $t("blogs") }}</h1>
              <ul>
                <li v-for="blogs in blogsAll.slice(-3)" :key="blogs.id">
                  <nuxt-link :to="`/blog/` + blogs.id">
                    <img :src="AddUrl + blogs.images[0]" :alt="blogs.title" />
                    {{ blogs.title }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-3">
            <div class="footer_list_wrapper">
              <h1>{{ $t("subscribe") }}</h1>
              <p>{{ $t("subscribe_short_info") }}</p>
              <div class="subscribe-area">
                <form class="form-subscribe" @submit.prevent="subscribeSubmit">
                  <input
                    v-model="email"
                    type="email"
                    id="email"
                    class="input-subscribe"
                    name="email"
                    required=""
                    @blur="$v.email.$touch()"
                    :placeholder="$t('email_placeholder')"
                  />
                  <!-- Error email -->
                  <span v-if="$v.email.$error" class="error-text-2">
                    <span v-if="!$v.email.required"
                      >* {{ $t("field_is_mandatory") }}</span
                    >
                    <span v-else-if="!$v.email.email"
                      >* {{ $t("enter_valid_data") }}</span
                    >
                  </span>

                  <button type="submit">
                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <div class="footer_copyright">
      <div class="container">
        <div class="row">
          <p>
            {{ current_year }} ©
            <a href="https://alfasoft.az/">alfasoft.az</a> |
            {{ $t("all_rights_reserved") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";

import { mapGetters } from "vuex";

export default {
  name: "mainFooter",
  validations: {
    email: { required, email },
  },
  data() {
    return {
      AddUrl: process.env.ASSET_URL,
      email: "",
      submitted: false,
      current_year: "",
    };
  },
  computed: {
    ...mapGetters({
      settingAll: "module/setting/getAllSettings",
      blogsAll: "module/blog/getAllBlogs",
    }),
  },

  mounted() {
    this.getCurrentYear();
  },

  methods: {
    getCurrentYear() {
      this.current_year = new Date().getFullYear();
    },

    subscribeSubmit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.$toast.error(this.$t("fill_all_fields_correctly."));
        return;
      }

      this.$axios
        .$post("/subscribe", {
          email: this.email,
        })
        .then((response) => {
          (this.email = ""), this.$v.$reset();
          this.$toast.success(this.$t("request_sent_successfully."));
        })
        .catch((err) => {
          if (err.response.status === 400) {
            this.$toast.error(this.$t("error_Invalid_request."));
          } else if (err.response.status === 500) {
            this.$toast.error(this.$t("server_error."));
          }
        });
    },
  },
};
</script>

<style scoped>
.section_main_footer {
  background-color: var(--light-mode-color-1);
}

.image_footer_wrapper {
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 15px;
}

.logo_main_wrapper img {
  height: 95px;
  object-fit: contain;
  filter: drop-shadow(2px 2px 3px black);
}

.logo_main_wrapper_text {
  margin-top: 10px;
  color: var(--grey-font-color);
}

.hr {
  padding-top: 50px;
  padding-bottom: 30px;
  border-bottom: 1px solid #fff;
}

.section_main_footer .footer_list_wrapper:last-child p {
  color: var(--light-mode-color-3);
  margin: 15px 0;
}

.footer_list_wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
}

.footer_list_wrapper h1 {
  font-size: 28px;
  margin-bottom: 5px;
  color: var(--light-mode-color-4);
  line-height: 1.2;
}

.footer_list_wrapper li {
  padding: 3px 0;
}

.footer_list_wrapper li a {
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--grey-font-color);
}

.footer_list_wrapper li a img {
  width: 65px;
  height: 65px;
  object-fit: contain;
  background: #ffffff;
}

/*Subscribe Area*/
.subscribe-area {
  width: 100%;
  margin: 0 auto;
}

.subscribe-area .form-subscribe {
  position: relative;
  width: 100%;
}

.subscribe-area .form-subscribe button {
  position: absolute;
  right: 7px;
  top: 6px;
  text-transform: uppercase;
  padding: 8px 10px;
  background: green;
  border: none;
  font-size: 12px;
  color: white;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.subscribe-area .form-subscribe button:focus {
  outline: none;
}

.subscribe-area .input-subscribe {
  padding: 12px 100px 12px 20px;
  background: #eee;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #555;
  width: 100%;
  box-sizing: border-box;
}

.subscribe-area .input-subscribe:focus {
  outline: none;
}

/*Copyright Area*/
.footer_copyright {
  padding: 15px 0;
  background-clor: var(--light-mode-color-2);
}

.footer_copyright a {
  border-bottom: 1px solid #ffffff;
}

.footer_copyright a:hover {
  color: #ffc221;
  border-bottom: 1px solid #ffc221;
}

.footer_copyright p {
  text-align: center;
  color: var(--light-mode-font-color-white);
}

.fa-paper-plane {
  font-size: 20px;
}

@media only screen and (max-width: 576px) {
  .logo_main_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer_list_wrapper {
    align-items: flex-start;
    justify-content: unset;
    margin-bottom: 15px;
  }
}
</style>
