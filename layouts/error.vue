<template>
  <div>
    <section class="section_error">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="erorr_wrapper">
              <img src="../assets/images/background/error.jpg" alt="error_page">
              <h3>{{ $t('error_404_text') }}</h3>

              <nuxt-link :to="localePath('index')" class="error_btn">
                {{ $t('back_to_home') }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "error"
}
</script>

<style scoped>
.section_error {
  padding: 120px 0;
}

.erorr_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.erorr_wrapper img {
  width: 70%;
  height: 400px;
  object-fit: contain;
  user-select: none;
}

.erorr_wrapper h3 {
  font-size: 36px;
  line-height: 1.2em;
  color: var(--light-mode-color-1);
  text-align: center;
  margin: 40px 0;
}

.error_btn {
  text-align: center;
  padding: 10px 20px;
  color: #ffffff !important;
  background: var(--light-mode-color-1);
  font-size: 18px;
  font-weight: 500;
  transition: 0.5s;
  border-radius: 10px;
  box-shadow: 0px 8px 20px 0px rgba(27, 27, 27, 0.08);
  border: 1px solid transparent;
}

.error_btn:hover {
  color: var(--light-mode-color-1) !important;
  border: 1px solid var(--light-mode-color-1);
  background: transparent;
}

@media screen and (max-width: 767px) {
  .erorr_wrapper h3 {
    font-size: 24px;
  }

  .erorr_wrapper img {
    width: 100%;
    object-fit: contain;
  }
}
</style>
