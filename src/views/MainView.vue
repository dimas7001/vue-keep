<template>
  <Container class="container_s">
    <Header />
    <Notes />
  </Container>
</template>

<script>
import { Container } from "@/styles/StyledBlocks.js"
import Header from '@/components/Header.vue'
import Notes from '@/components/Notes.vue'

export default {
  name: 'HomeView',
  components: {
    Container, Header, Notes
  }
}
</script>
