<template>
  <div class="form-element">
    <p class="warn"></p>
    <label>{{ label }}</label>

    <template v-for="item of checks" :key="item.value">
      {{ item.label }} <input type="checkbox" :name="name" :value="item.value">
    </template>



    <i class="fa fa-check"></i>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  name: String,
  checks: Array
})
</script>

<style lang="scss" scoped></style>