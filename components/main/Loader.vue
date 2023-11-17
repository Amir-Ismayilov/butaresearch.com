<template>
  <div class="preloader" v-if="loading">
    <img :src="settingsAll.contact[0].main_logo" alt="Preloader"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Loader",
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    ...mapGetters({
      settingsAll: "module/setting/getAllSettings"
    }),
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  }
}
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999;
}

img {
  max-width: 200px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
