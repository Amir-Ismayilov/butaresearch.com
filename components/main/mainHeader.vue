<template>
  <section class="main_header_section">
    <div class="top_header">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8 col-lg-6">
            <div class="top_header_contact_info">
              <div class="email_group">
                <a :href="`mailto:` + settingAll.contact[0].email">{{ settingAll.contact[0].email }}</a>
                <br>
                <a :href="`mailto:` + settingAll.contact[0].email_2">{{ settingAll.contact[0].email_2 }}</a>
              </div>

              <div class="phone_group">
                <a  :href="`tel:` + settingAll.contact[0].phone">{{ settingAll.contact[0].phone }}</a>
                <br class="number_separator">
                <a :href="`tel:` + settingAll.contact[0].phone_2">{{ settingAll.contact[0].phone_2 }}</a>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 col-lg-6">
            <div class="site_config">
              <div class="site_social_network">
                <ul>
                  <li v-for="(socialLink, index) in settingAll.social_link" :key="index" v-if="socialLink.status === 1">
                    <a :href="socialLink.link" target="_blank"><i :class="socialLink.icon"></i></a>
                  </li>
                </ul>
              </div>

              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main_header" :class="{ fixed: isHeaderFixed }">
      <div class="container">
        <div class="row">
          <header>
            <div class="logo_main_wrapper">
              <nuxt-link :to="localePath('index')">
                <img :src="settingAll.contact[0].main_logo" alt="main_logo">

                <h3>Buta <br> Research</h3>
              </nuxt-link>
            </div>

            <div class="menu_all_components">
              <div class="header_main_list">
                <nav>
                  <ul>
                    <li class="header_main_item">
                      <nuxt-link :to="localePath('index')">{{ $t('home_page') }}</nuxt-link>
                    </li>

                    <li class="header_main_item">
                      <ul class="menu">
                        <li class="menu-item">
                          <div class="menu-link">{{ $t('our_company') }}</div>
                          <div class="dropdown">
                            <ul>
                              <li>
                                <nuxt-link :to="localePath('about')">{{ $t('about_us') }}</nuxt-link>
                              </li>

                              <li>
                                <nuxt-link :to="localePath('partners')">{{ $t('partners') }}</nuxt-link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li class="header_main_item">
                      <ul class="menu">
                        <li class="menu-item">
                          <nuxt-link :to="localePath('service')">{{ $t('services') }}</nuxt-link>
                          <div class="dropdown">
                            <ul>
                              <li v-if="service.status === 1" v-for="(service, index) in servicesAll" :key="index">
                                <nuxt-link
                                  :to="`/${$i18n.locale != 'az' ? $i18n.locale : '/'}` + `/service/` + service.id">{{
                                    service.name }}
                                </nuxt-link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li class="header_main_item">
                      <nuxt-link :to="localePath('project')">{{ $t('our_works') }}</nuxt-link>
                    </li>

                    <li class="header_main_item">
                      <nuxt-link :to="localePath('blog')">{{ $t('blogs') }}</nuxt-link>
                    </li>

                    <li class="header_main_item">
                      <nuxt-link :to="localePath('faq')">{{ $t('faq') }}</nuxt-link>
                    </li>

                    <li class="header_main_item">
                      <nuxt-link :to="localePath('contacts')">{{ $t('contacts') }}</nuxt-link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class="mobile_nav">
                <button class="hamburger" @click="toggleMenu">
                  <div :class="['hamburger-inner', { 'open': isOpen }]"></div>
                </button>

                <transition name="slide">
                  <div v-if="isOpen" class="menu_phone">
                    <div class="logo_main_wrapper">
                      <nuxt-link :to="localePath('index')">
                        <img :src="settingAll.contact[0].main_logo" alt="main_logo">
                      </nuxt-link>
                    </div>

                    <ul>
                      <li>
                        <nuxt-link :to="localePath('index')">{{ $t('home_page') }}</nuxt-link>
                      </li>

                      <li class="header_main_item">
                        <ul class="menu">
                          <li class="menu-item">
                            <div class="menu-link" @click="toggleMenuMobile">
                              {{ $t('our_company') }}
                            </div>
                            <div class="dropdown" v-if="isMenuOpen">
                              <ul>
                                <li>
                                  <nuxt-link :to="localePath('about')">
                                    {{ $t('about_us') }}
                                  </nuxt-link>
                                </li>
                                <li>
                                  <nuxt-link :to="localePath('partners')">
                                    {{ $t('partners') }}
                                  </nuxt-link>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </li>

                      <li class="header_main_item">
                        <ul class="menu">
                          <li class="menu-item">
                            <div class="menu-link" @click="toggleMenuMobile">
                              {{ $t('services') }}
                            </div>
                            
                            <div class="dropdown" v-if="isMenuOpen">
                              <ul>
                                <li>
                                  <nuxt-link :to="localePath('service')">{{ $t('services_all') }}</nuxt-link>
                                </li>

                                <li v-if="service.status === 1" v-for="(service, index) in servicesAll" :key="index">
                                  <nuxt-link
                                    :to="`/${$i18n.locale != 'az' ? $i18n.locale : '/'}` + `/service/` + service.id">{{
                                      service.name }}
                                  </nuxt-link>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <nuxt-link :to="localePath('project')">{{ $t('our_works') }}</nuxt-link>
                      </li>

                      <li>
                        <nuxt-link :to="localePath('blog')">{{ $t('blogs') }}</nuxt-link>
                      </li>

                      <li>
                        <nuxt-link :to="localePath('faq')">{{ $t('faq') }}</nuxt-link>
                      </li>

                      <li>
                        <nuxt-link :to="localePath('contacts')">{{ $t('contacts') }}</nuxt-link>
                      </li>

                      <li>
                        <LanguageSwitcher />
                      </li>
                    </ul>
                  </div>
                </transition>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import LanguageSwitcher from '../../components/LanguageSwitcher.vue';

