<template>
  <div class="msg" ref="msg" :style="{background: background,color: color}" v-show="isShow" v-html="message"></div>
</template>

<script>
  export default {
    name: 'ToastTemplate',
    data(){
      return{
        isShow: false,
        color: '#FFFFFF',
        background: '#29B0F0',
        message: '',

        time:1500,
        timer:null,
        animate:null,
      }
    },
    updated(){
      let left = this.$refs.msg.clientWidth/2
      this.$refs.msg.style.left = 'calc(50% - '+ left +'px)'
    },
    methods:{
      show(params) {
        let _this = this
        if(this.animate){
          this.animate.cancel()
        }
        if(this.timer){
          clearTimeout(this.timer);
        }
        //初始化参数
        let { color,background,message } = params
        this.color = color?color:'#FFFFFF'
        this.background = background?background:'#29B0F0'
        this.message = message||'默认提示'
        this.isShow = true

        this.timer = setTimeout(function () {
          _this.animate = _this.$refs.msg.animate([
            {opacity:1},
            {opacity:0}
          ],{duration:500})

          _this.animate.onfinish = function(){
            _this.isShow = false
            clearTimeout(_this.timer);
          }
        },_this.time)
      }
    }
  }
</script>

<style scoped>
  .msg{
    position: fixed;
    top: 38%;
    border-radius: 5px;
    padding: 5px 10px;
  }
</style>
