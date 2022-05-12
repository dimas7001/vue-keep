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
        <img class="header__customize" src="@/assets/img/pantone/pantone_b.png">
        <img class="header__logout" src="@/assets/img/logout/logout_b.png">
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
    sidebarHidden: Boolean
  },
  emits: ['toggle-sidebar'],
}
</script>