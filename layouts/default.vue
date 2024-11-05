<script setup lang="ts">
const classes = {
  root: 'grid grid-cols-12 grid-rows-6 min-h-[100vh]',
  header: 'bg-gray-100 col-start-1 col-end-13 h-[10vh] mb-auto',
  main: 'col-start-2 col-end-13 row-start-2 row-end-6',
  footer: 'bg-gray-100 col-start-1 col-end-13 mt-auto',
}
</script>

<template>
  <div :class="classes.root">
    <header :class="classes.header">
      <slot name="header" />
    </header>
    <main :class="classes.main">
      <slot name="main" />
    </main>
    <footer :class="classes.footer">
      <slot name="footer" />
    </footer>
  </div>
</template>
