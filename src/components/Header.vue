<template>
<!--
  .burger
    - move a .burger__bullet depending on sidebarHidden value
    - emits sidebar show/hide
  
  .header__customize
    - changes the icon depending on themeInfo.themeMode = {'light', 'dark'}
    - emits theme change

  .header__logout
    - changes the icon depending on themeInfo.themeMode = {'light', 'dark'}
-->
  <HeaderBlock
      :main="themes[themeInfo.themeMode].main"
      :highlights="themes[themeInfo.themeMode].highlights"
  >
    <ContainerHeader>
      <div class="header__left-part">
        <BurgerBlock :highlights="themes[themeInfo.themeMode].highlights">
          <div
            class="burger"
            :class="{'burger_off': !sidebarHidden}"
            @click="$emit('toggle-sidebar')"
          >
            <div class="burger__bullet"></div>
          </div>
        </BurgerBlock>
        <div class="header__logo">VueKeep</div>
      </div>
      <div class="header__right-part">
        <img
          class="header__customize"
          :src="require(`@/assets/img/pantone/pantone_${themeInfo.themeMode === 'light' ? 'b' : 'w'}.png`)"
          @click="$emit('update-theme-info', 'default', 'dark')"
        >
        <img
          class="header__logout"
          :src="require(`@/assets/img/logout/logout_${themeInfo.themeMode === 'light' ? 'b' : 'w'}.png`)"
        >
      </div>
    </ContainerHeader>
  </HeaderBlock>
</template>

<script>
import { HeaderBlock, ContainerHeader, BurgerBlock } from "@/styles/styledBlocks.js"
import themes from '@/styles/themes.js'

export default {
  name: 'Header',
  components: {
    HeaderBlock, ContainerHeader, BurgerBlock
  },
  props: {
    sidebarHidden: Boolean,
    themeInfo: Object,
    themes: themes
  },
  emits: ['toggle-sidebar', 'update-theme-info'],
}
</script>