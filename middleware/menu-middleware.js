export default async ({store}) => {
  // Settings
  await store.dispatch('module/setting/getSettingsArray')

  // Blogs
  await store.dispatch('module/blog/getBlogsArray')

  // Services
  await store.dispatch('module/service/getServicesArray')
}
