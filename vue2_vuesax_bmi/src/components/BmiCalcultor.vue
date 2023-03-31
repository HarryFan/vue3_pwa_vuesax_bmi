<template>
  <div class="bmi-calculator">
    <vs-input v-model="height" label="身高 (公分)" placeholder="輸入身高" type="number" :min="1" :max="300" step="0.1"
      style="margin-bottom: 1rem;" />
    <vs-input v-model="weight" label="體重 (公斤)" placeholder="輸入體重" type="number" :min="1" :max="500" step="0.1"
      style="margin-bottom: 1rem;" />

    <vs-button color="primary" style="margin-bottom: 1rem;" @click="calculateBMI">計算 BMI</vs-button>
    <div v-if="bmi" class="result">
      <h2 class="result__title">BMI 指數：{{ bmi.toFixed(1) }}</h2>
      <h3 class="result__category">分類：{{ bmiCategory }}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        weight: null,
        height: null,
        bmi: null,
        bmiCategory: null,
      };
    },
    methods: {
      calculateBMI() {
        if (this.weight && this.height) {
          const heightInMeters = this.height / 100;
          this.bmi = this.weight / (heightInMeters * heightInMeters);

          if (this.bmi < 18.5) {
            this.bmiCategory = '體重過輕';
          } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
            this.bmiCategory = '正常體重';
          } else if (this.bmi >= 24.9 && this.bmi < 29.9) {
            this.bmiCategory = '過重';
          } else {
            this.bmiCategory = '肥胖';
          }
        }
      },
    },
  };
</script>

<style scoped>
  .bmi-calculator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
  }

  .result {
    margin-top: 2rem;
    text-align: center;
  }

  .result__title {
    font-size: 2rem;
    font-weight: bold;
  }

  .result__category {
    font-size: 1.5rem;
  }
</style>