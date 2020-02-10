<template>
  <div class="lyl-gou">
      <button @click="$router.go(-1)">返回</button>
    <ul>
        <li v-for="(item,key) in this.$store.state.lyl_list" :key="key">
                <input type="checkbox" name="" id="" v-model="item.flag"><br/>
                <img :src="'static/img/'+item.productImage" alt="">
                <p>{{item.productName}}</p>
                <p>{{item.salePrice}}</p>
        </li>
    </ul>
    
    <button @click="lyl_del1()">选中删除</button>
    <button @click="lyl_del()">全部删除</button>
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
            lyl_list:[]
		}
	},
	methods:{
        lyl_del1(){
            this.$store.state.lyl_list.splice(this.$store.state.lyl_list,this.$store.state.lyl_list.length)            
        },
        //全部删除
		lyl_del(){
            this.$store.state.lyl_list.splice(this.$store.state.lyl_list,this.$store.state.lyl_list.length)
        }
    },
    created(){
        var id = this.$route.query.id
        axios.get("static/data.json").then((res)=>{
			for(var i in res.data.result.list){
                if(res.data.result.list[i]._id==id){
                    this.lyl_list.push(res.data.result.list[i])
                }
            }
			console.log(res.data.result.list)
		})
    }
}
</script>

<style lang="scss">

body,.lyl-gou,html{
	width: 100%;
	height: 100%;
}
*{
	margin: 0;
	padding: 0;
    list-style: none;
	box-sizing: border-box;
}
</style>
