<script lang="ts" setup>
import siteConfig from '@/site-config'
</script>

<template>
  <footer class="w-full pt-6 pb-8 max-w-3xl text-sm flex flex-col gap-4 border-main border-t !border-op-50 text-dark dark:text-white">
    <div flex>
      <a nav-link href="https://opensource.org/license/mit" target="_blank">MIT</a>
      <span op-70>&nbsp;&nbsp;&copy;&nbsp;&nbsp;{{ new Date().getFullYear() }}&nbsp;&nbsp;{{ siteConfig.author
      }}.</span>
    </div>
  </footer>
</template>
