<script setup lang="ts">
const classes = {
  root: 'flex flex-col min-h-[100vh]',
  header: 'bg-gray-100',
  main: 'flex flex-col flex-wrap items-center ',
  footer: 'bg-gray-100 mt-auto',
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
