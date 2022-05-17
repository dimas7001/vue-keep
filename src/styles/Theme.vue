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
  props: {
    themeInfo: Object,
  },
  data() {
    return({
      currentTheme: themes[this.themeInfo.theme][this.themeInfo.themeMode],
    })
  },
  methods: {
    changeTheme(newTheme, newThemeMode) {
      this.currentTheme = themes[newTheme][newThemeMode]
    },
  },
  watch: {
    $props: {
      handler() {
        console.log(this.currentTheme)
        this.currentTheme = themes[this.themeInfo.theme][this.themeInfo.themeMode]
        console.log(this.currentTheme)
      },
      deep: true,
    },
  },
}
</script>