<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
 import AppHeader from './components/AppHeader';
 export default {
   name: 'App',
   components: { AppHeader }
 }
</script>

<style>
.narrow{
  margin-left: 100px;
}

.topinner{
  text-align:center;
  width:400px;
  height: 50px;
  background-color: D4A26A;
}
 body {
   background-color: 457385;
     font-size: 18px;
     padding: 20px 100px 0px 100px;
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
 }

 button {
   background-color: 6D92A0;
     color: #fff;
     min-width: 100px;
     line-height: 1em;
     border: none;
     border-radius: 5px;
     color: white;
     padding: 10px;
     text-align: center;
     text-decoration: none;
     display: inline-block;
     font-size: 1.2rem;
     margin: 4px 2px;
 }
 button.primary {
     background-color: #F35537;
 }
 button.alternate {
   margin-left: 150px;
     background-color: #77C4D3;
 }
 button:focus {
     outline: none;
 }
 button:hover {
     box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
 }
 button:active {
     transform: translateY(4px);
 }
 input {
     height: 20px;
     padding: 10px;
 }
 .flexWrapper {
     display:flex;
 }
 .flexRight {
     margin-left: auto;
 }
 .error {
     color: #F35537;
 }
 .column {
     margin: 100px 200px;
     width: 300px;
     height: 200px;
 }
 .inner{
   height: 350px;
   width: 400px;
   background-color: FFD6AA;
   border: 1px solid;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px;
   border-radius:15px;

 }
 p{
   text-align: center;
 }
 </style>
