<template>
  <div class="form-element">
    <button :type="type" :id="id" :disabled="disabled">
      <slot></slot>
    </button>
  </div>
</template>

<script setup>

const props = defineProps({
  id: String,
  type: {
    type: String,
    validate: (value) => ['submit', 'button', 'reset', 'image'].includes(value)
  },
  disabled: Boolean,
})

</script>

<style lang="scss" scoped></style>