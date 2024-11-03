<script setup lang="ts">
const route = useRoute()
const { id, name } = route.params
</script>

<template>
  <NuxtLayout>
    <template #header>
      <Header />
    </template>

    <template #main>
      <Categories
        :id="+id"
        :name="name"
      />
    </template>

    <template #footer>
      <Footer />
    </template>
  </NuxtLayout>
</template>
