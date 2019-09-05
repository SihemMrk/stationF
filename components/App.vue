<template>
    <div id='app'>   
    <ValidationPage/>  
    </div>
</template>
<script>
import HomePage from './HomePage.vue'
import ReservationPage from './ReservationPage.vue'
import ValidationPage from './ValidationPage.vue'
export default {
    name : 'app',
    components : {
        HomePage,
        ReservationPage,
        ValidationPage
    }
}
</script>