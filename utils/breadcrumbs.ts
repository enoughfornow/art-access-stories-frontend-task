import type { ELanguage, ICategory } from '~/types/types'

export function breadcrumbs(item: ICategory, categories: ICategory[], selectedLocale: ELanguage) {
  const path = getPath(item)
  const breadcrumbs = getPathNames(path, categories, selectedLocale)
  return breadcrumbs.join(' / ')
}

function getPath(item: ICategory) {
  return Array.isArray(item.path_to_top) ? [...item.path_to_top, item.id] : [item.id]
}

function findCategory(id: number, categories: ICategory[]): ICategory | null {
  for (const category of categories) {
    if (category.id === id) {
      return category
    }
    if (category.childs) {
      const found = findCategory(id, category.childs)
      if (found) {
        return found
      }
    }
  }
  return null
}

function getPathNames(path: number[], categories: ICategory[], selectedLocale: ELanguage) {
  return path.map((id) => {
    const category = findCategory(id, categories)
    return category ? category.locale[selectedLocale]?.cg_name : ''
  }).filter(Boolean)
}
