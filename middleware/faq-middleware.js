export default async ({store}) => {
  // Faqs
  await store.dispatch('module/faq/getFaqsArray')
}
