import ToastTemplate from '@/components/Toast'

let Toast = {}

Toast.install = function(Vue,params={}){
  const VueToast = Vue.extend(ToastTemplate)  //创建模板
  let toast = null

  Vue.prototype.$toast = (params={}) =>{
    if(!toast){
      toast = new VueToast().$mount()  //创建实例
      document.body.appendChild(toast.$el)  //挂载实例
    }
    toast.show(params)
  }
}
export default Toast