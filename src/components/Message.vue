<template>
  <div id="message">
    <div class="header">
      <h1>{{title}}</h1>
      <div class="classify">
        <div class="item" v-for="(item,i) in classify" :key="i">
          <span class="text">{{item.text}}</span>
          <div class="icon">
            <span :class="item.icon"></span>
          </div>
        </div>
        
      </div>
      <div class="fans">
        <h2>粉丝列表</h2>
        <div class="fans-item">
          <div class="item" v-for="(item,i) in fans" :key="i">
            <div class="left">
              <img :src="item.imgUrl" alt="">
              <span v-if="item.isLive">在线</span>
              <span v-else>离线</span>
            </div>

            <div class="right"> 
              <p class="follow" v-if="!item.isFollow">关注</p>
              <p class="not-follow" v-else>已关注</p>
            </div>
            <div class="middle">
              <p class="name">
                ada阿瑟东
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
      title: '消息中心',
      classify:[
        {
          text:'消息',
          icon:'11'
        },
        {
          text:'关注',
          icon:'11'
        },
        {
          text:'粉丝',
          icon:'11'
        },
        {
          text:'黑名单',
          icon:'11'
        }
      ],
      fans:[
        {
          imgUrl:"",
          nickname:'粉丝一',
          isLive:true,
          isFollow:false
        },
        {
          imgUrl:"",
          nickname:'粉丝一',
          isLive:true,
          isFollow:false
        },
        {
          imgUrl:"",
          nickname:'粉丝二',
          isLive:true,
          isFollow:false
        },
        {
          imgUrl:"",
          nickname:'粉丝三',
          isLive:true,
          isFollow:false
        },
        {
          imgUrl:"",
          nickname:'粉丝四',
          isLive:true,
          isFollow:false
        },
        {
          imgUrl:"",
          nickname:'粉丝五',
          isLive:true,
          isFollow:false
        },
       
       {
          imgUrl:"",
          nickname:'粉丝六',
          isLive:false,
          isFollow:true
        }
       
       


      ]

    }
  }
}
</script>

<style lang="scss" scoped>
$b:1px dashed green;
  #message{
    width: 100%;
    height: 100%;
    padding-top:0.4rem;
    background: #fff;

    .header{
      h1{
   
        font-size:.42rem;
        font-weight:bold;
        color:rgba(28,28,28,1);
      }
      .classify{
        display: flex;
        justify-content: space-around;
        margin-top:.44rem;
        .item{
          position: relative;
          width:1.56rem;
          height:1.08rem;
          box-shadow:0.02rem 0.03rem .1rem 0rem rgba(26,210,216,0.38);
          border-radius:.24rem;
          &:nth-of-type(1){
            background:linear-gradient(-35deg,rgba(77,209,255,1),rgba(64,157,255,1));
          }
          &:nth-of-type(2){
            background:linear-gradient(-35deg,rgba(253,140,39,1),rgba(249,109,40,1));
          }
          &:nth-of-type(3){
            background:linear-gradient(-14deg,rgba(255,131,184,1),rgba(254,74,138,1));
          }
          &:nth-of-type(4){
            background:linear-gradient(-35deg,rgba(238,238,238,1),rgba(126,126,126,1));
          }
          .text{
            position: absolute;
            width:0.70rem;
            top:0.1rem;
            left:0.18rem;
            font-size:.26rem;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color:rgb(61, 38, 38);
            text-shadow:0px 2px 3px rgba(66,166,255,0.25);
          }
          .icon{
            position: absolute;
            bottom: 0.13rem;
            right: 0.23rem;
            border:$b;
            width:.54rem;
            height:.55rem;
            background:rgba(255,255,255,1);
            box-shadow:0 0.02rem 0.04rem 0 rgba(0,29,4,0.1);
          }
        }
      }
     
    }
    .fans{
      width: 100%;
      box-sizing: border-box;
      padding:0 0.3rem;
      // padding-bottom: 1rem;
      margin-top:0.66rem;
      h2{
        
        font-size:.34rem;
        font-weight:bold;
        text-align: left;
        color:rgba(28,28,28,1);
      }
      .fans-item{
        width:100%;
        height: 4rem;
       
        margin-top:.33rem;
        .item{
          width: 100%;
          height: 1.06rem;
          margin-bottom: .64rem;
          &:last-child{
             margin-bottom: 1rem;
          }
          border:$b;
          .left{
            position: relative;
            float: left;
            width: 1.06rem;
            height: 1.06rem;
            img{
              display: block;
              height: 100%;
              width: 100%;
              border:$b;
              border-radius: 50%;
            }
            span{
              position: absolute;
              bottom: -0.1rem;
              left: 0.3rem;
              width:.48rem;
              height:.27rem;
              line-height: 0.27rem;
              text-align: center;
              background:rgba(255,95,171,1);
              border-radius:0.06rem;
              font-size:.20rem;
              font-weight:500;
              color:rgba(255,254,254,1);
              
            }
          }
          .right{
            float: right;
            width: .88rem;
            height: 100%;
            .follow{
              width:.88rem;
              height:.37rem;
              background:rgba(255,37,141,1);
              box-shadow:0.02rem 0.03rem 0.09rem 0 rgba(255, 185, 125, 0.35);
              border-radius:19px;
              font-size: 0.22rem;
              margin-top:0.33rem;
              text-align: center;
              line-height: 0.37rem;
            }
            .not-follow{
              width:.88rem;
              height:.37rem;
              background:rgba(165,165,165,1);
              box-shadow:2px 3px 9px 0px rgba(182, 182, 182, 0.35);
              border-radius:19px;
              font-size: 0.22rem;
              margin-top:0.33rem;
              text-align: center;
              line-height: 0.37rem;
            }
          }
          .middle{

            height: 100%;
            margin-left:1.43rem;
            margin-right:1.25rem;
            border:1px solid red;
            .name{
              width: 100%;
              height: 0.28rem;
              font-size:.28rem;
              line-height: 0.28rem;
              font-weight:bold;
              color:rgba(51,51,51,1);
              border:$b;
              margin-top:0.39rem;
            }
          }

        }
      }
    }
  }
</style>