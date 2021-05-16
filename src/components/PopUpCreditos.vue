<template>
  <div v-show="showed" class="pop-up">
    <div class="backdrop"></div>
    <div class="content">
      <div class="list-creditos">
        <div class="title">Créditos</div>
        <b class="title-strong"> ------ FOTOGRAFIAS ------ </b>
        <p class="subtitle">PRÉDIOS DAS ESCOLAS</p>
        <p>
          Esquerda: Centro de Memória Unicamp
        </p>
        <p>Direita: Museu da Imigração</p>

        <p class="subtitle">ALUNAS E ALUNOS</p>
        <p>
          Esquerda: Amoret Tanner Collection /Alamy/ Fotoarena
        </p>
        <p>
          Direita: The Print Collector/Getty Images
        </p>

        <p class="subtitle">
          ATIVIDADES
        </p>
        <p>
          Esquerda: Amoret Tanner Collection /Alamy/ Fotoarena
        </p>
        <p>
          Direita: The Print Collector/Getty Images
        </p>

        <p class="subtitle">
          AULAS
        </p>
        <p>
          Esquerda: Fox Photos/Getty Images
        </p>
        <p>
          Direita: Acervo Iconographia
        </p>

        <p class="subtitle">
          DIRETORES E PROFESSORES
        </p>
        <p>
          Esquerda: Centro de Memória Unicamp
        </p>
        <p>
          Direita: Centro de Memória Unicamp
        </p>

        <b class="title-strong"> ------ IMAGENS VETORIAIS ------ </b>
        <p>Restart por Jejen Juliansyah Nur Agung do Noun Project</p>
        <p>Sound por Adrien Coquet do Noun Project</p>
        <p>Home por icongeek do Noun Project</p>
        <p>Ear por Jens Tärning do Noun Project</p>
        <p>Check por Robert Won do Noun Project</p>
        <p>Delete por Robert Won do Noun Project</p>
        <p>Scientists Characters Set por macrovector do Freepik.com</p>
        <p>Flat Laboratory Room with Microscope por freepik.com</p>

        <b class="title-strong">------ ÁUDIOS ------ </b>
        <p>toggle 002 por Kenney Vleugels (Kenney.nl)</p>
        <p>Maximize 006 por Kenney Vleugels (Kenney.nl)</p>
        <p>Minimize 006 por Kenney Vleugels (Kenney.nl)</p>
        <p>tone1 por Kenney Vleugels (Kenney.nl)</p>
        <p>Eletronic Engine por Alphatone do Freesound.org</p>
        <p>Beep1 por Freezeman do Freesound.org</p>
        <p>Success por Maxmakessounds do Freesound.org</p>
      </div>
      <button
        class="btn voltar btn-voltar"
        @click.prevent="close"
        @mouseenter="mouseOverSong"
      >
        <div class="text">Voltar</div>
      </button>
    </div>
  </div>
</template>

<script>
import { fadeOut, scaleIn } from '../assets/animate'
export default {
  name: 'PopUpCreditos',
  props: {
    isShowed: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      showed: false
    }
  },
  watch: {
    isShowed(val, old) {
      if (!old && val) {
        this.showed = true
        this.showAnimation()
      } else if (old && !val) {
        this.showed = false
      }
    }
  },
  mounted() {
    if (this.isShowed) this.showed = true
    this.showAnimation()
  },
  beforeDestroy() {
    fadeOut(this.$el)
  },
  methods: {
    showAnimation() {
      scaleIn(this.$el.lastChild)
    },
    close() {
      this.$emit('close')
    },
    mouseOverSong() {
      this.$emit('hover')
    }
  }
}
</script>

<style lang="scss" scoped>
.title-popup {
  font-size: 32px;
}
.pop-up {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;

  .backdrop {
    position: absolute;
    background-color: #ffffff97;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .content {
    width: 781px;
    height: 704px;
    margin-top: -10px;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.25));
    background: #5dc5de;
    border-radius: 25px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;

    .btn-voltar {
      position: absolute;
      bottom: -18px;
    }

    .list-creditos {
      width: 90%;
      text-align: center;
      line-height: 18px;
      .title {
        font-size: 32px;
        margin-top: -9px;
        margin-bottom: 23px;
        text-transform: uppercase;
        font-family: Oxanium;
      }

      p {
        text-transform: initial;
      }

      .subtitle {
        font-size: 15px;
      }
    }
  }
}

.title-strong {
  font-size: 15px;
  margin-top: 17px;
}
</style>
