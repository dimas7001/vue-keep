<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <header class="header">
    <div class="container">
      <div class="header__left-part">
        <div class="burger">
          <div class="burger__bullet"></div>
        </div>
        <div class="header__logo">VueKeep</div>
      </div>
      <div class="header__right-part">
        <img class="header__customize" src="./assets/img/pantone/pantone_b.png">
        <img class="header__logout" src="./assets/img/logout/logout_b.png">
      </div>
    </div>
  </header>
  <div class="sidebar">
    <div class="sidebar__item">
      <img src="./assets/img/notes/notes_b.png" class="sidebar__icon">
      <div class="sidebar__label">Your Notes</div>
    </div>
    <div class="sidebar__item">
      <img src="./assets/img/archive/archive_b.png" class="sidebar__icon">
      <div class="sidebar__label">Archived</div>
    </div>
    <div class="sidebar__item">
      <img src="./assets/img/delete/delete_b.png" class="sidebar__icon">
      <div class="sidebar__label">Bin</div>
    </div>
  </div>
  <router-view/>
</template>

<style lang="sass">
  @font-face
    font-family: "NotoSans"
    src: url("assets/fonts/NotoSans/NotoSans-Black.ttf")
    font-weight: 900
    font-style: normal
    font-display: swap
  @font-face
    font-family: "NotoSans"
    src: url("assets/fonts/NotoSans/NotoSans-ExtraBold.ttf")
    font-weight: 800
    font-style: normal
    font-display: swap
  @font-face
    font-family: "NotoSans"
    src: url("assets/fonts/NotoSans/NotoSans-Bold.ttf")
    font-weight: 700
    font-style: normal
    font-display: swap
  @font-face
    font-family: "NotoSans"
    src: url("assets/fonts/NotoSans/NotoSans-SemiBold.ttf")
    font-weight: 600
    font-style: normal
    font-display: swap
  @font-face
    font-family: "NotoSans"
    src: url("assets/fonts/NotoSans/NotoSans-Medium.ttf")
    font-weight: 500
    font-style: normal
    font-display: swap
  @font-face
    font-family: "NotoSans"
    src: url("assets/fonts/NotoSans/NotoSans-Regular.ttf")
    font-weight: 400
    font-style: normal
    font-display: swap
  @font-face
    font-family: "NotoSans"
    src: url("assets/fonts/NotoSans/NotoSans-Light.ttf")
    font-weight: 300
    font-style: normal
    font-display: swap
  @font-face
    font-family: "NotoSans"
    src: url("assets/fonts/NotoSans/NotoSans-ExtraLight.ttf")
    font-weight: 200
    font-style: normal
    font-display: swap
  @font-face
    font-family: "NotoSans"
    src: url("assets/fonts/NotoSans/NotoSans-Thin.ttf")
    font-weight: 100
    font-style: normal
    font-display: swap
  *
    box-sizing: border-box
  body
    margin: 0
    padding: 0
    font-family: "NotoSans", Helvetica, Arial, sans-serif
    font-weight: 400
    font-size: 14px
    line-height: 17px
    color: #353535
    overflow-x: hidden
    -ms-overflow-style: none
    scrollbar-width: none
    &::-webkit-scrollbar
      display: none
  .header
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 60px
    padding: 18px 0
    background-color: rgba(255, 255, 255, .95)
    box-shadow: 0 0 5px 1px #adadad
    z-index: 10
    &__left-part,
    &__right-part
      display: flex
      flex-direction: row
      justify-content: space-between
      align-items: center
      & > *
        cursor: pointer
      & > * + *
        margin-left: 30px
    &__logo
      font-size: 30px
      line-height: 23px
      font-weight: 700
    .container
      display: flex
      flex-direction: row
      justify-content: space-between
      align-items: center
      padding: 0 20px
    img
      height: 24px
  .burger
    position: relative
    width: 20px
    height: 20px
    &::before,
    &::after
      content: ''
      display: block
      width: 20px
      height: 3px
      position: absolute
      left: 0
      background-color: #000
    &::before
      top: 0
    &::after
      bottom: 0
    &__bullet
      position: absolute
      top: 50%
      left: 0
      transform: translateY(-50%)
      height: 4px
      width: 4px
      background-color: #000
      border-radius: 50%
      transition: .2s all
    &_off
      .burger__bullet
        left: calc( 100% - 4px )
        transition: .2s all
  .sidebar
    position: fixed
    top: 60px
    left: 0
    width: 210px
    height: calc(100vh - 60px)
    padding: 40px 11px 30px 11px
    background-color: #fff
    z-index: 1
    box-shadow: 0 5px 5px 1px #adadad
    overflow: hidden
    transition: .3s all
    &_s
      width: 60px
      transition: .3s all
    &__item
      display: flex
      flex-direction: row
      justify-content: flex-start
      align-items: center
      height: 40px
      padding: 8px 7px
      border-radius: 15px
      transition: .2s all
      cursor: pointer
      &:hover
        background-color: #f0f0f0
        transition: .2s all
      & + .sidebar__item
        margin-top: 30px
    &__icon
      width: 24px
      margin-right: 20px
    &__label
      font-size: 20px
      font-weight: 600
</style>
