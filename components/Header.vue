<script setup lang="ts">
const classes = {
  root: 'flex justify-between min-h-[10vh] items-center',
  item: 'm-5 cursor-pointer',
}
</script>

<template>
  <div :class="classes.root">
    <span
      :class="classes.item"
      @click="navigateTo('/')"
    >
      Shop
    </span>
    <Select :class="classes.item" />
  </div>
</template>
