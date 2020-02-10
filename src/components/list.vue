<template>
  <div class="lyl-list">
      <div class="lyl-a">
		  <button v-show="!lyl_flag" @click="lyl_add() ">升序</button>
		  <button v-show="lyl_flag" @click="lyl_add()">降序</button>
          <router-link to="/gou">购物车页面</router-link>
	  </div>
    <div class="lyl_a">
        <ul>
            <li>
                <button @click="lyl_quan()">全部</button>
            </li>
            <li>
                <button @click="lyl_ling()">0元-100元</button>
            </li>
            <li>
                <button @click="lyl_bai()">100元-500元</button>
            </li>
        </ul>
    </div>
    <div class="lyl_b">
        <ul>
            <!-- 循环 -->
            <li v-for="(item,key) in lyl_list" :key="key">
                <img :src="'static/img/'+item.productImage" alt="">
                <p>{{item.productName}}</p>
                <p>{{item.salePrice}}</p>
                <button @click=add(item)>加入购物车</button>
            </li>
        </ul>
    </div>
  </div> 
</template>

<script>
import axios from "axios"
export default {
  name: 'App',
//   components:{A},
	data(){
		return{
            //接受json文件
            lyl_list:[],
            //升序状态
			lyl_flag:false            
		}
	},
	methods:{
        //显示全部
        lyl_quan(){
            this.lyl_list=[]
            axios.get("static/data.json").then((res)=>{
                this.lyl_list=res.data.result.list
                console.log(res.data.result.list)
		    })
        },
        //显示0-100
        lyl_ling(){
            axios.get("static/data.json").then((res)=>{
                // this.lyl_list=res.data.result.list
                console.log(res.data.result.list)
                this.lyl_list=[]
                for(var i in res.data.result.list){
                    if(res.data.result.list[i].salePrice<=100){
                        this.lyl_list.push(res.data.result.list[i])
                    }
                }
		    })
        },
        //显示100-500
        lyl_bai(){
            axios.get("static/data.json").then((res)=>{
                // this.lyl_list=res.data.result.list
                console.log(res.data.result.list)
                this.lyl_list=[]
                for(var i in res.data.result.list){
                    if(res.data.result.list[i].salePrice>=100&&res.data.result.list[i].salePrice<=500){
                        this.lyl_list.push(res.data.result.list[i])
                    }
                }
		    })
        },
        //升序 降序
		lyl_add(){
            this.lyl_flag=!this.lyl_flag
            if(this.lyl_flag){
                this.lyl_list.sort((a,b)=>{
                    return a.salePrice-b.salePrice
                })
            }else{
                this.lyl_list.sort((a,b)=>{
                    return b.salePrice-a.salePrice
                })
            }
        },
        //放到vuex
        add(item){
            console.log(item)
            this.$store.state.lyl_list.push(item)
        }
	},
    created(){
		//请求数据
		axios.get("static/data.json").then((res)=>{
			this.lyl_list=res.data.result.list
			console.log(res.data.result.list)
		})
	}
}
</script>

<style lang="scss">

body,.lyl-list,html{
    .lyl_a{
        float: left;
        width: 30%;
        height: 100%;
        
        ul{
            li{
                width: 100%;
                height: 50px;
                text-align: center;
                line-height: 50px;
                a {
                    
                    color: black;
                    text-decoration: none;
                    
                  }
                  
            }
        }
    }
    a{
        text-decoration: none;
    }
    .lyl_b{
        ul{
            display: flex;
            flex-wrap: wrap;
            li{
                width: 50%;
                height: 170px;
                text-align: center;
                
                img{
                    width: 33.3%;
                    height: 33.3;
                }
            }
        }
        float: right;
        overflow-y: auto;
        width: 70%;
        height: 100%;
    }
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
