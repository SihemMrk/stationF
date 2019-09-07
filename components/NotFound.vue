<template> 
<div>
   
   <div>
   <p>La page que vous recherchez n'existe pas.</p>
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