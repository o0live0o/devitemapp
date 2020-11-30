<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="../../assets/logo.png" alt="" />
        <span>物品管理系统</span>
      </div>
      <el-button type="primary" @click="exit">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">

            <template slot="title">
              <i class="el-icon-location"></i>
              <span></span>
            </template>
            
            <el-menu-item index="1-4-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span></span>
              </template>
            </el-menu-item>

          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
import  {getMenus} from '../../api/menu'
export default {
   created: function () {
     this.loadMenu()
   },
  methods: {
    exit () {
      window.sessionStorage.removeItem("token");
      this.$router.push("/login");
    },
    async loadMenu () {
      let ret = await getMenus()
      console.log(ret)
    }
  }
}
</script>
<style lang="less" scoped>
.home-container {
  height: 100%;
}

.el-header {
  background-color: #373d43;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
  img {
    width: 30px;
  }
}

.el-aside {
  background-color: #333744;
}

.el-main {
  background-color: #eaedf5;
}

.el-menu-vertical {
  border: 0;
}
</style>