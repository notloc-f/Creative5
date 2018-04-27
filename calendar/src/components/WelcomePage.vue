  <template>
   <div class="column">
    <h1>TO DO 2 CALENDAR!!</h1>
    <h2>Bridging the gap of "To do" and WILL do</h2>
    <div class = "inner">
        <h3 class = "topinner"> Create Account </h3>

      <div class = "bodyinner">
        <form v-on:submit.prevent="register">
    <p>Choose a user name</p>
    <input class="narrow" v-model="username" placeholder="User Name">
    <p>Create an account.</p>
    <input class="narrow" v-model="name" placeholder="First and Last Name"><br/>
    <input class="narrow" v-model="email" placeholder="Email Address"> <br/>
    <input class="narrow" type="password" v-model="password" placeholder="Password">
	<button class="alternate" type="submit">Register</button>

  </form>
      </div>
    </div>
   
    <p class = "error"> {{registerError}}</p>
  </div>
</template>


<script>
 export default {
   name: 'WelcomePage',
   data () {
     return {
       username: '',
       email: '',
       password: '',
       name: '',
     }
   },
   computed: {
     registerError: function() {
       return this.$store.getters.registerError;
     },
   },
   methods: {
     register: function() {
       this.$store.dispatch('register',{
         username: this.username,
         email: this.email,
         password: this.password,
         name: this.name,
       });
     }
   }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 img {
     width: 100px;
 }
 h1 {
     margin-bottom: 0px;
 }
 h2 {
     margin-top: 0px;
     font-size: 1.2em;
     font-weight: normal;
     margin-bottom: 50px;
 }
 .narrow {
     width: 170px;
 }
 .wide {
     width: 370px;
 }
</style>

