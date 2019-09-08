<template> 
<div id='reservation'>
  
  <div class='reservationInfoList'>
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
                <label for='pers'>Pour</label>
                <input id='pers' name='pers' type="number" step="1" min="1" max="100" v-model="this.$props.pers">
                <label for='pers'>pers.</label>
            </div>
    </div>
    <div>
        <table id='table'>
            <tr class='firstTr'>
                <td>Nom de la salle</td>
                <td>Capacité</td>
                <td>Equipements</td>
                <td>Status</td>
            </tr>
            <tr class='otherTr'v-for="room in rooms">
                <td>{{room.name}}</td>
                <td>{{room.capacity}}</td>
                <td><span v-for="equipement in room.equipements">{{equipement.name}} </span></td>
                <td><button class="reserveButton" v-on:click="reserve(room.name)">RESERVER</button></td>
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
        reserve : async function(name){
            console.log(name)
            var name = {name : name}
            const newProps = Object.assign(this.$props, name)
           
            console.log(newProps)
            const response = await axios.post('/reserve', newProps)
         
         }
    }
}



</script>