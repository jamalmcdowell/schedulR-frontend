<template >
  <div>
  <div v-bind:key="event.key" v-for="event in events.filter(event => event.day == this.num)" class="event" >
    <RenderedEvent :event="event" v-on:finish-event="$emit('finish-event', event.id)"/>
  </div>
  </div>

</template>

<script>
import RenderedEvent from './RenderedEvent'
export default {
  components: {
    RenderedEvent
  },
  name: 'Event',
  props: ['events', 'num'],
  data(){
    return{
    filteredEvents: [],
    mainData: []
  }
  },

}
</script>

<style lang="css" scoped>
.event{

  margin-bottom: 0;
  margin-top: .4em;
  text-align: center;
  border: 2px solid black;
  border-radius: .3em;
  /* background-color: red; */
}

</style>
