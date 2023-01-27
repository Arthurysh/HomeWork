<template>
  <MillionaireSection />
  <CalculatorSection/>
  <RandomizerSection />
</template>

<script>
import MillionaireSection from './components/Millionaire.vue';
import CalculatorSection from './components/Calculator.vue';
import RandomizerSection from './components/Randomizer.vue';

export default {
  name: 'App',
  components: {
    MillionaireSection,
    CalculatorSection,
    RandomizerSection
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
</style>
