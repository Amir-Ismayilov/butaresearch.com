<template>
  <div class="blogs_wrapper">
    <nuxt-link :to="`/${$i18n.locale!='az' ? $i18n.locale : '/' }`+`/blog/` + blogsId">
      <div class="blogs_publish_date">
        <span>{{ blogsPublishDate ? blogsPublishDate : "0000-00-00" }}</span>
      </div>

      <div class="blogs_image_container">
        <img :src="blogsImage" :alt="blogsId">
      </div>

      <div class="blogs_description_container">
        <p v-html="blogsDescription"></p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "BlogsItem",
  props: {
    blogsId: Number,
    blogsImage: String,
    blogsDescription: String,
    blogsContent: String,
    blogsPublishDate: String,
  }
}
</script>

<style scoped>
.blogs_wrapper a {
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: 350px;
  margin-bottom: 25px;
  background-color: rgba(220, 220, 220, 0.7);
  transition: 0.5s;
  color: var(--dark-font-color);
  box-shadow: 3px 4px 9px rgba(36, 36, 36, .15);
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
}

.blogs_wrapper a:hover {
  box-shadow: 0 2px 8px var(--light-mode-bg-color-gray);
}

.blogs_image_container {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.blogs_image_container img {
  width: inherit;
  height: inherit;
  object-fit: cover;
  transition: 0.5s;
}

.blogs_image_container img:hover {
  transform: scale(1.1) rotate(1deg);
}

.blogs_description_container {
  padding-top: 15px;
  color: var(--dark-font-color);
  width: 85%;
}

.blogs_description_container p {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
  display: block;
  white-space: nowrap;
}

.blogs_publish_date {
  position: absolute;
  border-radius: 5px;
  z-index: 99;
  top: 20px;
  right: 20px;
  color: var(--light-mode-font-color-white);
  background-color: var(--light-mode-color-2);
  display: block;
  padding: 5px;
}
</style>
