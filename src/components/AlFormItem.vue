<template>
  <div>
    <label>{{ label }}</label>
    <slot></slot>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    }
  },
  created() {
    console.log(this.form, '----')
  }
}
</script>

<style lang="scss" scoped></style>
