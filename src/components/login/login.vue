<template>
  <div class="login">
    <div class="login_box">
      <div class="img_box">
        <img src="~_assets/logo.png" />
      </div>
      <el-form ref="loginForm" :model="formData" :rules="loginRules" class="login_form">
        <el-form-item prop="userAccount">
          <el-input
            v-model="formData.userAccount"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input
            v-model="formData.pwd"
            prefix-icon="el-icon-lock"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button @click="login" type="primary">登录</el-button>
          <el-button @click="reset" type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { login } from '_api/api'
export default {
  data() {
    return {
      formData: {
        userAccount: "administrator",
        pwd: "123456",
      },
      loginRules: {
        userAccount: [
          { required: true, message: "登录名不能为空", trigger: "blur" },
          {
            min: 3,
            max: 18,
            message: "用户名长度必须大于3,小于18",
            trigger: "blur",
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "密码长度必须大于6,小于18",
            trigger: "blur",
          }
        ],
      },
    }
  },
  methods: {
      login () {
          this.$refs.loginForm.validate(async (valid) => {
              if(!valid) return
              let ret = await login(this.formData)

              if(ret.code === 200){
                this.$message.success('登录成功')
                window.sessionStorage.setItem('token',ret.data.token)
                return this.$router.push('/home')
              }
              // return this.$message.error(ret.code + ":" +ret.message)
          })
      },
      reset () {
          this.$refs.loginForm.resetFields()
      }
  }
};
</script>
<style lang="less" scoped>
.login {
  background: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .img_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-220%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }

  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }
}
</style>