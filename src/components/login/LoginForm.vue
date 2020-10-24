<template>
        <el-form >
            <el-form-item >
                <el-input placeholder="用户名" v-model="userName"></el-input>
            </el-form-item>
            <el-form-item >
                <el-input placeholder="密码" v-model="password" show-password></el-input>
            </el-form-item>
           <el-button class="btn-primary" @click="login" type="primary">登  录</el-button>
        </el-form>
</template>
<script>
import {login} from '../../api/api'
import {getUser} from '../../api/user'
export default {
    data () {
        return {
            userName:"",
            password:""
        }
    },
    methods:{
        login: async function(){
            console.log(this.$store.state.message)
            console.log(1111)
            await login({userAccount:'Administrator',pwd:'123456'})
            //this.$router.push({ path:'/main'  })
            //this.$router.replace("/main")
            var data1 = await getUser('bc9e5615-17d5-4ca2-adf9-200f903e0a7d');
            console.log(data1)
          
        }
    }
}
</script>
<style scoped>
.btn-primary{
    width: 100%;
}
</style>