<template>
  <div class="our_services_item" v-if="ServicesStatus === 1">
    <img :src="ServicesImage" :alt="ServicesText">
    <p>
      <nuxt-link :to="`/${$i18n.locale!='az' ? $i18n.locale : '/' }`+`/service/` + ServicesId">{{ ServicesText }}</nuxt-link>
    </p>
    <nuxt-link :to="`/${$i18n.locale!='az' ? $i18n.locale : '/' }`+`/service/` + ServicesId">{{ $t('Detailed') }}</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "OurServices",
  props: {
    ServicesId: Number,
    ServicesText: String,
    ServicesImage: String,
    ServicesStatus: Number
  }
}
</script>

<style scoped>
.our_services_item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  border-radius: 15px;
  margin-bottom: 30px;
  border: 1px solid #DDDDDD;
  box-shadow: 3px 4px 9px rgba(36, 36, 36, 0.15);
  transition: 0.5s;
  min-height: 250px;
  border-bottom: 3px solid var(--light-mode-color-1);
}

.our_services_item a {
  text-transform: capitalize;
}

.our_services_item:hover {
  transform: translateY(-5px);
}

.our_services_item img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.our_services_item a:first-child {
  color: var(--light-mode-color-4);
  font-size: 22px;
  line-height: normal;
}
</style>
