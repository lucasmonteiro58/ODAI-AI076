<template>
  <div v-show="showed" class="pop-up">
    <div class="backdrop"></div>
    <div class="content">
      <div class="eureka"></div>
      <div class="content-popup">
        <div class="title-popup">QUE MARAVILHA!</div>
        <div class="subtitle-popup">
          VOCÊ FEZ UMA BELA VIAGEM <br />
          PELO PASSADO.
        </div>
        <div class="premio"></div>
        <div class="text-popup">
          GOSTOU DA MINHA INVENÇÃO? <br /><br />INFELIZMENTE AS MÁQUINAS DO
          TEMPO NÃO EXISTEM. MAS SERIA DIVERTIDO SE EXISTISSEM, NÃO É MESMO?
          HAHAHAHA <br /><br />
          CLIQUE NO BOTÃO VOLTAR PARA NOVAMENTE AS FOTOGRAFIAS!
        </div>
        <button
          class="btn primary btn-ouvir"
          :class="{ parar: ouvindo }"
          @click.prevent="ouvir"
        >
          <div class="icon iconeouvir"></div>
          <div class="text">{{ btnName }}</div>
        </button>
        <button class="btn voltar btn-voltar" @click.prevent="close">
          <div class="text">Voltar</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { fadeOut, fromTop } from '../assets/animate'
export default {
  name: 'PopUpCongrats',
  props: {
    isShowed: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      showed: false,
      ouvindo: false
    }
  },
  computed: {
    btnName() {
      if (!this.ouvindo) return 'ouvir'
      else return 'parar'
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
      fromTop(this.$el.lastChild)
    },
    close() {
      this.$emit('close')
    },
    ouvir() {
      if (this.ouvindo) {
        this.$emit('ouvir')
        this.ouvindo = false
      } else {
        this.$emit('parar')
        this.ouvindo = true
      }
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
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;

  .backdrop {
    position: absolute;
    background-color: #ffffffbb;
    width: 100%;
    height: 100%;
  }

  .content {
    position: relative;
    width: 703px;
    height: 563px;
    background: #59c1da;
    border-radius: 16px;

    .eureka {
      position: absolute;
      top: 44px;
      left: 43px;
    }

    .content-popup {
      width: 382px;
      height: 485px;
      position: absolute;
      right: 30px;
      top: 40px;
      display: flex;
      flex-direction: column;

      .title-popup {
        text-align: right;
        font-size: 32px;
        margin-bottom: 15px;
      }

      .subtitle-popup {
        text-align: right;
        font-size: 17px;
        font-weight: 200;
      }

      .premio {
        position: absolute;
        top: 105px;
        right: 0px;
      }

      .text-popup {
        font-size: 17px;
        font-weight: 200;
        margin-top: 172px;
      }

      .btn-voltar {
        position: absolute;
        bottom: -56px;
        left: -27px;
      }

      .btn-ouvir {
        position: absolute;
        top: 424px;
        right: 11px;

        &.parar {
          background-color: #e85243;
          &:hover {
            background-color: #f3a7a0;
          }
        }
      }
    }
  }
}
</style>
