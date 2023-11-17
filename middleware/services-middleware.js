export default async ({store}) => {
  // Services
  await store.dispatch('module/service/getServicesArray')
}
