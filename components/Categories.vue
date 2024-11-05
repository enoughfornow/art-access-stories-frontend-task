<script setup lang="ts">
import type { ICategory } from '../types/types'

interface IProps {
  id?: number
  name?: string
}

const props = defineProps<IProps>()

const categoriesStore = useCategoriesStore()

const localeStore = useLocaleStore()

const selectedLocale = computed(() => localeStore.selectedLocale)

categoriesStore.getCategories()

const data = computed(() => {
  if (props.id) {
    return categoriesStore.categories.filter(category => category.id === props.id)
  }
  return categoriesStore.categories
})
</script>

<template>
  <div class="flex gap-5 flex-wrap justify-center mb-5">
    <template
      v-for="item in data" :key="item.id"
    >
      <nav
        class="cursor-pointer"
        @click="navigateTo(`/${item.locale[selectedLocale]?.link}${item.id}`)"
      >
        {{ `${item.locale[selectedLocale]?.cg_name} / ` }}
      </nav>
    </template>
  </div>
  <div
    v-for="item in data"
    :key="item.id"
    class="inline-flex"
  >
    <CategoryItem
      v-if="item.childs"
      :item="item"
    />
  </div>
</template>
