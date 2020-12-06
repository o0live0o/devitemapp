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
            <el-table :data="menus">
                <el-table-column type="index"></el-table-column>
                <el-table-column label="菜单名称" prop="menuName"></el-table-column>
                <el-table-column label="图标">
                    <template slot-scope="scope"><i :class="scope.row.icon"></i></template>
                </el-table-column>
                <el-table-column label="代码" prop="menuCode"></el-table-column>
                <el-table-column label="路径" prop="path"></el-table-column>
                <el-table-column label="备注"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" @click="edit(scope.row.id)"><i class="el-icon-edit-outline"></i></el-button>
                        <el-button type="danger" @click="deleteInfo(scope.row.id)"><i class="el-icon-delete"></i></el-button>     
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>
<script>
    import { getMenus } from '_api/menu'
    export default {
        data () {
            return {
                searchCondition : {
                    text: ''
                },
                menus: []
            }
        },
        created () {
            this.getMenus()
        },
        methods: {
            async getMenus () {
                let ret = await getMenus(20,1)
                this.menus = ret.data
            }
        }
    }
</script>
<style lang="less" scoped>

</style>