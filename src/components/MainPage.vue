<template>
  <div>
    <div class="head-label">
      
    </div>
    <div class="left-menu">
        <ul>
          <li><i class="icon-white icon-home"></i>  <router-link to="/calstone">五行石计算</router-link></li>
          <li><i class="icon-white icon-home"></i> <router-link to="/calmaterial">材料计算</router-link></li>
        </ul>
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
  background: #474747;
}

.left-menu{
  height: 900px;
  float: left;
  width: 200px;
  background: #474747;
}

.left-menu ul{
  list-style-type:none
}


</style>