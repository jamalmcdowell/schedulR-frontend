<template lang="html">
  <form class="addEvent" @submit="addEvent">
    <input type="text" name="name" v-model="name" placeholder="Name of Event...">
    <input type="text" name="description" v-model="description" placeholder="What are you doing on that day?">
    <select  name="day" v-model="day">
        <option value=0>Sunday</option>
        <option value=1>Monday</option>
        <option value=2>Tuesday</option>
        <option value=3>Wednesday</option>
        <option value=4>Thursday</option>
        <option value=5>Friday</option>
        <option value=6>Saturday</option>
    </select>
    <input type="submit" />
  </form>
</template>

<script>
export default {
  name: 'addEvent',
  data() {

    return{
    name: '',
    description: '',
    day: 0,
    finished:false
  }
  },
  methods: {
    addEvent(e){
      e.preventDefault()
      const newEvent = {
        name: this.name,
        description: this.description,
        day: this.day,
        finished: false
      }
      this.$emit('add-event', newEvent)
      // reset
      this.name= '',
      this.description= '';

    }
  }
}
</script>

<style lang="css" scoped>
</style>
