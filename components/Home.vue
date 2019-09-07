<template> 
<div>
  
    <div class='login'>
        <div class='username'>
            <input type="text" id="name" placeholder="Identifiant" required
       minlength="4" maxlength="8">
            <p>(Entre 4 et 8 charactères)</p>
        </div>
        <div class='password'>
            <input type="password" placeholder="Mot de passe"  />
        </div>
        <div class='connect'>
            <button v-on:click="cliquer">Se connecter</button>
        </div>
    </div>
    <div class='forget'>
        <a href='#/forgotten-password'>Mot de passe oublié </a>
    </div>
 
</div>
</template>

<script>

import router from '../router'


 export default {
  name: "Home"
,
methods : {
    cliquer : function() {
        router.push({ name : 'ReservationPage'});
        }
    }
}

</script>