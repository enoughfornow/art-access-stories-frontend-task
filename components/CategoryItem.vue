<script setup lang="ts">
import type { ICategory } from '~/types/types'

interface IProps {
  item: ICategory
}
const props = defineProps<IProps>()

const localeStore = useLocaleStore()
const categoriesStore = useCategoriesStore()

const categories = computed(() => categoriesStore.categories)

const selectedLocale = computed(() => localeStore.selectedLocale)

const isOpen = ref<{ [id: number]: boolean }>({})

function toggleOpen(id: number) {
  isOpen.value[id] = !isOpen.value[id]
}

function breadcrumbs(item: ICategory) {
  const breadcrumbs = []
  const path = Array.isArray(item.path_to_top) ? [...item.path_to_top, item.id] : [item.id]
  for (const id of path) {
    const category = categories.value.find(c => c.id === id)
    if (category) {
      breadcrumbs.push(category.locale[selectedLocale.value]?.cg_name)
    }
  }
  return breadcrumbs.join(' ')
}
</script>

<template>
  <div
    v-for="child in item.childs"
    :key="child.id"
    class="w-[300px] h-[300px]"
  >
    <h2 class="text-2xl text-red-600">
      {{ child.locale[selectedLocale]?.cg_name }}
    </h2>
    <p class="text-gray-500">
      {{ breadcrumbs(child) }}
    </p>
    <p>
      <a
        class="text-blue-600"
        :href="`${child.locale[selectedLocale]?.link}${item.id}`"
      >
        {{ `${child.locale[selectedLocale]?.link}${item.id} link` }}
      </a>
    </p>
    <template v-if="isOpen[child.id]">
      <CategoryItem
        v-if="child.childs && child.childs.length"
        :item="child"
      />
    </template>
    <button @click="toggleOpen(child.id)">
      {{ isOpen[child.id] ? 'Закрыть' : 'Открыть' }}
    </button>
  </div>
</template>

<!-- <div v-if="isOpened[el.id]">
  <CatalogItem
    v-if="el.childs && el.childs.length"
    :item="el.childs"
  />
</div> -->
