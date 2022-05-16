<template>
  <AlertBlock :class="{'alert_hidden': !alertInfo.alertActive}" @click="hideAlert">
    {{ alertInfo.alertMessage }}
  </AlertBlock>
</template>

<script>
import { AlertBlock } from "@/styles/StyledBlocks.js"

export default {
  name: 'Alert',
  components: {
    AlertBlock
  },
  props: {
    alertInfo: Object,
  },
  emits: ['toggle-alert'],
  data() {
    return ({
      interval: 2500,
      currentTimeout: null
    })
  },
  methods: {
    hideAlert() {
      clearInterval(this.currentTimeout)
      this.currentTimeout = null
      this.$emit('toggle-alert')
    },
  },
  watch: {
    $props: {
      handler() {
        clearInterval(this.currentTimeout)
        this.currentTimeout = setTimeout(() => this.$emit('toggle-alert'), this.interval)
      },
      deep: true,
    }
  },
}
</script>
