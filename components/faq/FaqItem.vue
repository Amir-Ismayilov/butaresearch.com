<template>
  <div class="faq-item">
    <div class="faq-question" @click="toggleFaq">
      {{ question }}
      <i :class="{'fa fa-chevron-up': open, 'fa fa-chevron-down': !open}"></i>
    </div>

    <div class="faq-answer" :class="{'open': open}">
      <hr>
      <span v-html="answer"></span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    question: String,
    answer: String,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggleFaq() {
      // Закрыть все другие элементы перед открытием текущего
      this.$parent.$children.forEach((item) => {
        if (item !== this) {
          item.open = false;
        }
      });
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
.faq-item {
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.07);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.07);
}

.faq-question {
  padding: 13px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  font-weight: 600;
  color: var(--light-mode-color-4);
}

.faq-question i {
  font-size: 14px;
  transition: transform 0.3s;
}

.faq-answer {
  display: none;
  padding: 10px;
  max-height: 0;
  overflow: hidden;
  /*border-top: 1px solid #000000;*/
  transition: max-height 0.5s; /* Анимация разворачивания/сворачивания ответа */
}

.faq-answer.open {
  line-height: 1.8;
  font-size: 15px;
  color: #444444;
  display: block;
  text-align: justify;
  max-height: 1000px;
}

.faq-question.open i {
  transform: rotate(180deg);
}

hr {
  margin-top: 0;
  margin-bottom: 10px;
}
</style>
