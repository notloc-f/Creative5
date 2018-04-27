<template>
<div>
  <div class = "all" >
    <div class = "notLogged" v-if="loggedIn">
      <user-appointments/>
    </div>
    <div class = "logged" v-else>
      <welcome-page/>
    </div>
  </div>
</div>
</template>

<script>
 import WelcomePage from './WelcomePage';
 import UserAppointments from './UserAppointments';
 export default {
   name: 'HomePage',
   components: {WelcomePage,UserAppointments},
   computed: {
     loggedIn: function() {
       return this.$store.getters.loggedIn;
     },
   },
 }
</script>

<style scoped>
.all{

}
</style>
