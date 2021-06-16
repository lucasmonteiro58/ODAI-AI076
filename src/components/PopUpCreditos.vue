<template>
  <div v-show="showed" class="pop-up">
    <div class="backdrop"></div>
    <div class="content">
      <div class="title">Créditos</div>
      <div class="list-creditos">
        <div class="ftd-creditos">
          <div class="logo-ftd-small"></div>
          <p>
            <span class="cargo">Diretor-geral --- </span> Ricardo Tavares de
            Oliveira
          </p>
          <p>
            <span class="cargo">Diretor adjunto de Sistema de Ensino ---</span>
            Cayube Galas
          </p>
          <p>
            <span class="cargo">Gerente de conteúdo ---</span> Cíntia Cristina
            Bagatin Lapa
          </p>
          <p><span class="cargo">Editora ---</span> Luzia Estevão Garcia</p>
          <p><span class="cargo">Roteiro ---</span> Audrey Ribas Camargo</p>
          <p><span class="cargo">Ilustração ---</span> Pulo do Gato</p>
          <p>
            <span class="cargo">Produção e programação --- </span> Desenrolado
          </p>
          <p>
            <span class="cargo">Assistente editorial --- </span> Juliana
            Oliveira
          </p>
          <p>
            <span class="cargo">Supervisora de preparação e revisão ---</span>
            Nathalia Ferrarezi
          </p>
          <p><span class="cargo">Preparação e revisão --- </span> Equipe FTD</p>
          <p>
            <span class="cargo">Supervisor de desenvolvimento --- </span> André
            Luís Machado
          </p>
          <p>
            <span class="cargo">
              Supervisora de conteúdos e publicação digital ---
            </span>
            Janaina Chervezan da Costa
          </p>
          <p>
            <span class="cargo">Analista de solução digital --- </span> Willian
            Jun Sugiyama
          </p>
          <p>
            <span class="cargo">Analista desenvolvedor --- </span> Rafael
            Cardoso da Silva
          </p>
          <p>
            <span class="cargo">Gerente de produção e design --- </span> Letícia
            Mendes de Souza
          </p>
          <p>
            <span class="cargo">Coordenadora de imagens e textos ---</span>
            Marcia Berne
          </p>
          <p>
            <span class="cargo">Supervisor de audiovisual ---</span> Diego
            Morgado de Oliveira
          </p>
        </div>
        <br />
        <br />

        <b class="title-strong"> ------ FOTOGRAFIAS ------ </b>
        <p class="subtitle">PRÉDIOS DAS ESCOLAS</p>
        <p>
          Esquerda: Centro de Memória Unicamp
        </p>
        <p>Direita: Museu da Imigração</p>

        <br />
        <p class="subtitle">ALUNAS E ALUNOS</p>
        <p>
          Esquerda: Amoret Tanner Collection /Alamy/ Fotoarena
        </p>
        <p>
          Direita: The Print Collector/Getty Images
        </p>
        <br />

        <p class="subtitle">
          ATIVIDADES
        </p>
        <p>
          Esquerda: Amoret Tanner Collection /Alamy/ Fotoarena
        </p>
        <p>
          Direita: The Print Collector/Getty Images
        </p>
        <br />

        <p class="subtitle">
          AULAS
        </p>
        <p>
          Esquerda: Fox Photos/Getty Images
        </p>
        <p>
          Direita: Acervo Iconographia
        </p>
        <br />

        <p class="subtitle">
          DIRETORES E PROFESSORES
        </p>
        <p>
          Esquerda: Centro de Memória Unicamp
        </p>
        <p>
          Direita: Centro de Memória Unicamp
        </p>
        <br />
        <br />

        <b class="title-strong"> ------ IMAGENS VETORIAIS ------ </b>
        <p>Restart por Jejen Juliansyah Nur Agung do Noun Project</p>
        <p>Sound por Adrien Coquet do Noun Project</p>
        <p>Home por icongeek do Noun Project</p>
        <p>Ear por Jens Tärning do Noun Project</p>
        <p>Check por Robert Won do Noun Project</p>
        <p>Delete por Robert Won do Noun Project</p>
        <p>Scientists Characters Set por macrovector do Freepik.com</p>
        <p>Flat Laboratory Room with Microscope por freepik.com</p>
        <br />
        <br />

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

    .title {
      font-size: 32px;
      margin-top: -9px;
      margin-bottom: 23px;
      text-transform: uppercase;
      font-family: Oxanium;
    }

    .list-creditos {
      width: 90%;
      text-align: center;
      line-height: 18px;
      height: 540px;
      overflow: auto;

      p {
        text-transform: initial;
        margin-bottom: 3px;
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
  margin-bottom: 4px;
}

span {
  &.cargo {
    font-size: 15px;
  }
}

.ftd-creditos {
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
}

// .ftd-creditos {
//   p {
//     display: flex;
//     justify-content: space-between;
//     border-bottom: 1px solid black;
//   }
// }
</style>
