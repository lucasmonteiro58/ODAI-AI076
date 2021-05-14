import { useSound } from '@vueuse/sound'

// import success from '../assets/audios/success.wav'
// import error from '../assets/audios/error.wav'
// import click from '../assets/audios/click.wav'
// import apagar from '../assets/audios/apagar.wav'
// import encaixar from '../assets/audios/encaixe.wav'

import circle from '../assets/audios/circle.wav'
import click from '../assets/audios/click.wav'
import missclick from '../assets/audios/missclick.wav'
import popup from '../assets/audios/popup.wav'
import win from '../assets/audios/win.wav'

const audios = {
  setup() {
    const audioCircle = useSound(circle)
    const audioClick = useSound(click)
    const audioMissClick = useSound(missclick)
    const audioPopUp = useSound(popup)
    const audioWin = useSound(win)
    return {
      audioCircle,
      audioClick,
      audioMissClick,
      audioPopUp,
      audioWin
    }
  }
}

export default audios
