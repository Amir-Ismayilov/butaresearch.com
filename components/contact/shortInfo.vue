<template>
  <div class="contact_info">
    <span>{{ $t('contacts') }}</span>
    <h3>{{ $t('business_develop') }}</h3>
    <p>{{ $t('have_question') }}</p>
    <ul>
      <li class="content">
        <div class="content_image">
          <img src="../../assets/icons/contacts/call.svg" alt="phone">
        </div>

        <div class="content_text">
          <span>{{ $t('phone') }}</span> <br>
          <a :href="`tel:` + settingAll.contact[0].phone">{{ settingAll.contact[0].phone }}</a>
        </div>
      </li>

      <li class="content">
        <div class="content_image">
          <img src="../../assets/icons/contacts/location.svg" alt="location">
        </div>

        <div class="content_text">
          <span>{{ $t('address') }}</span> <br>
          <p>{{ settingAll.contact[0].address }}</p>
        </div>
      </li>

      <li class="content">
        <div class="content_image">
          <img src="../../assets/icons/contacts/sms-edit.svg" alt="email">
        </div>

        <div class="content_text">
          <span>{{ $t('email') }}</span> <br>
          <a href="mailto:hello@era.az">{{ settingAll.contact[0].email }}</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "shortInfo",
  computed: {
    ...mapGetters({
      settingAll: "module/setting/getAllSettings",
    }),
  },
}
</script>

<style scoped>
.contact_info > span {
  color: var(--light-mode-color-1);
  margin-bottom: 5px;
}

.contact_info h3 {
  color: #ffffff;
  font-size: 26px;
}

.contact_info p {
  color: #ffffff;
  margin: 15px 0;
}

.contact_info {
  background-color: #070b3b;
  padding: 30px 25px;
  border-radius: 15px;
  position: relative;
}

.content {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.content_image {
  padding: 10px;
  background: #fff;
  border-radius: 50%;
}

.content_text span {
  color: #ffffff;
  font-weight: 600;
}

.content_text a, .content_text p {
  color: #ffffff;
}
</style>
