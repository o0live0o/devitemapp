<template>
    <el-dialog :title="dialogTitle" ref="editDialogRef" :visible.sync="showEditDialog" @close="close" @open="open">
        <el-form labelPosition="left" ref="editForm" :model="user" class="edit-from" :rules="userRules">
            <el-row :gutter="20" type="flex" justify="center">
                <el-col :pull="2" :span="8">
                    <el-form-item label-width="80px" label="姓名" prop="name">
                        <el-input v-model="user.name" :disabled=isEdit></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label-width="80px" label="账号" prop="account">
                        <el-input v-model="user.account" :disabled=isEdit></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20" type="flex" justify="center">
                <el-col :pull="2" :span="8">
                    <el-form-item label-width="80px" label="性别" prop="sex">
                        <el-radio-group v-model="user.sex">
                            <el-radio label="1">男</el-radio>
                            <el-radio label="0">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label-width="80px" label="年龄" prop="age">
                        <el-input v-model.number="user.age"></el-input>
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
            var validateAge = (rule, value, callback) => {
                if (value < 1) {
                    return callback(new Error('年龄不正确'))
                }
                callback()
            };

            return {
                showEditDialog: false,
                dialogTitle: '',
                isEdit: false,
                user: {},
                userRules: {
                    age: [{
                            required: true,
                            message: '请输入年龄',
                            trigger: 'blur'
                        },
                        {
                            type: 'number',
                            message: '年龄必须为数字',
                            trigger: 'blur'
                        },
                        {
                            validator: validateAge,
                            trigger: 'blur'
                        }
                    ],
                    sex: [{
                        required: true,
                        message: '请选择性别',
                        trigger: 'change'
                    }],
                    name: [{
                        required: true,
                        message: '请输入名字',
                        trigger: 'blur'
                    }],
                    account: [{
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    },{
                        min: 4,
                        max: 18,
                        message: '账号长度必须大于5小于18',
                        trigger: 'blur'
                    }]
                }
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
                    if (!newVal || newVal === '') {
                        this.dialogTitle = '新增用户'
                        this.isEdit = false
                    } else {
                        this.dialogTitle = '编辑用户'
                        this.isEdit = true
                    }
                }
            }
        },
        methods: {
            async open() {
                if (this.id !== '') {
                    let ret = await getUser(this.id)
                    if (ret.code === 200) {
                        this.user = ret.data
                    } else {
                        this.onClose()
                    }
                }
            },
            close() {
                 this.$refs['editForm'].resetFields()
                this.user = {}
                this.$emit('update:showDialog', false)
                this.$emit('update:id', '')
            },
             onSave() {
                this.$refs['editForm'].validate(async (valid) => { 
                    if(valid){
                    let ret;
                    if (!this.id || this.id === '') {
                        ret = await addUser(this.user)
                    } else {
                        ret = await editUser(this.id, this.user)
                    }

                    if (ret && ret.code === 200) {
                        this.$message.success('保存成功')
                        this.$emit('refresh')
                        this.onClose()
                    }
                    }
                })
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