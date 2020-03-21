<template>
    <div>
        成本
        交易所
            价格
            税率
            利润
        逃税
            价格
            利润<br/>
        
        <div class="alert alert-success" role="alert">
            <h4>一级五行石</h4>
            帮贡消耗:<input type="text" v-model="lv_one_val"/>
            金币消耗:<input type="text" v-model="lv_one_gold" />
            税率:<input type="text" v-model="tax_rate"/>
            合成六级价格:<input type="text" v-model="merge_fee"/>
            帮贡总数:<input type="text" v-model="total_val"/>
        </div>

        <div class="alert alert-info" >
            <h4>交易所出售一级五行石</h4>
            交易所价格:<input type="text" v-model="price"/>
            <button class="btn btn-primary" @click="cal">计算</button>
            <p class="text-primary">兑换数量: {{amount}}  共 {{group}} 组</p>  
            <p class="text-primary">成本价格: {{cost}}</p>  
            <p class="text-primary">销售总价: {{total_price}}</p>  
            <p class="text-primary">税额: {{tax}}</p>
            <p class="text-primary">税后价格:{{after_tax}}</p>
            <p class="text-primary">利润: {{profit}}</p>
            <p class="text-primary">每组税后价格: {{each_group_after_tax}}</p>
            <p class="text-primary">每组利润: {{each_group_profit}}</p>
        </div>

        <div class="alert alert-warning" role="alert">
            <h4>交易所出售六级五行石</h4>
            交易所价格:<input type="text" v-model="lv_six_price"/>
            <button class="btn btn-primary" @click="cal_six">计算</button>
            <p class="text-primary">兑换数量: {{merge_num}}</p>  
            <p class="text-primary">每个成本: {{each_lv_six_cost}}</p>
            <p class="text-primary">每个利润: {{each_lv_six_profit}}</p>
            <p class="text-primary">每个税后价格: {{each_lv_six_after_tax}}</p>
            <p class="text-primary">总成本: {{lv_six_cost}}</p>
            <p class="text-primary">总售价: {{lv_six_total_price}}</p>
            <p class="text-primary">总利润: {{lv_six_profit}}</p>
            <p class="text-primary">总税后价格: {{lv_six_total_price_after_tax}}</p>

        </div>
        <div class="alert alert-danger" role="alert">...</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            total_val:300000,
            lv_one_gold:0.75,  
            lv_one_val:8,
            tax_rate:0.05,
            merge_fee:53.91,
            //一级五行石
            price:0.82,
            tax:0,
            total_price:0,
            profit:0,
            after_tax:0,
            cost:0,
            amount:0,
            each_group_after_tax:0,
            each_group_profit:0,
            group :0,
            //六级五行石
            lv_six_price:600,
            merge_num:0,
            each_lv_six_profit:0,
            each_lv_six_cost:0,
            each_lv_six_after_tax:0,
            lv_six_cost:0,
            lv_six_profit:0,
            lv_six_total_price:0,
            lv_six_total_price_after_tax:0
        }
    },
    methods: {
        cal(){
            this.amount = this.total_val / this.lv_one_val
            this.group = this.amount / 500
            this.cost = this.amount * this.lv_one_gold
            this.total_price =  (this.amount * this.price).toFixed(4) 
            this.tax = this.total_price * this.tax_rate
            this.after_tax = this.total_price - this.tax
            this.profit = this.after_tax -  this.cost 
            this.each_group_after_tax = 500 * this.price *(1-this.tax_rate)
            this.each_group_profit = 500 * this.price*(1-this.tax_rate) - 500 * this.lv_one_gold        
        },
        cal_six(){
            //六级五行石
            this.merge_num = Math.floor(this.total_val /8/ 599)
            this.each_lv_six_cost = (599 * this.lv_one_gold + this.merge_fee).toFixed(4)
            this.each_lv_six_profit = (this.lv_six_price  * (1-this.tax_rate) -  this.each_lv_six_cost).toFixed(4)
            this.each_lv_six_after_tax =  this.lv_six_price *(1 - this.tax_rate)
            this.lv_six_cost =  (this.merge_num *  this.each_lv_six_cost).toFixed(4)
            this.lv_six_total_price= this.merge_num *  this.lv_six_price
            this.lv_six_profit =  (this.merge_num * this.each_lv_six_profit).toFixed(4)
            this.lv_six_total_price_after_tax =  this.merge_num *  this.each_lv_six_after_tax
        }
    }
}
</script>
<style scoped>

</style>