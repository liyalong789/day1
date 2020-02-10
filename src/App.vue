<template>
  <div class="lyl-app">
	  
	  <div class="lyl_b">
		  <router-view></router-view>
	  </div>
  </div> 
</template>

<script>
// import A from "./components/a"
import axios from "axios"
export default {
  name: 'App',
//   components:{A},
	data(){
		return{
		}
	},
	methods:{
		
	},
	
}
</script>

<style lang="scss">

body,.lyl-app,html{
	background: #ccc;
	width: 100%;
	height: 100%;
	.lyl_b{
		width: 100%;
		height: 100%;
	}
}
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
