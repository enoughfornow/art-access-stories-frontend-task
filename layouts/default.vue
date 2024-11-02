<script setup lang="ts">
const classes = {
  header: 'm-auto w-full bg-red-500',
  main: 'main',
  footer: 'bg-green-500',
}
</script>

<template>
  <header :class="classes.header">
    <slot name="header" />
  </header>
  <main :class="classes.main">
    <slot name="main" />
  </main>
  <footer :class="classes.footer">
    <slot name="footer" />
  </footer>
</template>
