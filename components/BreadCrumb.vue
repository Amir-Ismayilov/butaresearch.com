<template>
  <div id="common_banner">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="common_banner_text">
            <h1>{{ BreadCrumbTitle }}</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent">
                <li class="breadcrumb-item">
                  <nuxt-link :to="localePath('index')">{{ BreadCrumbBefore }}</nuxt-link>
                </li>

                <li class="breadcrumb-item active" aria-current="page">
                  {{ BreadCrumbAfter }}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  props: {
    BreadCrumbTitle: String,
    BreadCrumbBefore: String,
    BreadCrumbAfter: String,
  },
}
</script>

<style scoped>
#common_banner {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  padding: 10px 0;
  background-image: url(../assets/images/background/breadcrumb.jpg);
  background-size: cover;
  background-repeat: repeat;
}

.common_banner_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.common_banner_text h1 {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 12px;
  letter-spacing: 3px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
}

.breadcrumb {
  background-color: transparent;
  padding: 0;
  margin: 0;
  list-style: none;
}

.breadcrumb .divider::before {
  content: "/";
  margin: 0 0.3rem;
  color: #999;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: #fff;
}

.breadcrumb-item,
.breadcrumb-item a {
  font-size: 15px;
  display: inline-block;
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;
}
</style>
