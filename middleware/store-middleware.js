export default async ({store}) => {
  // Sliders
  await store.dispatch('module/sliders/getSlidersArray')

  // About
  await store.dispatch('module/about/getAboutsArray')

  // Partners
  await store.dispatch('module/partners/getPartnersArray')

  // Projects
  await store.dispatch('module/project/getProjectsArray')
}