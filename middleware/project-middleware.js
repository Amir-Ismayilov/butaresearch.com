export default async ({store}) => {
  // Projects
  await store.dispatch('module/project/getProjectsArray')
}
