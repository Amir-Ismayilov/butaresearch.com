<template>
  <section class="enter_app">
    <mainHeader/>
    <transition name="fade" mode="out-in">
      <Nuxt :key="$route.path"/>
    </transition>
    <mainFooter/>
  </section>
</template>

<script>
import mainHeader from "../components/main/mainHeader";
import mainFooter from "../components/main/mainFooter";

export default {
  middleware: ['menu-middleware'],
  name: "default.vue",
  components: {
    mainHeader,
    mainFooter,
  },
  methods: {
    fetchData() {
      this.$root.$emit('startLoading');
      this.$root.$emit('stopLoading');
    },
  },
}
</script>
