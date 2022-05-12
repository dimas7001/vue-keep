<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <router-view/>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    noteId(min, max) {
      Math.floor(Math.random()*(max-min+1)+min)
    }
  },
}
</script>

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
</style>
