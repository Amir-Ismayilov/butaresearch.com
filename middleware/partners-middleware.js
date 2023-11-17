export default async ({store}) => {
  // Partners
  await store.dispatch('module/partners/getPartnersArray')
}
