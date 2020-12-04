<template>
    <el-dialog :title="dialogTitle" ref="editDialogRef" :visible.sync="showEditDialog" @close="close" @open="open">
        <el-form labelPosition="left" ref="editForm" :model="user" class="edit-from">
            <el-row :gutter="20" type="flex" justify="center">
                <el-col :pull="2" :span="8">
                    <el-form-item label-width="80px" label="姓名">
                        <el-input v-model="user.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label-width="80px" label="账号">
                        <el-input v-model="user.account"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20" type="flex" justify="center">
                <el-col :pull="2" :span="8">
                    <el-form-item label-width="80px" label="性别">
                        <el-input v-model="user.sex"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label-width="80px" label="年龄">
                        <el-input v-model="user.age"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20" type="flex" justify="center">
                <el-col :pull="2" :span="8">
                    <el-form-item label-width="80px" label="电子邮件">
                        <el-input v-model="user.eMail"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label-width="80px" label="电话号码">
                        <el-input v-model="user.phone"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20" type="flex" justify="center">
                <el-col :pull="2" :span="8">
                    <el-form-item label-width="80px" label="地址">
                        <el-input v-model="user.address"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label-width="80px" label="备注">
                        <el-input v-model="user.remark"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20" type="flex" justify="center">
                <el-col :pull="3" :span="8">
                    <el-form-item>
                        <el-button type="primary" @click="onSave()">保存</el-button>
                        <el-button @click="onClose()">关闭</el-button>
                    </el-form-item>
                </el-col>
            </el-row>

        </el-form>
    </el-dialog>
</template>
<script>
    import {
        getUser,
        editUser,
        addUser
    } from '_api/user'
    export default {
        props: {
            showDialog: {
                require: true,
                type: Boolean
            },
            id: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                showEditDialog: false,
                dialogTitle: '',
                user: {}
            }
        },
        watch: {
            showDialog: {
                handler(newVal) {
                    this.showEditDialog = newVal
                }
            },
            id: {
                handler(newVal) {
                    if(!newVal || newVal === ''){
                        this.dialogTitle = '新增用户'
                    }else {
                        this.dialogTitle = '编辑用户'
                    }
                }
            }
        },
        methods: {
            async open() {
                let ret = await getUser(this.id)
                console.log(ret)
                this.user = ret
            },
            close() {
                this.$emit('update:showDialog', false)
                this.$emit('update:id', '')
            },
            async onSave() {
                if (!this.id || this.id === '') {
                    await addUser(this.user)
                } else {
                    await editUser(this.id, this.user)
                }
                this.$message.success('保存成功')
                this.$emit('refresh')
            },
            onClose() {
                this.showEditDialog = false
            }
        }
    }
</script>
<style lang="less" scoped>
    .edit-from {
        .el-form-item {
            margin-bottom: 15px;
        }
    }
</style>