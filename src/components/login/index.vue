<template>
    <div class="bg">
        <div class="login-control">
            <h5>密码登录</h5>
            <hr />
            <div class="login-from">
                <LoginForm></LoginForm>
            </div>
            <h6>欢迎使用xxxxx系统</h6>
        </div>
       
    </div>
</template>
<script>
import LoginForm from "./LoginForm"
export default {
    components:{
        LoginForm
    }
}
</script>
<style>
.bg{
    background: url("../../assets/images/bg.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 100%;
    text-align: center;
    line-height: 100%;
    position: absolute;
    width: 100%;
}

.login-control{
    background: #ffffff;
    width: 380px;
    position: absolute;
    right: 160px;
    top: 50%;
    transform: translateY(-80%);
    border-radius: 5px;
    padding-top: 20px;
}

.login-from{
    margin: 0 30px 0 30px;
    padding-bottom: 20px;
}
</style>