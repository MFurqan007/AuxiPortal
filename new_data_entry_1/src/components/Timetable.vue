<template>
  <datepicker
    v-model="selected"
  />
</template>

<script>
import Datepicker from 'vue3-datepicker'
export default {
    components: {
    Datepicker
    },
    data() {
        return {
            picked: new Date(),
        }
    }
}

    // :locale="locale"
    // :upperLimit="to"
    // :lowerLimit="from"
    // :clearable="true" 

</script>

<style scoped>

</style>