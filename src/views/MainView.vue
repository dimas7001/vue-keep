<template>
  <Body :theme="getCurrentTheme">
    <Header
      :sidebar-hidden="sidebarHidden"
      :theme-info="themeInfo"
      @toggle-sidebar="toggleSidebar"
      @update-theme="updateTheme"
      @update-theme-mode="updateThemeMode"
    />
    <Sidebar
      :sidebar-hidden="sidebarHidden"
      :notes-type="notesType"
      :theme-info="themeInfo"
      @toggle-notes-type="toggleNotesType"
    />
    <Container
      :class="{'container_s': !sidebarHidden}"
      :theme="getCurrentTheme"
    >
      <Notes
        :notes-type="notesType"
        :theme-info="themeInfo"
        @toggle-overlay="toggleOverlay"
        @toggle-alert="toggleAlert"
      />
    </Container>
    <Overlay
      :overlay-info="overlayInfo"
      @toggle-overlay="toggleOverlay"
      @toggle-alert="toggleAlert"
    />
    <Alert
      :alert-info="alertInfo"
      @toggle-alert="toggleAlert"
    />
  </Body>
</template>

<script>
import { computed } from 'vue'
import themes from '@/styles/themes.js'
import { Body, Container } from "@/styles/styledBlocks.js"
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Notes from '@/components/Notes.vue'
import Overlay from '@/components/Overlay.vue'
import Alert from '@/components/Alert.vue'

export default {
  name: 'MainView',
  components: {
    Body, Header, Sidebar, Container, Notes, Overlay, Alert
  },
  data() {
    return {
      sidebarHidden: true,
      themeInfo: {
        theme: 'default',
        themeMode: 'light'
      },
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
    toggleSidebar() { //opening/closing the overlay
      this.sidebarHidden = !this.sidebarHidden
    },
    toggleOverlay(mode = 'add', noteID = '', noteTitle = '', noteContent = '') {  //opens/closes an overlay with passing note data if mode = edit
      this.overlayInfo.overlayMode = mode
      this.overlayInfo.noteID = noteID
      this.overlayInfo.noteTitle = noteTitle
      this.overlayInfo.noteContent = noteContent
      this.overlayInfo.overlayHidden = !this.overlayInfo.overlayHidden
    },
    toggleNotesType(newType) {  //changes notesType variable that leads to changing showed notes type [normal, archived, deleted]
      this.notesType = newType
    },
    toggleAlert(message = '') { //show/hide alert block
      this.alertInfo.alertMessage = message
      message === '' ? this.alertInfo.alertActive = false : this.alertInfo.alertActive = true
    },
    updateTheme(newTheme) { //updates theme variable when theme changed
      this.themeInfo.theme = newTheme
      this.toggleAlert(`The theme was changed to ${newTheme}`)
    },
    updateThemeMode(newThemeMode) { //updates themeMode variables when theme mode changed
      this.themeInfo.themeMode = newThemeMode
      this.toggleAlert(`The theme mode was changed to ${newThemeMode}`)
    },
  },
  computed: {
    getCurrentTheme() { //return current theme
      return themes[this.themeInfo.theme][this.themeInfo.themeMode]
    },
  },
  provide() { //provide current theme for all components
    return {
      theme: computed(() => this.getCurrentTheme),
    }
  },
}
</script>
