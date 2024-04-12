<template>
  <div class="form-element">
    <p class="warn"></p>
    <label>{{ label }}</label>
    <input :type="type" :id="id" :name="name" :placeholder="placeholder" class="inputText">
    <i class="fa fa-check"></i>
  </div>
</template>

<script setup>

const props = defineProps({
  id: String,
  label: String,
  name: String,
  placeholder: String,
  type: {
    type: String,
    validator: (value) => ['text', 'number', 'email', 'phone'].includes(value)
  }
})

</script>

<style lang="scss" scoped></style>