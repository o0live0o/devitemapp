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
          <el-input v-model="queryCondition.name" placeholder="请输入名字">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <!--表格-->
      <el-table :data="users" style="width: 100%">
        <el-table-column type="index"></el-table-column>
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
        <el-table-column label="性别" prop="sex"></el-table-column>
        <el-table-column label="年龄" prop="age"></el-table-column>
        <el-table-column label="电话" prop="phone"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.status" :active-value="1" :inactive-value="0">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template>
            <el-row>
              <el-col :span="8">
                <el-button type="primary" @click="edit"><i class="el-icon-edit-outline"></i></el-button>
              </el-col>
              <el-col :span="8">
                <el-button type="success">
                  <i class="el-icon-view"></i></el-button>
              </el-col>
              <el-col :span="8">
                <el-button type="danger"><i class="el-icon-delete"></i></el-button>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog :title="dialogProp.title" :visible.sync="dialogProp.showEditDialog">
        <el-form>
            <el-form-item label="姓名"> <el-input></el-input></el-form-item>
            <el-form-item label="账号"> <el-input></el-input></el-form-item>
            <el-form-item label="性别"> <el-input></el-input></el-form-item>
            <el-form-item label="年龄"> <el-input></el-input></el-form-item>
            <el-form-item label="电子邮件"> <el-input></el-input></el-form-item>
            <el-form-item label="电话号码"> <el-input></el-input></el-form-item>
            <el-form-item label="备注"> <el-input></el-input></el-form-item>
        </el-form>

        </el-dialog>
    </el-card>
  </div>
</template>
<script>
  import {getUsers} from "../../api/user";
  export default {
    created() {
      this.getUsers();
    },
    data() {
      return {
        queryCondition: {
          name: "",
        },
        users: [],
        //编辑框基本属性
        dialogProp: {
          showEditDialog: false,
          title: '用户信息'
        }
        
      };
    },
    methods: {
      async getUsers() {
        let ret = await getUsers();
        console.log(ret);
        this.users = ret;
      },
      edit () {
        this.dialogProp.showEditDialog = true
      }
    },
  };
</script>
<style lang="less" scoped>
  .box-card {
    margin: 20px 0;
  }
</style>