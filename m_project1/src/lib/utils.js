let local = {
    save(k, v) { 
        localStorage.setItem(k,JSON.stringify(v))
    },
    get(k) { 
        return JSON.parse(localStorage.getItem(k) || {});
    }
}

export default {
    install: function (Vue) { 
        Vue.prototype.$local = local;
    }
}