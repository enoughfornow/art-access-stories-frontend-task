<script setup lang="ts">
import type { ICategory } from '~/types/types'

interface IProps {
  item: ICategory
  variant?: 'category' | 'product'
}

interface IEmits {
  (e: 'toggle', id: number): void
}

const props = defineProps<IProps>()
const emit = defineEmits<IEmits>()

const classes = computed(() => ({
  figure: ['cursor-pointer', { 'relative ': props.variant === 'category' }, { 'w-[300px] h-[300px] flex flex-col': props.variant === 'product' }],
  figcaption: ['', { 'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]': props.variant === 'category' }, { '': props.variant === 'product' }],
  span: 'text-gray-500 text-3xl text-center font-bold',
}))
// { 'el-w-max-content': props.size === 'md' },

const localeStore = useLocaleStore()
const selectedLocale = computed(() => localeStore.selectedLocale)

function toggleBranch(id: number) {
  emit('toggle', id)
}
</script>

<template>
  <figure
    :class="classes.figure"
  >
    <img
      v-if="item.locale[selectedLocale]?.cg_name"
      :src="variant === 'category' ? item.category_image : item.menu_image || item.logo_image" alt=""
    >
    <figcaption :class="classes.figcaption">
      <span
        :class="classes.span"
        @click="toggleBranch(item.id)"
      >
        {{ item.locale[selectedLocale]?.cg_name }}
      </span>
      <slot />
    </figcaption>
  </figure>
</template>
