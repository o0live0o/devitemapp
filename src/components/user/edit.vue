<template>
    <el-dialog :visible.sync="showDialog">

    </el-dialog>
</template>
<script>
export default {
    props: {
        showDialog:{
            require: true,
            type: Boolean
        }
    }
}
</script>
<style lang="less" scoped>

</style>