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

// function breadcrumbs(item: ICategory) {
//   const breadcrumbs = []
//   const path = Array.isArray(item.path_to_top) ? [...item.path_to_top, item.id] : [item.id]
//   for (const id of path) {
//     const category = categories.value.find(c => c.id === id)
//     if (category) {
//       breadcrumbs.push(category.locale[selectedLocale.value]?.cg_name)
//     }
//   }
//   return breadcrumbs.join(' ')
// }

const classes = {
  image: 'w-[150px] h-[150px]',
}
</script>

<template>
  <template
    v-for="child in item.childs"
    :key="child.id"
  >
    <div
      v-if="child.locale[selectedLocale]?.cg_name"
      class="flex flex-col items-center w-[300px] h-[300px] border border-black m-2 p-2"
    >
      <div class="flex flex-col">
        <h2
          class="text-2xl text-red-600 cursor-pointer"
          @click="navigateTo(`/${child.locale[selectedLocale]?.link}${child.id}`)"
        >
          {{ useTruncate(child.locale[selectedLocale]?.cg_name, 3) }}
        </h2>
        <span
          class="text-gray-500 flex select-none cursor-pointer"
          @click="toggleOpen(child.id)"
        >
          {{ breadcrumbs(child, categories, selectedLocale) }}
          <span
            v-if="child.childs && child.childs.length"
            class="ml-2"
          >
            {{ isOpen[child.id] ? '< back' : 'next >' }}
          </span>
        </span>
      </div>
      <Image
        :class="classes.image"
        :src="child.logo_image || child.menu_image"
        :alt="child.locale[selectedLocale]?.cg_name"
      />
    </div>
    <template v-if="isOpen[child.id]">
      <CategoryItem
        v-if="child.childs && child.childs.length"
        :item="child"
      />
    </template>
  </template>
</template>

<!-- <div v-if="isOpened[el.id]">
  <CatalogItem
    v-if="el.childs && el.childs.length"
    :item="el.childs"
  />
</div> -->
