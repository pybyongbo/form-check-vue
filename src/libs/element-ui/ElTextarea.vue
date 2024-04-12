<template>
  <div class="form-element">
    <p class="warn"></p>
    <label>{{ label }}</label>
    <textarea :name="id" :id="id" :cols="colNum" :rows="rowNum" :placeholder="placeholder"></textarea>
    <i class="fa fa-check"></i>
  </div>
</template>

<script setup>

const props = defineProps({
  id: String,
  label: String,
  name: String,
  placeholder: String,
  colNum: Number,
  rowNum: Number
})

</script>

<style lang="scss" scoped></style>