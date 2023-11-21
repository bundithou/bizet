import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLangStore = defineStore('langSwitcher', {
  state: () => ({
    lang: "en",
  }),
  actions: {
    async switchLang() {
      this.lang = this.lang === "en" ? "th" : "en"
    }
  },
  getters: {
    getLang(state) {
      return state.lang
    }
  }
})
