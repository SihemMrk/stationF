<template> 
<div>
  
  <div>
    <div>
                <label for='date'>Le</label>
                <input id='date' name='date' type="date" v-model="this.$props.date" /> 
            </div>
            <div>
                <label for='from'>De</label>
                <input id='from' name='from' type="time" v-model="this.$props.from" min="09:00" max="19:00" required/>
            </div>
            <div>
                <label for='to'>A</label>
                <input id='to'  name='to' type="time"  v-model="this.$props.to" min="09:00" max="19:00" required/>
            </div>
            <div>
                <label for='pers'>Nb de pers.</label>
                <input id='pers' name='pers' type="number" step="1" min="1" max="100" v-model="this.$props.pers">
            </div>
            <div>
                <label >Equipements</label>
                <input id='retro' name='retro' type="checkbox"  v-model="this.$props.equip1"><label for='retro'>Retro projecteur</label>
                <input id='tv' name='tv' type="checkbox" v-model="this.$props.equip2"><label for='tv'>Télévision</label>
              
            </div>

    </div>
    <div>
        <table>
            <tr>
                <td>Nom de la salle</td>
                <td>Capacité</td>
                <td>Equipements</td>
                <td>Status</td>
            </tr>
            <tr v-for="room in rooms">
                <td>{{room.name}}</td>
                <td>{{room.capacity}}</td>
                <td><span v-for="equipement in room.equipements">{{equipement.name}} </span></td>
                <td><button v-on:click="reserve(room.name)">Reserver</button></td>
            </tr>
         
        </table>
        
     </div> 
</div>
</template>

<script>

import router from '../router'
const axios = require('axios');


 export default {
  name: "Home",
  props : [
      'date',
      'from',
      'to',
      'pers',
      'equip1',
      'equip2'
  ],
  data : function () { 
    return {
        rooms : []
    }
  },
      
  created : async function(){
    const response = await axios.post('/searchrooms',this.$props)
    this.rooms = response.data
    console.log(this.rooms[0].capacity, 'RESPONSEEEEE')
  },

    methods : {
        cliquer : function() {
            router.push({ name : 'ReservationPage'});
        },
        reserve : function(name){
        console.log(name)
        //const response = await axios.post('/reserve', this.$props)
        //console.log(this.$props)
    }
    }
}



</script>