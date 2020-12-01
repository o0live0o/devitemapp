<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>人员管理</el-breadcrumb-item>
      <el-breadcrumb-item>人员列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-row>
        <el-col :span="6">
          <el-input v-model="searchTxt" placeholder="请输入名字">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-table :data="users"  style="width: 100%">
          <el-table-column label="姓名">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="left-start">
                <p>{{ scope.row.userName }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.userName }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import { getUsers } from "../../api/user";
export default {
  created() {
    this.getUsers();
  },
  data() {
    return {
      searchTxt: "",
      users: [],
    };
  },
  methods: {
    async getUsers() {
      let ret = await getUsers();
      this.users = ret;
      console.log(ret);
    },
  },
};
</script>
<style lang="less" scoped>
.box-card {
  margin: 20px 0;
}
</style>