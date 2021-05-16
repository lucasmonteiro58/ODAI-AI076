<template>
  <section class="container">
    <div class="backdrop"></div>
    <div class="content" :class="computedHelp[index].class">
      <div v-if="isInitial && index === 0" class="bemvindo">
        SEJA BEM VINDA! SEJA BEM VINDO!
      </div>
      <div class="btn-wrong" @click.prevent="clickClose"></div>
      <div
        class="image-eureka"
        :class="[computedHelp[index].image, computedHelp[index].class]"
      ></div>
      <div
        class="text-section"
        :class="[
          computedHelp[index].class,
          { initial: isInitial && index === 0 }
        ]"
        v-html="computedHelp[index].text"
      ></div>
      <div class="button-section">
        <div class="top">
          <button v-if="index !== 0" class="btn voltar" @click="voltarClick">
            <div class="text">Voltar</div>
          </button>
          <button class="btn voltar" @click="avancarClick">
            <div class="text">{{ nxtBtn }}</div>
          </button>
        </div>
        <button
          class="btn primary btn-ouvir"
          :class="{ parar: ouvindo }"
          @click.prevent="ouvir"
        >
          <div class="icon iconeouvir"></div>
          <div class="text">{{ btnName }}</div>
        </button>
      </div>
    </div>
    <div class="protection"></div>
  </section>
</template>
<script>
import { helpsInicio, helps } from '../consts/help'
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    isInitial: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      helps,
      helpsInicio,
      ouvindo: false
    }
  },
  computed: {
    nxtBtn() {
      if (this.index === this.computedHelp.length - 1) return 'Vamos lá'
      else return 'Avançar'
    },
    computedHelp() {
      if (this.isInitial) return helpsInicio
      else return helps
    },
    btnName() {
      if (!this.ouvindo) return 'ouvir'
      else return 'parar'
    }
  },
  mounted() {},
  methods: {
    voltarClick() {
      this.$emit('voltar')
    },
    clickClose() {
      this.$emit('close')
    },
    avancarClick() {
      this.$emit('avancar')
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
.container {
  @include flex-center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  .backdrop {
    position: absolute;
    background-color: #ffffffa1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 650;
  }

  .protection {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 701;
  }

  .content {
    background: #59c1da;
    border-radius: 16px;
    position: absolute;
    padding: 40px;
    display: flex;
    justify-content: center;
    z-index: 702;

    &.help-0 {
      width: 703px;
      height: 563px;
      left: 156px;
      top: 59px;
    }

    &.help-1 {
      width: 460px;
      height: 255px;
      left: 40px;
      top: 267px;
    }

    &.help-2 {
      width: 462px;
      height: 318px;
      left: 522px;
      top: 39px;
    }

    &.help-3 {
      width: 470px;
      height: 355px;
      left: 201px;
      top: 286px;
    }
  }
}

.btn-wrong {
  position: absolute;
  top: -10px;
  right: -10px;
  cursor: pointer;

  &:hover {
    filter: brightness(120%);
  }
}

.image-eureka {
  position: absolute;

  &.help-0 {
    top: 46px;
    left: 29px;
  }

  &.help-1 {
    top: 12px;
    left: 477px;
  }

  &.help-2 {
    top: 12px;
    left: -400px;
  }

  &.help-3 {
    top: -247px;
    left: 74px;
  }
}

.text-section {
  font-weight: 200;
  font-size: 18px;
  line-height: 25px;

  &.initial {
    width: 372px;
    position: absolute;
    right: 39px;
    top: 152px;
  }
}

.button-section {
  position: absolute;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  gap: 10px;
  bottom: -94px;

  .top {
    display: flex;
    gap: 12px;
  }
}

.btn-ouvir {
  &.parar {
    background-color: #e85243;
    &:hover {
      background-color: #f3a7a0;
    }
  }
}

.bemvindo {
  position: absolute;
  width: 336px;
  left: 322px;
  top: 42px;
  font-family: Oxanium;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 45px;
  color: #ffffff;
  text-align: right;
}
</style>
