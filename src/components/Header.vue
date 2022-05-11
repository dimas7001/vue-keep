<template>
  <HeaderBlock>
    <ContainerHeader>
      <div class="header__left-part">
        <div class="burger">
          <div class="burger__bullet"></div>
        </div>
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
import { ContainerHeader } from "@/styles/StyledBlocks.js"
import { HeaderBlock } from "../styles/StyledBlocks.js"

export default {
  name: 'Header',
  components: {
    HeaderBlock, ContainerHeader
  }
}
</script>