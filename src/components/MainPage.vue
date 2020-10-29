<template>
  <div>
    <div class="head-label"></div>
    <div class="left-menu">
      <!-- <ul>
          <li><i class="icon-white icon-home"></i>  <router-link to="/calstone">五行石计算</router-link></li>
          <li><i class="icon-white icon-home"></i> <router-link to="/calmaterial">材料计算</router-link></li>
        </ul> -->
      <el-menu
        :default-active="$route.path"
        background-color="#545c64"
        text-color="#fff"
      >
        <template v-for="(menu,index) in menus">
          <template v-if="hasChildren(menu)">    
            <el-submenu :index="index+''" :key="menu.path">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ menu.menuName }}</span>
              </template>
              <template v-for="children in menu.children">
                <router-link :key="children.path" :to="menu.path +'/' +children.path">
                  <el-menu-item>{{ children.menuName }}</el-menu-item>
                </router-link>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <router-link :key="menu.path" :to="menu.path">
            <el-menu-item :index="index+''" >
              <i class="el-icon-menu"></i>
              <span slot="title">{{ menu.menuName }}</span>
            </el-menu-item>
            </router-link>
          </template>
        </template>
        <!-- <router-link to="/helloo">
         <el-menu-item>
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
          </el-menu-item>
        </router-link>
        <template v-if="true">
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>物品管理</span>
            </template>
            <el-menu-item index="/calmaterial/hello">五行石</el-menu-item>
            <el-menu-item index="/calmaterial/index">材料</el-menu-item>
          </el-submenu>
        </template>
    -->
      </el-menu>
    </div>
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { getMenus } from "../api/menu";

export default {
  name: "main_page",
  data() {
    return {
      menus: null,
    };
  },
  created: function () {
    this.getRoles();
  },
  methods: {
    async getRoles() {
      const val = await getMenus();
      this.menus = val.trees;
      console.log(val)
    },
    hasChildren(item) {
      return item.children.length > 0;
    },
  },
};
</script>

<style>
.main {
  height: 900px;
  border: 1px solid red;
  margin-left: 200px;
}

.head-label {
  height: 60px;
  background: #545c64;
}

.left-menu {
  height: 900px;
  float: left;
  width: 200px;
  background: #545c64;
}

.left-menu ul {
  list-style-type: none;
}
</style>