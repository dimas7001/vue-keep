<template>
  <div class="container container_s">
    <Notes />
  </div>
</template>

<script>
import Notes from '@/components/Notes.vue'

export default {
  name: 'HomeView',
  components: {
    Notes
  }
}
</script>

<style lang="sass">
  .container
    width: 100vw
    padding: 0 20px 0
    transition: .3s all
    &_s
      padding-left: 200px
      transition: .3s all
</style>
