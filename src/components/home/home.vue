<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="~_assets/logo.png" alt="" />
        <span>物品管理系统</span>
      </div>
      <el-button type="primary" @click="exit">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2" class="el-menu-vertical" background-color="#333744" text-color="#fff"
          active-text-color="#ffd04b" router>
          <template v-for="menu in menus">
            <template v-if="hasChildren(menu)">
              <el-submenu :index="menu.path" :key="menu.path">
                <template slot="title">
                  <i :class="menu.icon"></i>
                  <span>{{ menu.menuName }}</span>
                </template>
                <template v-for="child in menu.children">
                  <el-menu-item :index="child.path" :key="child.path">
                    <template slot="title">
                      <i :class="child.icon"></i>
                      <span>{{ child.menuName }}</span>
                    </template>
                  </el-menu-item>
                </template>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :index="menu.path" :key="menu.path">
                <i :class="menu.icon"></i>
                <span slot="title">{{ menu.menuName }}</span>
              </el-menu-item>
            </template>
          </template>
          <!-- <el-submenu index="menu.path" v-for="menu in menus" :key="menu.path">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ menu.menuName }}</span>
            </template>
            <el-menu-item index="1-4-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span></span>
              </template>
            </el-menu-item>
          </el-submenu> -->
        </el-menu>
      </el-aside>
      <el-main>
        <el-card class="nav-head">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <!-- <el-breadcrumb-item>人员管理</el-breadcrumb-item>
            <el-breadcrumb-item>人员列表</el-breadcrumb-item> -->
          </el-breadcrumb>
        </el-card>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
  import {
    getMenus
  } from '_api/rbac';
  export default {
    data() {
      return {
        menus: [],
      };
    },
    created: function () {
      this.loadMenu();
      
    },
    methods: {
      exit() {
        window.sessionStorage.removeItem("token");
        this.$router.push("/login");
      },
      async loadMenu() {
        var ret  = await getMenus();
        if(ret.code == 200){
           this.menus = ret.data.trees;
        }
      },
      hasChildren(item) {
        return item.children.length > 0;
      },
    },
  };
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

    >div {
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

  .nav-head {
    margin-bottom: 20px;
  }
</style>