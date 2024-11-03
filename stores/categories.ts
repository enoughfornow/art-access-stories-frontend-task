import type { ICategory } from '~/types/types'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<ICategory[]>([])
  const selectedCategory = ref<string | null>(null)

  function selectCategory(category: string) {
    selectedCategory.value = category
  }

  async function getCategories() {
    const { data } = await useFetch<ICategory[]>('/api/data')
    if (data.value) {
      categories.value = data.value
    }
  }

  return {
    categories,
    selectedCategory,
    selectCategory,
    getCategories,
  }
})
