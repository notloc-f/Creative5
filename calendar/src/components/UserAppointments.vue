  <template>
<div>
<h1 class ="Hops">Calendar</h1>

<div class="month">
  <ul>
    
    <li class="Current Month">
      April<br>
      <span style="font-size:18px">2017</span>
    </li>
  </ul>
</div>

<ul class="weekdays">
  <li>2 <br>Mon</li>
  <li>3 <br>Tue</li>
  <li>4<br>Wed</li>
  <li>5<br>Th</li>
  <li>6<br>Fri</li>
  <li>7<br>Sat</li>
  <li>8<br>Sun</li>
</ul>
<ul class="days">
   <li>
      <ul class = "Yep">
    <p v-for = "item in Monday">
  <label > {{item.day}} {{item.appointment}} <br></label>
</p>
   </ul>
  </li>
</li>
</ul>
<h3>New Event</h3>
<div class= "newEvent">
  <form v-on:submit.prevent ="addMonday()">
  <input type ="text" v-model="day" placeholder="day (m-Monday)">
  <input type ="text" v-model ="time" placeholder ="time">
  <input type ="text" v-model ="text" placeholder ="event name">
  <button type ="submit" >AddEvent</button>
  <p>m-Monday <br> t-Tuesday<br> w-Wednesday<br> th-Thursday <br>
    f-Friday<br> s-Saturday <br>su-Sunday</p>
</form>
</div>


</div>

</template>

<script>
 import moment from 'moment';
 export default {
   name: 'UserAppointments',
   data () {
     return {
       text: '',
	day:'',
	time: '',
     }
   },
   created: function() {
     this.$store.dispatch('getMonday');
   },
   filters: {
     since: function(datetime) {
       moment.locale('en', {
	 relativeTime: {
	   future: 'in %s',
	   past: '%s',
	   s:  'seconds',
	   ss: '%ss',
	   m:  '1m',
	   mm: '%dm',
	   h:  'h',
	   hh: '%dh',
	   d:  'd',
	   dd: '%dd',
	   M:  ' month',
	   MM: '%dM',
	   y:  'a year',
	   yy: '%dY'
	 }
       });
       return moment(datetime).fromNow();
     },
   },
   computed: {
     Monday: function() {
       return this.$store.getters.Monday;
     },
   },
   methods: {
     addMonday: function() {
       this.$store.dispatch('addMonday',{
         appointment: this.text,
       }).then(appointment => {
	 this.text = "";
       });
     },
   }
 }
</script>




<style scoped>
ul {list-style-type: none;}
body {font-family: Verdana, sans-serif;}

.month {
    padding: 20px 25px;
    width: 100%;
    background: #1abc9c;
    text-align: center;
}
.Hops {
  text-align: center;
}
.month ul {
    margin: 0;
    padding: 0;
}

.month ul li {
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
}

.month .prev {
    float: left;
    padding-top: 10px;
}

.month .next {
    float: right;
    padding-top: 10px;
}

.weekdays {
    margin: 0;
    padding: 10px 0;
    background-color: #ddd;
}

.weekdays li {
    display: inline-block;
    width: 13.6%;
    color: #666;
    text-align: center;
}
.days {
    padding: 10px 0;
    background: #eee;
    margin: 0;
}

.days li {
    list-style-type: none;
    display: inline-block;
    width: 13.6%;
    text-align: center;
    margin-bottom: 5px;
    font-size:12px;
    color: #777;
}
.days li:hover{
  border-style: solid;
  border-color: red;
}

.days li .active {
    padding: 5px;
    background: #1abc9c;
    color: white !important
}

/* Add media queries for smaller screens */
@media screen and (max-width:720px) {
    .weekdays li, .days li {width: 13.1%;}
}

@media screen and (max-width: 420px) {
    .weekdays li, .days li {width: 12.5%;}
    .days li .active {padding: 2px;}
}

@media screen and (max-width: 290px) {
    .weekdays li, .days li {width: 12.2%;}
}
                

</style>
