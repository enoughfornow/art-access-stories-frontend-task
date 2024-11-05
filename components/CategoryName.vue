<script setup lang="ts">
import type { ICategory } from '~/types/types'

interface IProps {
  item: ICategory
}

defineProps<IProps>()

const classes = {
  root: 'flex items-center',
  text: 'text-l text-red-600 cursor-pointer mr-3',
}

const store = useLocaleStore()
const selectedLocale = computed(() => store.selectedLocale)
</script>

<template>
  <div :class="classes.root ">
    <h2
      :class="classes.text"
      @click="navigateTo(`/${item.locale[selectedLocale]?.link}${item.id}`)"
    >
      {{ item.locale[selectedLocale]?.cg_name }}
    </h2>
    <slot />
  </div>
</template>
