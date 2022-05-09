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
    padding: 0 50px 0 110px
    transition: .3s all
    &_s
      padding-left: 260px
      transition: .3s all
</style>
