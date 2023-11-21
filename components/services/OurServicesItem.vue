<template>
  <figure class="our_services_item" v-if="ServicesStatus === 1">
    <img :src="ServicesImage" :alt="ServicesText">
    <figcaption>
      <nuxt-link :to="`/${$i18n.locale != 'az' ? $i18n.locale : '/'}` + `/service/` + ServicesId">{{ ServicesText
      }}</nuxt-link>
    </figcaption>
    <nuxt-link :to="`/${$i18n.locale != 'az' ? $i18n.locale : '/'}` + `/service/` + ServicesId">{{ $t('Detailed')
    }}</nuxt-link>
  </figure>
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
  min-height: 220px;
  border-bottom: 3px solid var(--light-mode-color-1);
}

.our_services_item a {
  font-weight: 600;
  text-transform: capitalize;
}

.our_services_item:hover {
  transform: translateY(-5px);
}

.our_services_item img {
  width: 70px;
  height: 70px;
  object-fit: contain;
}

.our_services_item a:first-child {
  color: var(--light-mode-color-4);
  font-size: 22px;
  font-weight: 600;
  line-height: normal;
}

@media screen and (max-width: 576px) {
  .our_services_item {
    align-items: center;
    gap: 20px;
    min-height: unset;
  }
}
</style>
