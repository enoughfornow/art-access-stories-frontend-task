<script setup lang="ts">
import { ELanguage } from '../types/types'

const store = useLocaleStore()
const categoriesStore = useCategoriesStore()

const categories = computed(() => categoriesStore.categories)

function handleSelect(event: Event) {
  const lang = (event.target as HTMLSelectElement).value as ELanguage

  const filteredCategories = categories.value.filter((category) => {
    return category.locale[lang]?.cg_name
  })

  if (filteredCategories.length === 0) {
    store.selectLocale(ELanguage.ru)
  }
  else {
    store.selectLocale(lang)
  }
}
</script>

<template>
  <select @change="handleSelect($event)">
    <option
      v-for="lang in ELanguage"
      :key="lang"
    >
      {{ lang }}
    </option>
  </select>
</template>
