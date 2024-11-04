<script setup lang="ts">
import type { ICategory } from '../types/types'

interface IProps {
  id?: number
  name?: string
}

const props = defineProps<IProps>()

const categoriesStore = useCategoriesStore()

categoriesStore.getCategories()

const data = computed(() => {
  if (props.id) {
    return categoriesStore.categories.filter(category => category.id === props.id)
  }
  return categoriesStore.categories
})
</script>

<template>
  <div
    v-for="item in data"
    :key="item.id"
    class="m-5 flex flex-wrap"
  >
    <CategoryItem
      :item="item"
    />
  </div>
</template>
