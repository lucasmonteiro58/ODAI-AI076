<template>
  <div v-show="showed" class="pop-up">
    <div class="backdrop"></div>
    <div ref="content" class="content">
      <div class="title">
        <span>{{ element.name }}</span>
      </div>
      <div class="image-section">
        <div class="container" @mouseenter="hoverImage1">
          <div class="imagem" :class="element.foto1pequena"></div>
          <div
            class="legenda"
            :class="{ t11: element.id === 4 || element.id === 2 }"
          >
            {{ element.legenda1 }}
          </div>
        </div>
        <div class="container" @mouseenter="hoverImage2">
          <div class="imagem" :class="element.foto2pequena"></div>
          <div class="legenda" :class="{ t11: element.id === 4 }">
            {{ element.legenda2 }}
          </div>
        </div>
      </div>
      <div class="text-description" v-html="element.text"></div>
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
    <div v-if="showImage1" class="image-hover">
      <div class="imagem" :class="element.foto1"></div>
      <div class="legenda" :class="{ t11: element.id === 4 }">
        {{ element.legenda1 }}
      </div>
    </div>
    <div v-if="showImage2" class="image-hover">
      <div class="imagem" :class="element.foto2"></div>
      <div class="legenda" :class="{ t11: element.id === 4 }">
        {{ element.legenda2 }}
      </div>
    </div>
  </div>
</template>

<script>
import { fadeOut, scaleIn } from '../assets/animate'
export default {
  name: 'PopUpOpcoes',
  props: {
    isShowed: {
      type: Boolean,
      required: false,
      default: true
    },
    element: {
      type: Object,
      requerid: true,
      default: () => {}
    }
  },
  data() {
    return {
      showed: false,
      ouvindo: false,
      showImage1: false,
      showImage2: false
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
      scaleIn(this.$refs.content)
    },
    close() {
      this.$emit('close', this.element.image)
    },
    ouvir() {
      if (this.ouvindo) {
        this.$emit('ouvir')
        this.ouvindo = false
      } else {
        this.$emit('parar')
        this.ouvindo = true
      }
    },
    hoverImage1() {
      this.showImage1 = true
    },
    hoverImage2() {
      this.showImage2 = true
    }
  }
}
</script>

<style lang="scss" scoped>
.title-popup {
  font-size: 32px;
}

.image-hover {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffffffbb;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .legenda {
    width: 618px;
    height: 97.45px;
    background: #e5ddc7;
    border: 3px solid #000000;
    box-sizing: border-box;
    border-radius: 0px 0px 8px 8px;
    font-family: Confortaa;
    font-weight: 600;
    font-size: 22px;
    color: #000000;
    margin-top: -5px;
    padding: 10px 5px;
  }
}
.pop-up {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  .backdrop {
    position: absolute;
    background-color: #ffffffa2;
    width: 100%;
    height: 100%;
  }

  .content {
    width: 781px;
    height: 627px;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.25));
    background: #5dc5de;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    border: 14px solid #299fbc;
    border-radius: 25px;
    .title {
      width: 631px;
      height: 95px;
      left: 201px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      span {
        font-family: Oxanium;
        font-weight: bolder;
        font-size: 48px;
        line-height: 60px;
        color: #ffffff;
      }
    }

    .image-section {
      display: flex;
      justify-content: space-between;
      width: 632px;

      .container {
        display: flex;
        flex-direction: column;
        position: relative;
        filter: drop-shadow(10px 10px 3px rgba(0, 0, 0, 0.25));

        .legenda {
          width: 301px;
          height: 47.16px;
          background: #e5ddc7;
          border: 3px solid #000000;
          box-sizing: border-box;
          border-radius: 0px 0px 8px 8px;
          margin-top: -8px;
          padding: 4px;

          font-family: Confortaa;
          font-weight: 600;
          font-size: 13px;
          color: #000000;

          &.t11 {
            font-size: 11px;
          }
        }
      }
    }

    .text-description {
      width: 621px;
      position: absolute;
      top: 356px;
      font-size: 19px;
      line-height: 25px;
      font-style: normal;
    }

    .btn-ouvir {
      position: absolute;
      bottom: 25px;

      &.parar {
        background-color: #e85243;
        &:hover {
          background-color: #f3a7a0;
        }
      }
    }

    .btn-voltar {
      position: absolute;
      bottom: -25px;
    }
  }
}
</style>
