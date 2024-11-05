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
  image: ['object-cover h-full'],
}))
// { 'el-w-max-content': props.size === 'md' },
</script>

<template>
  <img
    :class="classes.image"
    :src="props.src || '/default-image.svg'"
    :alt="props.alt"
  >
</template>

<!-- <style scoped>
.default {
    background-image: url('/no-image.png');
}
</style> -->
