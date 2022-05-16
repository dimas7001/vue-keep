<template>
  <Theme>
    <Header :sidebar-hidden="sidebarHidden" @toggle-sidebar="toggleSidebar" />
    <Sidebar :sidebar-hidden="sidebarHidden" :notes-type="notesType" @toggle-notes-type="toggleNotesType" />
    <Container :class="{'container_s': !sidebarHidden}">
      <Notes :notes-type="notesType" @toggle-overlay="toggleOverlay" @toggle-alert="toggleAlert" />
    </Container>
    <Overlay :overlay-info="overlayInfo" @toggle-overlay="toggleOverlay" @toggle-alert="toggleAlert" />
    <Alert :alert-info="alertInfo" @toggle-alert="toggleAlert" />
  </Theme>
</template>

<script>
import Theme from '@/styles/Theme.vue'
import { Container } from "@/styles/StyledBlocks.js"
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Notes from '@/components/Notes.vue'
import Overlay from '@/components/Overlay.vue'
import Alert from '@/components/Alert.vue'

export default {
  name: 'MainView',
  components: {
    Theme, Header, Sidebar, Container, Notes, Overlay, Alert
  },
  data() {
    return {
      sidebarHidden: true,
      alertInfo: {
        alertActive: false,
        alertMessage: '',
      },
      overlayInfo: {
        overlayHidden: true,
        overlayMode: 'add',
        noteID: '',
        noteTitle: '',
        noteContent: '',
      },
      notesType: 'normal',
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarHidden = !this.sidebarHidden
    },
    toggleOverlay(mode = 'add', noteID = '', noteTitle = '', noteContent = '') {
      this.overlayInfo.overlayMode = mode
      this.overlayInfo.noteID = noteID
      this.overlayInfo.noteTitle = noteTitle
      this.overlayInfo.noteContent = noteContent
      this.overlayInfo.overlayHidden = !this.overlayInfo.overlayHidden
    },
    toggleNotesType(newType) {
      this.notesType = newType
    },
    toggleAlert(message = '') {
      this.alertInfo.alertMessage = message
      message === '' ? this.alertInfo.alertActive = false : this.alertInfo.alertActive = true
    }
  }
}
</script>
