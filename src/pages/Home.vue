<template>
  <section class="container">
    <div class="left-content" :class="classIndex">
      <button
        class="btn primary btn-inicio"
        @click.prevent="clickInicio"
        @mouseenter="mouseOverSong"
      >
        <div class="icon iconeinicio"></div>
        <div class="text">Início</div>
      </button>
      <div
        class="btn-ajuda"
        @click.prevent="clickOpenHelp"
        @mouseenter="mouseOverSong"
      ></div>
      <button
        class="btn primary btn-som"
        @click.prevent="toogleSound"
        @mouseenter="mouseOverSong"
      >
        <div class="icon" :class="soundClass"></div>
        <div class="text">Som</div>
      </button>
      <button
        class="btn primary btn-creditos"
        @click.prevent="openCreditos"
        @mouseenter="mouseOverSong"
      >
        <div class="icon iconecreditos"></div>
        <div class="text t10">Créditos</div>
      </button>
    </div>
    <div class="center-content">
      <div class="titulo" :class="classIndex"></div>
      <div class="tela" :class="classIndex">
        <div v-if="showInformationMachine" class="information-tela">
          {{ information }}
        </div>
      </div>
      <Drop
        :class="classIndex"
        class="maquina"
        @openPopUp="openPopUp"
        @dropou="droparAudio"
        @dropfinish="desativeBlock"
      ></Drop>
    </div>
    <div
      v-if="!showIniciar"
      class="right-content"
      :class="'index-help' + indexHelp + isInitialHelp"
    >
      <div
        v-for="foto in fotos"
        :key="foto.id"
        class="draggable-photo"
        @mouseenter="showInformation(foto)"
        @mouseleave="hideInformation(foto)"
      >
        <Drag
          v-if="showDrags"
          :data-transfer="foto.image"
          :classname="foto.image"
          :element="foto"
          @startdrag="startDrag(foto.image)"
        ></Drag>
      </div>
    </div>
    <PopUpImages
      v-if="showPopUpImage"
      :is-showed="showPopUpImage"
      :element="actualElementFoto"
      @hoverBtn="mouseOverSong"
      @close="closePopUpImage"
      @hover="hoverImage"
      @leave="leaveImage"
      @ouvir="ouvirAudioImage"
      @parar="pararAudioImage"
    ></PopUpImages>
    <Inicio
      v-if="showIniciar"
      @iniciar="iniciarApp"
      @hover="mouseOverSong"
    ></Inicio>
    <PopUpCongrats
      v-if="showPopUpCongrats"
      :is-showed="showPopUpCongrats"
      @close="closePopUpCongrats"
      @hover="mouseOverSong"
      @ouvir="ouvirFalaCongrats"
      @parar="pararFalaCongrats"
    ></PopUpCongrats>
    <Help
      v-if="showHelp"
      :index="indexHelp"
      :is-initial="isInitialHelp"
      @voltar="clickVoltarHelp"
      @close="clickCloseHelp"
      @avancar="clickAvancarHelp"
      @hover="mouseOverSong"
      @ouvir="ouvirFalaAjuda"
      @parar="pararFalaAjuda"
    ></Help>
    <PopUpCreditos
      v-if="showCreditos"
      :is-showed="showCreditos"
      @close="closeCreditos"
      @hover="mouseOverSong"
    ></PopUpCreditos>
    <div v-if="showBlock" class="block-images"></div>
  </section>
</template>
<script>
import { fotos } from '../consts/home'
import PopUpImages from '../components/PopUpImages.vue'
import Drag from '../components/Drag.vue'
import Drop from '../components/Drop.vue'
import PopUpCongrats from '../components/PopUpCongrats.vue'
import Help from '../components/Help.vue'
import PopUpCreditos from '../components/PopUpCreditos.vue'
import audios from '../mixins/audios'

