<template>
    <el-dialog :visible.sync="showDialog"
    :before-close="handleClose"
   >
        <el-form :model="editUserInfo">
            <el-form-item label="姓名" >
                <el-input v-model="editUserInfo.name"></el-input>
            </el-form-item>
            <el-form-item label="账号">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="年龄">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="电子邮件">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="电话号码">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="备注">
                <el-input></el-input>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>
<script>
    export default {
        created() {
        },
        props: {
            showDialog: {
                require: true,
                type: Boolean
            },
            uesrInfo: {}
        },
        data() {
            return {
                editUserInfo: this.uesrInfo,
                showEditDialog: this.showDialog
            }
        },
        methods: {
            handleClose(done) {
         
                this.$emit('closedialog')
                done()
            }
        }

    }
</script>
<style lang="less" scoped>

</style>