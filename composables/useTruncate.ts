export function useTruncate(text: string, maxLength = 3) {
  return computed(() => {
    const words = text.split(' ')
    return words.length > maxLength ? `${words.slice(0, maxLength).join(' ')}...` : text
  })
}