export default {
  components: { PopUpImages, Drag, Drop, PopUpCongrats, Help, PopUpCreditos },
  mixins: [audios],
  data() {
    return {
      showPopUpImage: false,
      showInformationMachine: false,
      showPopUpCongrats: false,
      information: '',
      fotos,
      showDrags: true,
      actualElementFoto: fotos[0],
      showIniciar: true,
      isInitialHelp: true,
      indexHelp: 0,
      showHelp: false,
      showCreditos: false,
      showBlock: false,
      firstCongrats: true
    }
  },
  computed: {
    soundState() {
      return this.$store.state.soundState
    },

    soundClass() {
      if (this.soundState) return 'iconesomon'
      else return 'iconesomoff'
    },
    classIndex() {
      if (this.showHelp)
        return `index-help${this.indexHelp}${this.isInitialHelp}`
      else return ''
    }
  },
  methods: {
    droparAudio() {
      this.showBlock = true
      this.audioMaquinaPlay()
    },
    activeBlock() {
      this.showBlock = true
    },
    desativeBlock() {
      this.showBlock = false
    },
    startDrag(el) {
      this.stopNomeImage(el)
    },
    ouvirFalaAjuda(el) {
      this.playAjudaAudio(el)
    },
    pararFalaAjuda(el) {
      this.stopAjudaAudio(el)
    },
    ouvirFalaCongrats() {
      this.playFalaCongrats()
    },
    pararFalaCongrats() {
      this.stopFalaCongrats()
    },
    mouseOverSong() {
      this.audioMouseoverPlay()
    },
    ouvirAudioImage(image) {
      this.playFalaImages(image)
    },
    pararAudioImage(image) {
      this.stopFalaImages(image)
    },
    hoverImage() {
      this.audioMaximizarfotoPlay()
    },
    leaveImage() {
      this.audioMinimizarFotoPlay()
    },
    showInformation(foto) {
      this.information = foto.name
      this.showInformationMachine = true
      this.playNomeImage(foto.image)
    },
    hideInformation(foto) {
      this.showInformationMachine = false
      this.stopNomeImage(foto.image)
    },
    closeCreditos() {
      this.showCreditos = false
      this.audioClickPlay()
    },
    openCreditos() {
      this.showCreditos = true
      this.audioClickPlay()
    },
    toogleSound() {
      this.$store.commit('changeSoundState', !this.soundState)
      this.audioClickPlay()
    },
    closePopUpCongrats() {
      this.showPopUpCongrats = false
      this.audioClickPlay()
    },
    clickVoltarHelp() {
      this.indexHelp--
      this.audioClickPlay()
    },
    clickAvancarHelp() {
      this.audioClickPlay()
      if (this.isInitialHelp) {
        if (this.indexHelp === 3) {
          this.showHelp = false
          this.isInitialHelp = false
          this.indexHelp = 0
        } else {
          this.indexHelp++
        }
      } else if (this.indexHelp === 2) {
        this.showHelp = false
        this.indexHelp = 0
      } else {
        this.indexHelp++
      }
    },
    clickInicio() {
      // resetar app
      this.resetar()
      this.showIniciar = true
      this.audioClickPlay()
    },
    clickCloseHelp() {
      this.audioClickPlay()
      this.indexHelp = 0
      this.showHelp = false
      this.isInitialHelp = false
    },
    clickOpenHelp() {
      this.audioClickPlay()
      this.indexHelp = 0
      this.showHelp = true
    },
    iniciarApp() {
      this.audioClickPlay()
      this.showIniciar = false
      this.showHelp = true
    },

    openPopUp(el) {
      this.audioMaximinizarPlay()
      this.actualElementFoto = this.getFoto(el)
      this.showPopUpImage = true
    },
    closePopUpImage(el) {
      this.falaPlaceholdergStop()
      this.audioClickPlay()
      this.audioMinimizarFotoPlay()
      this.fotos.map((i) => {
        if (i.image === el) i.isCompleted = true
        return i
      })
      this.showDrags = false
      setTimeout(() => {
        this.showDrags = true
      }, 5)
      this.showPopUpImage = false
      this.verificarCompleto()
    },
    verificarCompleto() {
      let isComplete = true
      for (let i = 0; i < fotos.length; i++) {
        if (fotos[i].isCompleted === false) {
          isComplete = false
        }
      }
      if (isComplete && this.firstCongrats) {
        this.audioSucessoPlay()
        this.showPopUpCongrats = true
        this.firstCongrats = false
      }
    },
    getFoto(el) {
      const fotinha = this.fotos.filter((i) => {
        return i.image === el
      })
      return fotinha[0]
    },
    resetar() {
      this.isInitialHelp = true
      this.firstCongrats = true
      this.fotos.map((i) => {
        i.isCompleted = false
        return i
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  @include flex-center;
  flex-direction: column;
  padding: 40px 40px 0 40px;
}

.left-content {
  &.index-help3true {
    z-index: 700;
  }

  &.index-help2false {
    z-index: 700;
  }
  .btn-inicio {
    position: absolute;
    left: 40px;
    top: 40px;
  }

  .btn-som {
    position: absolute;
    left: 40px;
    top: 573px;
    z-index: 401;
  }

  .btn-creditos {
    position: absolute;
    left: 40px;
    top: 660px;
    z-index: 401;
  }

  .btn-ajuda {
    position: absolute;
    left: 7px;
    top: 284px;
    cursor: pointer;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25));
    &:hover {
      filter: brightness(130%) contrast(80%) saturate(100%)
        drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25));
    }
  }
}

.center-content {
  .titulo {
    position: absolute;
    left: 181px;
    top: 40px;

    &.index-help1true {
      z-index: 700;
    }

    &.index-help0false {
      z-index: 700;
    }
  }
  .tela {
    position: absolute;
    left: 196px;
    top: 128px;

    &.index-help1true {
      z-index: 700;
    }

    &.index-help0false {
      z-index: 700;
    }

    .information-tela {
      position: absolute;
      width: 444px;
      height: 27px;
      left: 6px;
      top: 71px;
      color: #e55347;
      font-size: 23px;
      font-weight: bold;
      text-align: center;
    }
  }
  .maquina {
    position: absolute;
    left: 181px;
    top: 260px;
    filter: drop-shadow(10px 10px 3px rgba(0, 0, 0, 0.25));

    &.index-help2true {
      z-index: 700;
    }

    &.index-help1false {
      z-index: 700;
    }
  }
}

.right-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 231px;
  height: 692px;
  left: 763px;
  top: 38px;

  &.index-help1true {
    z-index: 700;
  }

  &.index-help0false {
    z-index: 700;
  }
}

.block-images {
  position: absolute;
  z-index: 1000;
  width: 226px;
  height: 699px;
  top: 37px;
  right: 37px;
}
</style>
