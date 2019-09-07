<template>
    <div >
     
       <div>
            <h2>Reserver une salle</h2>
       </div>
    <form>
        <div class='reservationInfo'>
            <div>
                <label for='date'>Le</label>
                <input id='date' name='date' type="date" /> 
            </div>
            <div>
                <label for='from'>De</label>
                <input id='from' name='from' type="time" min="09:00" max="19:00" required/>
            </div>
            <div>
                <label for='to'>A</label>
                <input id='to' name='to' type="time" min="09:00" max="19:00" required/>
            </div>
            <div>
                <label for='pers'>Nb de pers.</label>
                <input id='pers' name='pers' type="number" step="1" min="1" max="100">
            </div>
            <div>
                <label >Equipements</label>
                
                <input id='retro' name='retro' type="checkbox" value='Retro'><label for='retro'>Retro projecteur</label>
                <input id='tv' name='tv' type="checkbox" value='Télévision'><label for='tv'>Télévision</label>
              
            </div>

            <div>
                <button v-on:click="rechercher">Rechercher</button>
            </div>
       

       </div>
        </form>
    </div>
</template>

<script>

import router from '../router'

export default {
  name: 'ReservationPage',
  methods : {
    rechercher: function() {
         var params = {
            date : document.getElementById('date').value,
            from : document.getElementById('from').value,
            to : document.getElementById('to').value,
            pers : document.getElementById('pers').value,
            equip1 : document.getElementById('retro').checked === true,
            equip2 : document.getElementById('tv').checked === true
        } 
   
        router.push({ name : 'List' , params : params});
        }
    }
}
</script>


