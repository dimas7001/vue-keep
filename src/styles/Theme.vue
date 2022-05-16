<template>
  <ThemeProvider :theme="currentTheme">
    <slot></slot>
  </ThemeProvider>
</template>

<script>
import { ThemeProvider } from "vue3-styled-components"
import themes from '@/styles/themes.js'

export default {
  name: 'Theme',
  components: {
    ThemeProvider, themes
  },
  data() {
    return({
      currentTheme: themes.dark
    })
  },
}
</script>