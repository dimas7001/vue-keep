<!-- AlertBlock
  - shown only if alertInfo.alertActive = true
  - when click on active alert it hides
  - as a content have message from props alertInfo.alertMessage
-->
<template>
  <AlertBlock
    :class="{'alert_hidden': !alertInfo.alertActive}"
    :theme="theme"
    @click="hideAlert"
  >
    {{ alertInfo.alertMessage }}
  </AlertBlock>
</template>

<script>
import { AlertBlock } from "@/styles/styledBlocks.js"

export default {
  name: 'Alert',
  components: {
    AlertBlock
  },
  props: {
    alertInfo: Object,
  },
  emits: ['toggle-alert'],
  inject: ['theme'],
  data() {
    return ({
      interval: 2500, //time in ms before alert is hidden automatically
      currentTimeout: null
    })
  },
  methods: {
    hideAlert() { //clears the hide timeout and hides alert
      clearInterval(this.currentTimeout)
      this.currentTimeout = null
      this.$emit('toggle-alert')
    },
  },
  watch: {
    $props: {
      handler() { //when have new alert
        if (this.currentTimeout)
          clearInterval(this.currentTimeout)  //destroy current timeout if exists
        this.currentTimeout = setTimeout(() => this.$emit('toggle-alert'), this.interval) //set timeout after which alert will be automatically hidden
      },
      deep: true,
    }
  },
}
</script>
