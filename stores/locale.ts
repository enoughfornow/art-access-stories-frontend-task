import { ELanguage } from '~/types/types'

export const useLocaleStore = defineStore('locale', () => {
  const selectedLocale = ref<ELanguage>(ELanguage.ru)

  function selectLocale(locale: ELanguage) {
    selectedLocale.value = locale
  }

  return {
    selectedLocale,
    selectLocale,
  }
})
