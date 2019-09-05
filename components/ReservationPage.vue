<template>
    <div id='container'>
       <div id='up'>
            <img src="assets/stationF.png"/>
            <h1>Station F</h1>
       </div> 
       <div>
            <h2>Reserver une salle</h2>
       </div>
        <div class='reservationInfo'>
            <div>
                <p>Le</p>
                <input type="date" /> 
            </div>
            <div>
                <p>De</p>
                <input type="time" min="09:00" max="19:00" required/>
            </div>
            <div>
                <p>A</p>
                <input type="time" min="09:00" max="19:00" required/>
            </div>
            <div>
                <p>Nb de pers.</p>
                <input type="number" step="1" min="1" max="100">
            </div>
            <div>
                <p>Equipements</p>
                <form>
                <input type="checkbox" value='Retroviseur'>Retroviseur
                <input type="checkbox" value='Télévision'>Télévision
                </form>
            </div>
            <div>
                <button>Rechercher</button>
            </div>

       </div>
    </div>
</template>

<script>

export default {
  name: 'ReservationPage'
}
</script>


