export const state = () => ({
  currentBackground: null,
  soundState: true
})

export const mutations = {
  changeBackground(state, newBackground) {
    state.currentBackground = newBackground
  },
  changeSoundState(state, newSound) {
    state.soundState = newSound
  }
}
