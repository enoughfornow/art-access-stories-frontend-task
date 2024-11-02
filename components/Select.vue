<script setup lang="ts">
import type { Category } from '../types/types'

const { data } = await useFetch<Category[]>('/api/data')
</script>

<template>
  <div
    v-for="item in data"
    :key="item.id"
  >
    {{ item.locale.en }}
  </div>
</template>
