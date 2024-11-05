<script setup lang="ts">
interface IProps {
  src?: string
  alt?: string
}

const props = withDefaults(defineProps<IProps>(), {
  src: '',
  alt: 'image',
})
const classes = computed(() => ({
  image: ['object-cover'],
}))
</script>

<template>
  <img
    :class="classes.image"
    :src="props.src || '/default-image.svg'"
    :alt="props.alt"
  >
</template>
