/* eslint-disable import/no-duplicates */
import { useSound } from '@vueuse/sound'

import click from '../assets/audios/click.wav'
import maquina from '../assets/audios/maquina.wav'
import maximizar from '../assets/audios/maximizar.wav'
import maximizarfoto from '../assets/audios/maximizarfoto.wav'
import mouseover from '../assets/audios/mouseover.wav'
import sucesso from '../assets/audios/sucesso.wav'
import minimizar from '../assets/audios/minimizar.wav'

import placeholderg from '../assets/audios/placeholderg.wav'
import placeholderp from '../assets/audios/placeholderp.wav'

// mudar audios falas aqui
import imagepredios from '../assets/audios/placeholderg.wav'
import imagealunos from '../assets/audios/placeholderg.wav'
import imageatividades from '../assets/audios/placeholderg.wav'
import imagediretores from '../assets/audios/placeholderg.wav'
import imageaulas from '../assets/audios/placeholderg.wav'

import audiocongrats from '../assets/audios/placeholderg.wav'

import ajuda0 from '../assets/audios/placeholderg.wav'
import ajuda1 from '../assets/audios/placeholderg.wav'
import ajuda2 from '../assets/audios/placeholderg.wav'
import ajuda3 from '../assets/audios/placeholderg.wav'

import nomepredios from '../assets/audios/placeholderp.wav'
import nomealunos from '../assets/audios/placeholderp.wav'
import nomeatividades from '../assets/audios/placeholderp.wav'
import nomediretores from '../assets/audios/placeholderp.wav'
import nomeaulas from '../assets/audios/placeholderp.wav'

const audios = {
  setup() {
    const audioClick = useSound(click)
    const audioMaquina = useSound(maquina)
    const audioMaximinizar = useSound(maximizar)
    const audioMaximizarfoto = useSound(maximizarfoto)
    const audioMouseover = useSound(mouseover)
    const audioSucesso = useSound(sucesso)
    const audioMinimizar = useSound(minimizar)

    const falaPlaceholderg = useSound(placeholderg)
    const falaPlaceholderp = useSound(placeholderp)

    const falaPredios = useSound(imagepredios)
    const falaAlunos = useSound(imagealunos)
    const falaAtividades = useSound(imageatividades)
    const falaDiretores = useSound(imagediretores)
    const falaAulas = useSound(imageaulas)

    const falaCongrats = useSound(audiocongrats)

    const falaAjuda0 = useSound(ajuda0)
    const falaAjuda1 = useSound(ajuda1)
    const falaAjuda2 = useSound(ajuda2)
    const falaAjuda3 = useSound(ajuda3)

    const nomePredios = useSound(nomepredios)
    const nomeAlunos = useSound(nomealunos)
    const nomeAtividades = useSound(nomeatividades)
    const nomeDiretores = useSound(nomediretores)
    const nomeAulas = useSound(nomeaulas)

    return {
      audioClick,
      audioMaquina,
      audioMaximinizar,
      audioMaximizarfoto,
      audioMouseover,
      audioMinimizar,
      audioSucesso,
      falaPredios,
      falaAlunos,
      falaAtividades,
      falaDiretores,
      falaAulas,
      falaPlaceholderg,
      falaPlaceholderp,
      falaCongrats,
      falaAjuda0,
      falaAjuda1,
      falaAjuda2,
      falaAjuda3,
      nomePredios,
      nomeAlunos,
      nomeAtividades,
      nomeDiretores,
      nomeAulas
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
    playFalaCongrats() {
      if (this.soundState) this.falaCongrats.play()
    },
    stopFalaCongrats() {
      if (this.soundState) this.falaCongrats.stop()
    },
    playFalaImages(el) {
      if (this.soundState) {
        if (el === 'ilustrapredio') this.falaPredios.play()
        else if (el === 'ilustraalumni') this.falaAlunos.play()
        else if (el === 'ilustraatividade') this.falaAtividades.play()
        else if (el === 'ilustraaula') this.falaAulas.play()
        else if (el === 'ilustraprofs') this.falaDiretores.play()
      }
    },
    stopFalaImages(el) {
      if (this.soundState) {
        if (el === 'ilustrapredio') this.falaPredios.stop()
        else if (el === 'ilustraalumni') this.falaAlunos.stop()
        else if (el === 'ilustraatividade') this.falaAtividades.stop()
        else if (el === 'ilustraaula') this.falaAulas.stop()
        else if (el === 'ilustraprofs') this.falaDiretores.stop()
      }
    },
    playAjudaAudio(el) {
      if (this.soundState) {
        if (el === 0) this.falaAjuda0.play()
        else if (el === 1) this.falaAjuda1.play()
        else if (el === 2) this.falaAjuda2.play()
        else if (el === 3) this.falaAjuda3.play()
      }
    },
    stopAjudaAudio(el) {
      if (this.soundState) {
        if (el === 0) this.falaAjuda0.stop()
        else if (el === 1) this.falaAjuda1.stop()
        else if (el === 2) this.falaAjuda2.stop()
        else if (el === 3) this.falaAjuda3.stop()
      }
    },
    playNomeImage(el) {
      if (this.soundState) {
        if (el === 'ilustrapredio') this.nomePredios.play()
        else if (el === 'ilustraalumni') this.nomeAlunos.play()
        else if (el === 'ilustraatividade') this.nomeAtividades.play()
        else if (el === 'ilustraaula') this.nomeAulas.play()
        else if (el === 'ilustraprofs') this.nomeDiretores.play()
      }
    },
    stopNomeImage(el) {
      if (this.soundState) {
        if (el === 'ilustrapredio') this.nomePredios.stop()
        else if (el === 'ilustraalumni') this.nomeAlunos.stop()
        else if (el === 'ilustraatividade') this.nomeAtividades.stop()
        else if (el === 'ilustraaula') this.nomeAulas.stop()
        else if (el === 'ilustraprofs') this.nomeDiretores.stop()
      }
    },
    audioMinimizarFotoPlay() {
      if (this.soundState) this.audioMinimizar.play()
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
    },
    falaPlaceholderpStop() {
      if (this.soundState) this.falaPlaceholderp.stop()
    },
    falaPlaceholdergStop() {
      if (this.soundState) this.falaPlaceholderg.stop()
    }
  }
}

export default audios
