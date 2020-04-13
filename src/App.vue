<template>
  <div >
    <Header />
    <div v-if="toggleField === true">
      <AddEvent @add-event="addEvent($event)" />
    </div>
      <div v-else class="buttonTog">
      <button type="button" v-on:click="toggleAddField">Add A event</button>
    </div>
    <Events v-bind:events="events" v-on:finish-event="deleteEvent"/>

  </div>
</template>

<script>
import axios from 'axios'
import AddEvent from './components/AddEvent'
import Events from './components/Events.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Events,
    Header,
    AddEvent
  },
  data(){
    return{
    events: [],
    toggleField: false,
    baseURL: ''
  }
  },
  created(){
    if (process.env.NODE_ENV === 'development'){
  this.baseURL = 'http://localhost:3000/events/'
} else {
  this.baseURL = 'https://schedul-r-backend.herokuapp.com/events/'
}
    axios.get(this.baseURL)
    .then(res => this.events = res.data)
    .catch(err => console.error(err))
    console.log("DATA FETCHED!");
  },
  methods: {

    async addEvent(newEvent){
      // axios.post(this.baseURL, newEvent)
      let response = await fetch(this.baseURL, {
        body: JSON.stringify(newEvent),
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(res => this.events = [...this.events, res.data])
      .catch(e => console.error(e))
    },
    toggleAddField(){
      this.toggleField = !this.toggleField
    },
    deleteEvent(id){
      axios.delete(`${this.baseURL}${id}`)
        .then(this.events = this.events.filter(event => event.id !== id))
        .catch(e => console.error(e))
      // console.log(id);
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
form{
      background-color: rgb(76, 180, 218);
      padding: 1em 1em 1em 1em;
      margin: 0 1em 0 1em;
      display: flex;
      justify-content: space-between;

}
input[type="text"]{
  width:20em;
  font-size: 1em;

}
.buttonTog{
  text-align: right;
  margin-top: .3em;
  padding-right: 1em;
}
button{
  font-size: 1.3em;

}
</style>
