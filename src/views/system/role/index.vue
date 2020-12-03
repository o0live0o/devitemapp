<template>
    <div>
        <el-card>
            <el-row>
                <el-col :span="6">
                    <el-input v-model="searchCondition.text">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
            </el-row>
            <el-table :data="roles">
                <el-table-column type="index"></el-table-column>
                <el-table-column label="角色名称" prop="roleName"></el-table-column>
                <el-table-column label="备注"></el-table-column>
                <el-table-column label="操作">
                    <template>
                        
                        <el-button type="primary" icon="el-icon-edit"></el-button>
                        <el-button type="primary" icon="el-icon-edit"></el-button>
                           <el-button type="primary" icon="el-icon-edit"></el-button>
                      
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>
<script>
    import { getRoles } from '_api/role'
    export default {
        data () {
            return {
                searchCondition : {
                    text: ''
                },
                roles: []
            }
        },
        created () {
            this.getRoles()
        },
        methods: {
            async getRoles () {
                let roles = await getRoles(20,1)
                this.roles = roles
                console.log(roles)
            }
        }
    }
</script>
<style lang="less" scoped>

</style>