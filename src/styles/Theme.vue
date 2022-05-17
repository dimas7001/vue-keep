<template>
  <ThemeProvider :theme="getCurrentTheme">
    <slot></slot>
  </ThemeProvider>
</template>

<script>
import { ThemeProvider } from "vue3-styled-components"
import themes from '@/styles/themes.js'

export default {
  name: 'Theme',
  components: {
    ThemeProvider
  },
  props: {
    themeInfo: Object,
  },
  computed: {
    getCurrentTheme() {
      console.log(themes[this.themeInfo.theme][this.themeInfo.themeMode])
      return themes[this.themeInfo.theme][this.themeInfo.themeMode]
    },
  },
}
</script>