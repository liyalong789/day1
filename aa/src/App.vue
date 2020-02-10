<template>
  <div>
    
	<A>
		<template v-slot:aa>aaaa</template>
		<template v-slot:cc>cccc</template>
	</A>
  </div> 
</template>

<script>
import A from "./components/a"
export default {
  name: 'App',
  components:{A},
	data(){
		return{
			
		}
	},
	methods:{
		
	}
}
</script>

<style lang="scss">

</style>
