<template>
  <div class="card_container">
    <div class="card_container_image">
      <img :src="ProjectsImage" :alt="ProjectsTitle">
    </div>

    <div class="card_container_content">
      <div class="card_container_inside">
        <nuxt-link :to="`/${$i18n.locale!='az' ? $i18n.locale : '/' }`+`/project/` +  ProjectsId">
          {{ ProjectsTitle }}
        </nuxt-link>

        <nuxt-link :to="`/${$i18n.locale!='az' ? $i18n.locale : '/' }`+`/project/` +  ProjectsId">
          {{ $t('Detailed') }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectItemSlider",
  props: {
    ProjectsId: Number,
    ProjectsImage: String,
    ProjectsTitle: String,
    ProjectsDescription: String,
  },
}
</script>

<style scoped>
.card_container {
  position: relative;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 10px 0 80px 0;
}

.card_container_image {
  width: 100%;
}

.card_container_image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}


.card_container_content {
  position: absolute;
  z-index: 10;
  bottom: 40px;
  width: 100%;
  padding: 0 20px;
}

.card_container_inside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px 15px;
  background: #fff;
  margin-bottom: -95px;
  border: 1px solid #ddd;
  box-shadow: 3px 4px 9px rgba(36, 36, 36, .15);
}

.card_container_content a:first-child {
  font-size: 22px;
  font-weight: 600;
  color: var(--light-mode-color-4);
  margin-bottom: 5px;
}

.card_container_inside a:last-child {
  text-transform: capitalize;
}
</style>
