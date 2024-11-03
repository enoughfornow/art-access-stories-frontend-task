<script setup lang="ts">
const classes = {
  root: 'flex justify-between min-h-[10vh] items-center',
  item: 'm-5',
}
</script>

<template>
  <div :class="classes.root">
    <div :class="classes.item">
      Shop
    </div>
    <Select :class="classes.item" />
  </div>
</template>
