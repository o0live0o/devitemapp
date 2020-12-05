<template>
  <div>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-input v-model="queryCondition.name" placeholder="请输入名字">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="2"><el-button type="primary" circle @click="addUser"><i class="el-icon-document-add"></i></el-button></el-col>
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
          <template slot-scope="scope">
                <el-button type="primary" @click="edit(scope.row.id)"><i class="el-icon-edit-outline"></i></el-button>
                <el-button type="success" @click="test()"><i class="el-icon-view"></i></el-button>
                <el-button type="danger" @click="deleteInfo(scope.row.id)"><i class="el-icon-delete"></i></el-button>     
          </template>
        </el-table-column>
      </el-table>
      <!--编辑框-->
      <edit-user :showDialog.sync="dialogProp.showEditDialog"
      :id.sync="dialogProp.id" @refresh="getUsers()"></edit-user>

    </el-card>
  </div>
</template>
<script>
  import {getUsers,deleteUser} from '_api/user';
  import EditUser from './edit'
  export default {
    components:{
      EditUser
    },
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
          id: null
        },
      };
    },
    methods: {
      async getUsers() {
        let ret = await getUsers();
        if(ret && ret.code === 200)
           this.users = ret.data;
      },
      edit (id) {
        this.dialogProp.id = id
        this.dialogProp.showEditDialog = true
      },
      async deleteInfo (id) {
        let ret = await deleteUser(id)
        if(ret && ret.code === 200){
            this.$message.success('删除成功')
            this.getUsers()
        }
      },
      addUser () {
        this.dialogProp.id = ''
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