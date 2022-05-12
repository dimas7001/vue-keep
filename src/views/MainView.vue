<template>
  <Container :class="{'container_s': !sidebarHidden}">
    <Header :sidebar-hidden="sidebarHidden" @toggle-sidebar="toggleSidebar" />
    <Sidebar :sidebar-hidden="sidebarHidden" @toggle-notes-type="toggleNotesType"/>
    <Notes :notes-type="notesType" />
  </Container>
</template>

<script>
import { Container } from "@/styles/StyledBlocks.js"
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Notes from '@/components/Notes.vue'

export default {
  name: 'MainView',
  components: {
    Container, Header, Sidebar, Notes
  },
  data() {
    return {
      sidebarHidden: true,
      notesType: 'normal',
      minRandom: 1,
      maxRandom: 99999,
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarHidden = !this.sidebarHidden
    },
    toggleNotesType(newType) {
      this.notesType = newType
    },
  }
}
</script>
