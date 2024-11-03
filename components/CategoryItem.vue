<script setup lang="ts">
import type { ICategory, ILocale } from '../types/types'

interface IProps {
  item: ICategory[]
}

defineProps<IProps>()

const classes = {
  root: 'flex flex-col',
  figure: 'relative cursor-pointer',
  figcaption: 'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]',
  span: 'text-gray-500 text-3xl font-bold',
}

const localeStore = useLocaleStore()
const categoriesStore = useCategoriesStore()

const route = useRoute()

const selectedLocale = computed(() => localeStore.selectedLocale)

const isOpened = ref<{ [id: number]: boolean }>({})

function toggleBranch(el: ICategory) {
  isOpened.value[el.id] = !isOpened.value[el.id]
}

function breadcrumbs(item: ICategory) {
  const breadcrumbs = []
  const path = Array.isArray(item.path_to_top) ? [...item.path_to_top, item.id] : [item.id]
  for (const id of path) {
    const category = categoriesStore.categories.find(c => c.id === id)
    if (category) {
      breadcrumbs.push(category.locale[selectedLocale.value]?.cg_name)
    }
  }
  return breadcrumbs.join(' ')
}
</script>

<template>
  <div
    :class="classes.root"
  >
    <template
      v-for="el in item"
      :key="el.id"
    >
      <figure
        :class="classes.figure"
        @click="navigateTo(`/${el.locale[selectedLocale]?.link}${el.id}`)"
      >
        <img
          v-if="el.locale[selectedLocale]?.cg_name"
          :src="el.category_image || el.menu_image" alt=""
        >
        <figcaption :class="classes.figcaption">
          <span
            :class="classes.span"
          >
            {{ el.locale[selectedLocale]?.cg_name }}
          </span>
        </figcaption>
      </figure>

      <div
        v-if="route.path === `/${el.locale[selectedLocale]?.link}${el.id}`"
        class="text-sm text-red-500"
        @click="toggleBranch(el)"
      >
        {{ breadcrumbs(el) }}
      </div>
      <div v-if="isOpened[el.id]">
        <CatalogItem
          v-if="el.childs && el.childs.length"
          :item="el.childs"
        />
      </div>
    </template>
  </div>
</template>
