import { useSound } from '@vueuse/sound'

import click from '../assets/audios/click.wav'
import maquina from '../assets/audios/maquina.wav'
import maximizar from '../assets/audios/maximizar.wav'
import maximizarfoto from '../assets/audios/maximizarfoto.wav'
import mouseover from '../assets/audios/mouseover.wav'
import sucesso from '../assets/audios/sucesso.wav'

import placeholderg from '../assets/audios/placeholderg.wav'
import placeholderp from '../assets/audios/placeholderp.wav'

const audios = {
  setup() {
    const audioClick = useSound(click)
    const audioMaquina = useSound(maquina)
    const audioMaximinizar = useSound(maximizar)
    const audioMaximizarfoto = useSound(maximizarfoto)
    const audioMouseover = useSound(mouseover)
    const audioSucesso = useSound(sucesso)

    const falaPlaceholderg = useSound(placeholderg)
    const falaPlaceholderp = useSound(placeholderp)

    return {
      audioClick,
      audioMaquina,
      audioMaximinizar,
      audioMaximizarfoto,
      audioMouseover,
      audioSucesso,
      falaPlaceholderg,
      falaPlaceholderp
    }
  },
  methods: {
    audioClickPlay() {
      if (this.soundState) this.audioClick.play()
    },
    audioMaquinaPlay() {
      if (this.soundState) this.audioMaquina.play()
    },
    audioMaximinizarPlay() {
      if (this.soundState) this.audioMaximinizar.play()
    },
    audioMaximizarfotoPlay() {
      if (this.soundState) this.audioMaximizarfoto.play()
    },
    audioMouseoverPlay() {
      if (this.soundState) this.audioMouseover.play()
    },
    audioSucessoPlay() {
      if (this.soundState) this.audioSucesso.play()
    },
    falaPlaceholdergPlay() {
      if (this.soundState) this.falaPlaceholderg.play()
    },
    falaPlaceholderpPlay() {
      if (this.soundState) this.falaPlaceholderp.play()
    }
  }
}

export default audios
