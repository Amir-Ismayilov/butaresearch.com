export default async ({store}) => {
  // About
  await store.dispatch('module/about/getAboutsArray')
}
