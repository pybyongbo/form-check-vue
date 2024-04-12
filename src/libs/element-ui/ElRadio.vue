<template>
  <div class="form-element">
    <p class="warn"></p>
    <label>{{ label }}</label>
    <template v-for="item of radios" :key="item.value">
      {{ item.label }}<input type="radio" :name="name" :value="item.value">
    </template>

    <i class="fa fa-check"></i>
  </div>
</template>

<script setup>

const props = defineProps({
  label: String,
  name: String,
  radios: Array,
})

</script>

<style lang="scss" scoped></style>