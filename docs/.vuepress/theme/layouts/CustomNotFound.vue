<template>
  <ParentNotFound>
    <template #page-bottom>
      <CustomFooter />
    </template>
  </ParentNotFound>
</template>

<script setup>
import ParentNotFound from '@vuepress/theme-default/lib/client/layouts/NotFound.vue';
import CustomFooter from './CustomFooter.vue';
</script>
