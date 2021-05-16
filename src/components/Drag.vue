<template>
  <div class="drag-wrap">
    <div
      ref="elDrag"
      :class="[classname, { completed: element.isCompleted }]"
      :data-transfer="dataTransfer"
      class="slot drag-el"
      draggable="false"
    >
      <div v-if="element.isCompleted" class="check"></div>
    </div>
  </div>
</template>
<script>
import interact from 'interactjs'
export default {
  props: {
    dataTransfer: {
      type: [Object, String],
      required: true
    },
    dropped: {
      type: Boolean,
      required: false,
      default: false
    },
    classname: {
      type: [String, Array],
      required: false,
      default: 'idle'
    },
    onendEvent: {
      type: Function,
      required: false,
      default() {
        return undefined
      }
    },
    onstartEvent: {
      type: Function,
      required: false,
      default() {
        return undefined
      }
    },
    isSigmoid: {
      type: Boolean,
      required: false,
      default: true
    },
    element: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dragging: false,
      initialSnapTarget: {
        targets: [{ x: 0, y: 0, range: Infinity }],
        relativePoints: [{ x: 0, y: 0 }],
        enabled: true,
        endOnly: true,
        offset: 'self'
      },
      sigmoidInterval: ''
    }
  },
  mounted() {
    interact(this.$el.firstChild).draggable({
      inertia: true,
      // snap: this.initialSnapTarget,
      restrict: {
        restriction: '#stage-container'
      },
      onmove: (event) => this.onMove(event),
      onstart: (event) => this.onStart(event),
      onend: (event) => this.onEnd(event)
    })
  },
  methods: {
    resetPosition() {
      const target = this.$refs.elDrag
      target.style.transform = `translate(0px, 0px)`
      target.setAttribute('data-x', 0)
      target.setAttribute('data-y', 0)
      target.classList.remove('can-drop')
      target.parentElement.parentElement.style.zIndex = '100'
    },
    onMove(event) {
      const target = event.target
      const dataX = target.getAttribute('data-x')
      const dataY = target.getAttribute('data-y')
      const initialX = parseFloat(dataX) || 0
      const initialY = parseFloat(dataY) || 0
      const deltaX = event.dx
      const deltaY = event.dy
      // width height fixed
      const widthRatio = window.innerWidth / 1024
      const heightRatio = window.innerHeight / 768
      const min = Math.min(widthRatio, heightRatio)
      const newX = initialX + deltaX / min
      const newY = initialY + deltaY / min
      target.style.transform = `translate(${newX}px, ${newY}px)`
      target.setAttribute('data-x', newX)
      target.setAttribute('data-y', newY)
    },
    onStart(event) {
      const target = event.target
      target.classList.add('start-drag')
      event.target.style.transition = '0s'
    },
    onEnd(event) {
      const target = event.target
      target.classList.remove('start-drag')

      if (target.classList.contains('can-drop')) {
        target.classList.remove('start-drag')
      } else {
        setTimeout(() => {
          target.setAttribute('data-x', 0)
          target.setAttribute('data-y', 0)
          target.style.transition = '0.5s'
          target.style.transform = 'translate(0px, 0px)'
        }, 10)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
[draggable='false'] > * {
  pointer-events: none;
  pointer-events: visible;
}
.slot {
  z-index: 100;
  touch-action: none;
  user-select: none;
  pointer-events: visible;
}

.check {
  position: absolute;
  top: -1px;
  left: 148px;
}

.drag-el {
  position: relative;
}

.completed {
  border: 2px solid #a4e34b;
  box-shadow: inset 0px 0px 0px 9px #a4e34b;
}

.start-drag {
  z-index: 200;
}

.drag-wrap {
  display: flex;
  align-items: center;
  justify-items: center;
  z-index: 102;
  pointer-events: visible;
  .can-drop {
    display: flex;
    align-items: center;
    justify-content: center;
    &:not(.dragging) {
      &:hover {
        .btn-apagar-forma {
          display: block;
        }
      }
    }
  }
  .dragging {
    &.can-drop {
      filter: brightness(120%) saturate(110%)
        drop-shadow(1px 1px 10px rgb(255, 255, 0));
    }
  }
}
.empty-space {
  position: absolute;
  z-index: 10;
}
.class-can-drop {
  filter: brightness(350%) drop-shadow(0px 0px 5px rgb(255, 255, 62));
}
</style>
