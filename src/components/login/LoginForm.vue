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
export default {
    data () {
        return {
            userName:"",
            password:""
        }
    },
    methods:{
        login:function(){
            login({userAccount:'Administrator',pwd:'123456'})
            // this.$router.push({ path:'/main'  })
            //this.$router.replace("/main")
        }
    }
}
</script>
<style scoped>
.btn-primary{
    width: 100%;
}
</style>