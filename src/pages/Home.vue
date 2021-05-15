<template>
  <section class="container">
    <div class="left-content">
      <button class="btn primary btn-inicio">
        <div class="icon iconeinicio"></div>
        <div class="text">Início</div>
      </button>
      <div class="btn-ajuda"></div>
      <button class="btn primary btn-som">
        <div class="icon iconesomon"></div>
        <div class="text">Som</div>
      </button>
      <button class="btn primary btn-creditos">
        <div class="icon iconecreditos"></div>
        <div class="text t10">Créditos</div>
      </button>
    </div>
    <div class="center-content">
      <div class="titulo"></div>
      <div class="tela">
        <div v-if="showInformationMachine" class="information-tela">
          {{ information }}
        </div>
      </div>
      <div class="maquina"></div>
    </div>
    <div class="right-content">
      <div
        v-for="foto in fotos"
        :key="foto.id"
        class="draggable-photo"
        @mouseenter="showInformation(foto)"
        @mouseleave="hideInformation(foto)"
      >
        <div :class="foto.image"></div>
      </div>
    </div>
    <PopUpImages
      v-if="showPopUpImage"
      :is-showed="showPopUpImage"
      :element="fotos[4]"
    ></PopUpImages>
  </section>
</template>
<script>
import { fotos } from '../consts/home'
import PopUpImages from '../components/PopUpImages.vue'
export default {
  components: { PopUpImages },
  data() {
    return {
      showPopUpImage: false,
      showInformationMachine: false,
      information: '',
      fotos
    }
  },
  methods: {
    showInformation(foto) {
      this.information = foto.name
      this.showInformationMachine = true
    },
    hideInformation(foto) {
      this.showInformationMachine = false
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
  .btn-inicio {
    position: absolute;
    left: 40px;
    top: 40px;
  }

  .btn-som {
    position: absolute;
    left: 40px;
    top: 573px;
  }

  .btn-creditos {
    position: absolute;
    left: 40px;
    top: 660px;
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
  }
  .tela {
    position: absolute;
    left: 196px;
    top: 128px;

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
}
</style>
