<template>
  <HeaderBlock>
    <ContainerHeader>
      <div class="header__left-part">
        <BurgerBlock>
          <div class="burger" :class="{'burger_off': !sidebarHidden}" @click="$emit('toggle-sidebar')">
            <div class="burger__bullet"></div>
          </div>
        </BurgerBlock>
        <div class="header__logo">VueKeep</div>
      </div>
      <div class="header__right-part">
        <img class="header__customize" :src="require(`@/assets/img/pantone/pantone_${themeInfo.themeMode === 'light' ? 'b' : 'w'}.png`)" @click="$emit('update-theme-info', 'default', 'dark')">
        <img class="header__logout" :src="require(`@/assets/img/logout/logout_${themeInfo.themeMode === 'light' ? 'b' : 'w'}.png`)">
      </div>
    </ContainerHeader>
  </HeaderBlock>
</template>

<script>
import { HeaderBlock, ContainerHeader, BurgerBlock } from "@/styles/StyledBlocks.js"

export default {
  name: 'Header',
  components: {
    HeaderBlock, ContainerHeader, BurgerBlock
  },
  props: {
    sidebarHidden: Boolean,
    themeInfo: Object,
  },
  emits: ['toggle-sidebar', 'update-theme-info'],
}
</script>