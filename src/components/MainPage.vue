<template>
  <div>
    <div class="head-label">
      
    </div>
    <div class="left-menu">
        <!-- <ul>
          <li><i class="icon-white icon-home"></i>  <router-link to="/calstone">五行石计算</router-link></li>
          <li><i class="icon-white icon-home"></i> <router-link to="/calmaterial">材料计算</router-link></li>
        </ul> -->
        <el-menu router :default-active="$route.path"  background-color="#545c64"  text-color="#fff">
          <el-menu-item>
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-submenu>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>物品管理</span>
            </template>
            <el-menu-item index="/calstone">五行石</el-menu-item>
            <el-menu-item index="/calmaterial">材料</el-menu-item>
          </el-submenu>

          <el-submenu>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item index="/1-1">选项1</el-menu-item>
            <el-menu-item index="/1-2">选项2</el-menu-item>
          </el-submenu>
        </el-menu>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.main{
  height: 900px;
  border: 1px solid red;
  margin-left: 200px;
}

.head-label{
  height: 60px;
  background: #545c64;
}

.left-menu{
  height: 900px;
  float: left;
  width: 200px;
  background: #545c64;
}

.left-menu ul{
  list-style-type:none
}


</style>