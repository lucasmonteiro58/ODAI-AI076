<template>
  <div class="inicio-content">
    <div class="bginicial"></div>
    <div class="titulo"></div>
    <div class="btn-iniciar" @click.prevent="iniciar"></div>
    <div class="container-cientista">
      <div class="cientista-braco"></div>
      <div class="cientista-corpo"></div>
      <div class="cientista-cabeca"></div>
    </div>
    <div class="sombra"></div>
    <div class="maquina"></div>
  </div>
</template>

<script>
export default {
  name: 'Inicio',
  data() {
    return {}
  },
  mounted() {},
  methods: {
    iniciar() {
      this.$emit('iniciar')
    }
  }
}
</script>

<style lang="scss" scoped>
.inicio-content {
  position: absolute;
  background-color: #fff;
  top: 0;
  left: 0;
  z-index: 400;

  .bg-inicial {
    position: absolute;
    top: 0;
    left: 0;
  }

  .titulo {
    position: absolute;
    left: 261px;
    top: 40px;
  }

  .container-cientista {
    position: absolute;
    width: 259px;
    height: 498px;
    top: 253px;
    left: 150px;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.452));

    .cientista-corpo {
      position: absolute;
      bottom: 0;
    }

    .cientista-braco {
      position: absolute;
      top: 3px;
      right: 20px;
      animation: bracoMovimento linear 3s;
      animation-iteration-count: infinite;
      transform-origin: 0% 100%;
    }

    .cientista-cabeca {
      position: absolute;
      top: 20px;
      left: 28px;
      animation: cabecaMovimento linear 2s;
      animation-iteration-count: infinite;
      // transform-origin: 0% 100%;
    }
  }

  .maquina {
    position: absolute;
    top: 260px;
    left: 481px;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.452));
  }

  .sombra {
    position: absolute;
    top: 703px;
    left: 481px;
  }

  .btn-iniciar {
    position: absolute;
    left: 401px;
    top: 164px;
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.452));
    cursor: pointer;

    &:hover {
      filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.452)) brightness(125%);
    }
  }
}

@keyframes bracoMovimento {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(40deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes cabecaMovimento {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