export default {
  name: "mainHeader",
  components: {
    LanguageSwitcher
  },
  data() {
    return {
      isOpen: false,
      isMenuOpen: false,
      isHeaderFixed: false,
    }
  },
  computed: {
    ...mapGetters({
      settingAll: "module/setting/getAllSettings",
      servicesAll: "module/service/getAllServices",
    }),
  },
  watch: {
    $route() {
      this.isOpen = false;
      document.body.style.overflow = '';
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      document.body.style.overflow = this.isOpen ? 'hidden' : '';
    },

    toggleMenuMobile() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    handleScroll() {
      if (window.scrollY > 150 && !this.isHeaderFixed) {
        this.isHeaderFixed = true;
      } else if (window.scrollY <= 150 && this.isHeaderFixed) {
        this.isHeaderFixed = false;
      }
    },
  },

  mounted() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      item.addEventListener('mouseover', function () {
        const dropdown = this.querySelector('.dropdown');
        dropdown.style.maxHeight = '700px';
        dropdown.style.opacity = '1';
      });
      item.addEventListener('mouseout', function () {
        const dropdown = this.querySelector('.dropdown');
        dropdown.style.maxHeight = '0';
        dropdown.style.opacity = '0';
      });
    });
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style scoped>
.top_header {
  padding: 8px 0;
  background-color: var(--light-mode-color-1);
}

.top_header_contact_info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
}

.top_header_contact_info a {
  color: #fff;
}

.email_group {
  border-right: 1px solid #fff;
  padding-right: 10px;
  width: min-content;
}

.phone_group {
  padding-left: 8px;
}

.site_config {
  display: flex;
  gap: 30px;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}

.site_social_network ul {
  display: flex;
  gap: 15px;
}


.site_social_network ul a {
  color: #fff;
  transition: 0.3s;
  font-size: 18px;
}

.site_social_network ul a:hover {
  filter: drop-shadow(2px 4px 6px black);
}

/*Dropdown menu*/
.menu-item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-link {
  font-size: 16px;
  text-transform: capitalize;
  cursor: pointer;
  text-decoration: none;
}

.dropdown {
  position: absolute;
  top: 160%;
  left: 0;
  z-index: 99;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 211px;
}

.dropdown li {
  border-left: 2px solid var(--light-mode-color-1);
  border-bottom: 1px solid #e1e1e1;
}

.dropdown li a {
  padding: 8px 12px;
  font-size: 14px !important;
  opacity: 0.8;
}

.dropdown li a:hover {
  opacity: 1;
  transform: translateX(10px);
}


/*---------------------------------------------------------------------------------------------------*/
.social_media_container li {
  display: flex;
  border-right: 1px solid rgba(255, 255, 255, 0.7);
  padding: 0 10px;
}

.social_media_container li:last-child {
  border-right: unset;
}

.social_media_wrapper a {
  font-size: 15px;
  color: var(--grey-font-color);
}

.search_container input {
  height: 30px;
  width: 100%;
  padding-left: 10px;
  font-size: 12px;
  color: var(--dark-font-color);
  background: rgba(255, 255, 255, 0.7);
}

