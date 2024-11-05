<script setup lang="ts">
import type { ICategory } from '../types/types'

interface IProps {
  id?: number
}

const props = defineProps<IProps>()

const classes = {
  container: 'flex flex-col',
}

const categoriesStore = useCategoriesStore()

const localeStore = useLocaleStore()

const selectedLocale = computed(() => localeStore.selectedLocale)

categoriesStore.getCategories()

const categories = computed(() => categoriesStore.categories)

const data = computed(() => {
  if (props.id) {
    return filterCategoriesById(categories.value, props.id)
  }
  else {
    return categories.value
  }
})

function filterCategoriesById(categories: ICategory[], id: number): ICategory[] {
  const result = []
  for (const category of categories) {
    if (category.id === id) {
      result.push(category)
    }
    if (category.childs) {
      result.push(...filterCategoriesById(category.childs, id))
    }
  }
  return result
}
</script>

<template>
  <template v-if="props.id">
    <template v-for="item in data" :key="item.id">
      {{ item.locale[selectedLocale]?.cg_name }}
    </template>
  </template>
  <div
    v-for="item in data"
    :key="item.id"
    :class="classes.container"
  >
    <CategoryItem
      :item="item"
    />
  </div>
</template>
