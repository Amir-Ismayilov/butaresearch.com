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
  background-image: url(../assets/images/background/breadcrumb.jpg);
  background-size: cover;
  background-repeat: repeat;
  padding: 50px 0;
}

.common_banner_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.common_banner_text h1 {
  font-size: 45px;
  font-weight: 500;
  margin-bottom: 12px;
  color: #fff;
  text-align: center;
  filter: drop-shadow(2px 4px 6px black);
}

.breadcrumb {
  background-color: transparent;
  padding: 0;
  margin: 0;
  list-style: none;
}

.breadcrumb .active {
  filter: drop-shadow(2px 3px 5px black);
}

.breadcrumb .divider::before {
  content: "/";
  margin: 0 0.3rem;
  color: #999;
}

.breadcrumb-item, .breadcrumb-item a {
  font-size: 18px;
  display: inline-block;
  color: #fff;
  font-weight: 400;
  filter: drop-shadow(1px 2px 2px #252525);
}
</style>
