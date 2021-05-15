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
      <Drop class="maquina" @openPopUp="openPopUp"></Drop>
    </div>
    <div class="right-content">
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
        ></Drag>
      </div>
    </div>
    <PopUpImages
      v-if="showPopUpImage"
      :is-showed="showPopUpImage"
      :element="actualElementFoto"
      @close="closePopUpImage"
    ></PopUpImages>
  </section>
</template>
<script>
import { fotos } from '../consts/home'
import PopUpImages from '../components/PopUpImages.vue'
import Drag from '../components/Drag.vue'
import Drop from '../components/Drop.vue'
export default {
  components: { PopUpImages, Drag, Drop },
  data() {
    return {
      showPopUpImage: true,
      showInformationMachine: false,
      information: '',
      fotos,
      showDrags: true,
      actualElementFoto: fotos[0]
    }
  },
  methods: {
    showInformation(foto) {
      this.information = foto.name
      this.showInformationMachine = true
    },
    hideInformation() {
      this.showInformationMachine = false
    },
    openPopUp(el) {
      this.actualElementFoto = this.getFoto(el)
      this.showPopUpImage = true
    },
    closePopUpImage(el) {
      this.fotos.map((i) => {
        if (i.image === el) i.isCompleted = true
        return i
      })
      this.showDrags = false
      setTimeout(() => {
        this.showDrags = true
      }, 5)

      this.showPopUpImage = false
    },
    getFoto(el) {
      const fotinha = this.fotos.filter((i) => {
        return i.image === el
      })
      return fotinha[0]
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