.main_header {
  padding: 6px 0;
  background: var(--light-mode-color-3);
  transition: top 0.8s ease;
}

.main_header header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header_clubs_logo img {
  width: 100%;
  display: block;
  object-fit: contain;
  height: auto;
  max-width: 42px;
  margin: 0 auto;
}

.logo_main_wrapper img {
  height: 75px;
  object-fit: contain;
  filter: drop-shadow(2px 2px 3px black);
}

.logo_main_wrapper h3 {
  margin-top: 4px;
}

.logo_main_wrapper a {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
}

.header_main_list nav>ul {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

.header_main_item {
  position: relative;
}

.header_main_item:after {
  position: absolute;
  content: '';
  left: 0;
  bottom: -5px;
  width: 0;
  background-color: var(--light-mode-color-1);
  height: 1px;
  transition: 0.3s;
}

.header_main_item:hover:after {
  width: 100%;
}

.header_main_list nav>ul .header_main_item a {
  display: block;
  font-size: 15px;
  text-transform: capitalize;
  cursor: pointer;
}

.header_main_contact div:first-child {
  padding: 5px 10px;
  background-color: #ffffff;
  border-radius: 5px 0 0 5px !important;
}

.header_main_contact div:first-child a {
  color: #000;
}

.header_main_contact div:last-child {
  padding: 5px 10px;
  background-color: var(--light-mode-color-2);
  border-radius: 0 5px 5px 0;
}

.main_header.fixed {
  position: fixed;
  top: -2px;
  left: 0;
  width: 100%;
  z-index: 99999;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.8s ease;
}


/*Hamburger Menu*/
.hamburger {
  position: absolute;
  z-index: 9999;
  width: 35px;
  padding: 0;
}

.hamburger-inner {
  position: relative;
  width: 100%;
  height: 2px;
  background-color: var(--light-mode-color-1);
  transition: background-color 0.3s ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--light-mode-color-1);
  transition: transform 0.3s ease;
}

.hamburger-inner::before {
  top: -10px;
}

.hamburger-inner::after {
  bottom: -10px;
}

.hamburger-inner.open {
  background-color: transparent;
}

.hamburger-inner.open::before {
  transform: translateY(10px) rotate(45deg);
}

.hamburger-inner.open::after {
  transform: translateY(-10px) rotate(-45deg);
}

.menu_phone {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0 0 5px 5px;
  min-height: 50vh;
  background-color: #f7f7f7;
  z-index: 1005;
}

.menu_phone ul {
  text-align: center;
}

.menu_phone>ul>li {
  margin: 6px 0;
}

.menu_phone img {
  margin-bottom: 20px;
}

.slide-enter-active,
.slide-leave-active {
  transition: all .3s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}

.mobile_nav {
  width: 35px;
}


/*--------------------Media Query-----------------------*/
@media screen and (min-width: 993px) {
  .mobile_nav {
    display: none;
  }
}

@media screen and (max-width: 1390px) {
  .header_main_contact {
    display: none;
  }
}

@media screen and (max-width: 992px) {
  .dropdown li {
    padding: 4px;
    background: var(--light-mode-color-1);
  }

  .dropdown li:last-child {
    border-bottom: unset;
  }

  .header_main_contact,
  .header_main_list {
    display: none;
  }

  .header_main_item:after {
    display: none;
  }

  .dropdown {
    text-align: center;
    position: absolute;
    top: 100%;
    left: unset;
    background-color: #08365f;
    display: none;
    opacity: unset;
    min-width: unset;
    border: 1px solid #aaaaaa;
  }

  .dropdown ul li a {
    color: var(--light-mode-font-color-white);
    opacity: unset;
    margin-bottom: 0 !important;
  }

  .menu-item:hover .dropdown {
    display: block;
    min-width: 160px;
  }

  .menu-item:hover .dropdown ul {
    max-height: 300px;
    overflow-y: scroll;
    border-radius: 5px;
  }

  .menu-item:hover .dropdown {
    border-radius: 5px;
  }
}


@media screen and (max-width: 768px) {
  .top_header_contact_info {
    justify-content: center;
  }

  .site_config {
    margin-top: 8px;
    justify-content: space-evenly;
  }
}


@media screen and (max-width: 410px) {
  .top_header_contact_info {
    flex-direction: column;
  }

  .email_group {
    border-right: unset;
    padding-right: unset;
  }

  .phone_group {
    padding-left: unset;
  }

  .phone_group a:first-child::after {
    content: "&";
    margin-left: 7px;
    margin-right: 1px;
  }

  .number_separator {
    display: none;
  }

}
</style>
