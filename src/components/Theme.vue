<template>
<!--
  ThemeProvider
    - receives theme object and spread in on all the children
-->
  <ThemeProvider
    :theme="getCurrentTheme"
  >
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
    getCurrentTheme() { //return current theme
      console.log(themes[this.themeInfo.theme][this.themeInfo.themeMode])
      return themes[this.themeInfo.theme][this.themeInfo.themeMode]
    },
  },
}
</script>