<template >
  <div>
  <div class="name">
    {{event.name}}
  </div>
  <p>{{event.description}}</p>
  <div class="completeCheck">
  <label for="completed">Finished? </label>
  <input type="checkbox" name="completed" :val="event.finished" v-on:change="completeEvent"/>
</div>
</div>
</template>

<script>
export default {
  name: "RenderedEvent",
  props: ["event"],
  methods: {
    completeEvent(){
      this.event.finished = !this.event.finished
      this.$emit('finish-event')
    }
  }
}

</script>

<style lang="css" scoped>
.name{
  border-bottom: 1px solid black;
  font-size: 1em;
  font-weight: bold;
  padding: .3em;
  /* white-space: nowrap; */
}
.completeCheck{
  background-color: gray;
  color: white;
}
</style>
