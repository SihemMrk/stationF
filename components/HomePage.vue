<template> 
<div id='container'>
    <div id='up'>
        <img src="assets/stationF.png"/>
        <h1>Station F</h1>
    </div>
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
            <button>Se connecter</button>
        </div>
    </div>
    <div class='forget'>
        <button>Mot de passe oublié </button>
    </div>
</div>
</template>

<script>

export default {
  name: 'HomePage'
}
</script>


