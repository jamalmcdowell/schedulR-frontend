<template >
  <div>
    <div class="container">
      <div class="wrapper">
    <h3 class="days"> Sunday </h3>
    <Event @finish-event="$emit('finish-event', $event)" :events="events" :num=0 class="events" />
  </div>
    <div class="wrapper">
    <h3 class="days"> Monday </h3>
    <Event :events="events" :num=1 class="events" @finish-event="$emit('finish-event', $event)"/>
  </div>
    <div class="wrapper">
    <h3 class="days"> Tuesday </h3>
    <Event :events="events" :num=2 class="events" @finish-event="$emit('finish-event', $event)"/>
  </div>
    <div class="wrapper">
    <h3 class="days"> Wednesday </h3>
    <Event :events="events" :num=3 class="events" @finish-event="$emit('finish-event', $event)"/>
  </div>
    <div class="wrapper">
    <h3 class="days"> Thursday </h3>
    <Event :events="events" :num=4 class="events" @finish-event="$emit('finish-event', $event)"/>
  </div>
    <div class="wrapper">
    <h3 class="days"> Friday </h3>
    <Event :events="events" :num=5 class="events" @finish-event="$emit('finish-event', $event)"/>
  </div>
  <div class="wrapper">
  <h3 class="days"> Saturday </h3>
    <Event :events="events" :num=6 class="events" @finish-event="$emit('finish-event', $event)"/>
  </div>

  </div>
</div>
</template>

<script>
import Event from './Event'
export default {
  name: 'Events',
  props: ['events'],
  components: {
    Event
  }
}

</script>

<style scoped>
.days{
  font-size: 2em;
  border-bottom: 1px solid black;
  text-align: center;
  padding: .4em;
}
.wrapper{
  border: 1px solid black;
  width: 80vw;
  padding: .3em;
}
.events{
  padding: 1em;

}
.container{
    display: flex;
    justify-content: space-around;
    padding: 0em 1em 0 1em;
}
</style>
