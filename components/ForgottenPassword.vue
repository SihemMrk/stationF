<template> 
<div >
    
    <div class='login'>
        <div class='username'>
            <input type="text" id="name" placeholder="Identifiant" required
       minlength="4" maxlength="8">
            <p>(Entre 4 et 8 charactères)</p>
        </div>
        
        <div class='connect'>
            <button v-on:click="cliquer">Re-initialiser mon mot de passe</button>
        </div>
    </div>
    <div class='forget'>
        <a href='#/'>Se connecter </a>
    </div>
 
</div>
</template>

<script>

import router from '../router'


 export default {
  name: "ForgottenPassword"
,
methods : {
    cliquer : function() {
        console.log('Demande de ré-initialisation le mot de passe')
        }
    }
}

</script>