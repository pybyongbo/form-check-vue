<template>
  <div class="form-element">
    <p class="warn"></p>
    <label>{{ label }}</label>
    <select :name="name">

      <option v-for="item of options" :key="item.value" :value="item.value">
        {{ item.label }}
      </option>

    </select>

    <i class="fa fa-check"></i>
  </div>
</template>

<script setup>

const props = defineProps({
  label: String,
  name: String,
  options: Array
})

</script>

<style lang="scss" scoped></style>