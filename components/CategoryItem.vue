<script setup lang="ts">
import type { ICategory } from '~/types/types'
import { ELanguage } from '~/types/types'

interface IProps {
  item: ICategory
}
defineProps<IProps>()

const classes = {
  root: 'flex flex-col w-auto  my-2',
  toggleBtn: 'text-gray-500 select-none cursor-pointer',
  breadcrumbs: 'text-sm text-gray-500 mt-1',
}

const localeStore = useLocaleStore()
const categoriesStore = useCategoriesStore()

const categories = computed(() => categoriesStore.categories)

const selectedLocale = computed(() => localeStore.selectedLocale)

const isOpen = ref<{ [id: number]: boolean }>({})

function toggleOpen(id: number) {
  isOpen.value[id] = !isOpen.value[id]
}
function shouldRenderLocale(category: ICategory) {
  return !!category.locale[selectedLocale.value]?.cg_name
}

function shouldRenderChilds(category: ICategory) {
  return !!category.childs?.find(shouldRenderLocale)
}
</script>

<template>
  <li
    v-if="shouldRenderLocale(item)"
    :class="classes.root"
  >
    <CategoryName
      :item="item"
    >
      <span
        v-if="shouldRenderChilds(item)"
        :class="classes.toggleBtn"
        @click="toggleOpen(item.id)"
      >
        {{ isOpen[item.id] ? ' < back' : 'next >' }}
      </span>
    </CategoryName>
    <div :class="classes.breadcrumbs">
      {{ breadcrumbs(item, categories, selectedLocale) }}
    </div>
    <ul v-if="shouldRenderChilds(item) && isOpen[item.id]">
      <li
        v-for="child in item.childs"
        :key="child.id"
        class="pl-4"
      >
        <CategoryItem
          :item="child"
        />
      </li>
    </ul>
  </li>
</template>
