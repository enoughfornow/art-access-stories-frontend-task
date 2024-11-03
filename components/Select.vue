<script setup lang="ts">
import { ELanguage } from '../types/types'

// const selectedLang = ref<ELanguage>(ELanguage.ru)
const store = useLocaleStore()

function handleSelect(event: Event) {
  const lang = (event.target as HTMLSelectElement).value as ELanguage
  store.selectLocale(lang)
}
</script>

<template>
  <select @change="handleSelect">
    <option
      v-for="lang in ELanguage"
      :key="lang"
    >
      {{ lang }}
    </option>
  </select>
</template>
