export default async ({store}) => {
  // Blogs
  await store.dispatch('module/blog/getBlogsArray')
}
