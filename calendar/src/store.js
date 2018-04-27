import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
user: {},
    loggedIn: false,
    loginError: '',
    registerError: '',
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  },
  getters: {
  user: state => state.user,
    loggedIn: state => state.loggedIn,
    loginError: state => state.loginError,
    registerError: state => state.registerError,
    Monday: state => state.Monday,
    Tuesday: state => state.Tuesday,
    Wednesday: state => state.Wednesday,
    Thursday: state => state.Thursday,
    Friday: state => state.Friday,
    Saturday: state => state.Saturday,
    Sunday : state => state.Sunday, 

  },
  mutations: {
   setUser (state, user) {
      state.user = user;
    },
    setLogin (state, status) {
      state.loggedIn = status;
    },
    setLoginError (state, message) {
      state.loginError = message;
    },
    setRegisterError (state, message) {
      state.registerError = message;
    },
    setMonday (state, Monday) {
      state.Monday = Monday;
    },
    setTuesday (state, Tuesday) {
      state.Tuesday = Tuesday;
    },
     setWednesday (state, Wednesday) {
      state.Wednesday = Wednesday;
    },
     setThursday (state, Thursday) {
      state.Thursday = Thursday;
    },
     setFriday (state, Friday) {
      state.Friday = Friday;
    },
     setSaturday (state, Saturday) {
      state.Saturday = Saturday;
    },
     setSunday (state, Sunday) {
      state.Sunday =Sunday;
    },






  },
  actions: {
     // Registration, Login //
    register(context,user) {
      axios.post("/api/users",user).then(response => {
	context.commit('setUser', response.data.user);
	context.commit('setLogin',true);
	context.commit('setRegisterError',"");
	context.commit('setLoginError',"");
      }).catch(error => {
	context.commit('setLoginError',"");
	context.commit('setLogin',false);
	if (error.response) {
	  if (error.response.status === 403)
	    context.commit('setRegisterError',"That email address already has an account.");
	  else if (error.response.status === 409)
	    context.commit('setRegisterError',"That user name is already taken.");
	  return;
	}
	context.commit('setRegisterError',"Sorry, your request failed. We will look into it.");
      });
    },
 login(context,user) {
      axios.post("/api/login",user).then(response => {
	context.commit('setUser', response.data.user);
	context.commit('setLogin',true);
	context.commit('setRegisterError',"");
	context.commit('setLoginError',"");
      }).catch(error => {
	context.commit('setRegisterError',"");
	if (error.response) {
	  if (error.response.status === 403 || error.response.status === 400)
	    context.commit('setLoginError',"Invalid login.");
	  context.commit('setRegisterError',"");
	  return;
	}
	context.commit('setLoginError',"Sorry, your request failed. We will look into it.");
      });
    },
    logout(context,user) {
      context.commit('setUser', {});
      context.commit('setLogin',false);
    },
       getMonday(context) {
      axios.get("/api/users/" + context.state.user.id + "/appointments").then(response => {
	context.commit('setMonday',response.data.appointments);
      }).catch(err => {
	console.log("getMonday failed:",err);
      });
    },
     addMonday(context,appointment) {
      axios.post("/api/users/" + context.state.user.id + "/appointments",appointment).then(response => {
	return context.dispatch('getMonday');
      }).catch(err => {
	console.log("addMonday failed:",err);
      });
    },
  
  }
});
