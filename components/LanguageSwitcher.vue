<template>
  <div class="language_select">
    <!-- Кнопка для открытия/закрытия списка языков -->
    <button @click="toggleLanguageDropdown" :title="$t('choose_language')" class="p-0">
      <img :src="getFlagImage" alt="Flag"/>
    </button>

    <!-- Список языков -->
    <ul v-if="showLanguageDropdown" class="language-dropdown" id="language-dropdown">
      <nuxt-link :to="switchLocalePath('az')" @click="selectLanguage('az')">
        <li :class="{ active: $i18n.locale === 'az' }">
          <img src="../assets/icons/flags/azerbaijan.png" alt="az-flag"/>
          Azərbaycanca
        </li>
      </nuxt-link>
      <nuxt-link :to="switchLocalePath('en')" @click="selectLanguage('en')">
        <li :class="{ active: $i18n.locale === 'en' }">
          <img src="../assets/icons/flags/united-kingdom.png" alt="en-flag"/>
          English
        </li>
      </nuxt-link>
      <nuxt-link :to="switchLocalePath('ru')" @click="selectLanguage('ru')">
        <li :class="{ active: $i18n.locale === 'ru' }">
          <img src="../assets/icons/flags/russian.png" alt="ru-flag"/>
          Русский
        </li>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitcher.vue",
  data() {
    return {
      showLanguageDropdown: false, // Показывать или скрывать список языков
    };
  },
  computed: {
    // Вычисляемое свойство, возвращающее путь к изображению флага
    getFlagImage() {
      // В зависимости от текущего выбранного языка, верните путь к соответствующему изображению флага.
      // Например:
      if (this.$i18n.locale === 'az') {
        return require('../assets/icons/flags/azerbaijan.png');
      } else if (this.$i18n.locale === 'en') {
        return require('../assets/icons/flags/united-kingdom.png');
      } else if (this.$i18n.locale === 'ru') {
        return require('../assets/icons/flags/russian.png');
      }
      // Добавьте другие языки, если необходимо.
    },
  },
  methods: {
    toggleLanguageDropdown() {
      this.showLanguageDropdown = !this.showLanguageDropdown;
      if (this.showLanguageDropdown) {
        // Добавляем обработчик клика на документе
        document.addEventListener("click", this.closeLanguageDropdown);
      } else {
        // Удаляем обработчик клика при закрытии списка
        document.removeEventListener("click", this.closeLanguageDropdown);
      }
    },
    selectLanguage(locale) {
      // Выбор языка и автоматическое закрытие списка
      this.$i18n.locale = locale;
      this.showLanguageDropdown = false; // Закрыть список после выбора
    },
    closeLanguageDropdown(event) {
      // Закрываем список языков, если клик был вне этого компонента
      if (!this.$el.contains(event.target)) {
        this.showLanguageDropdown = false;
        // Удаляем обработчик клика при закрытии списка
        document.removeEventListener("click", this.closeLanguageDropdown);
      }
    },
  },
  created() {
    // Прослушиваем событие изменения языка
    this.$root.$on('languageChanged', () => {
      this.showLanguageDropdown = false; // Закрыть список при смене языка
    });
  },
};
</script>

<style scoped>
.language_select {
  position: relative;
}

.language_select button img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.language-dropdown {
  user-select: none;
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: -112px;
  right: -5px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  z-index: 10100;
}

.language-dropdown li {
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 6px;
  cursor: pointer;
  font-size: 10px;
  color: #000000;
}

.language-dropdown li img {
  width: 24px;
  height: 24px;
  object-fit: contain;
  transition: 0.5s;
}

.language-dropdown li img:hover {
  border-radius: 5px;
}

.language-dropdown li.active {
  background-color: var(--light-mode-color-1);
  color: #fff;
}
</style>
