import Mock from 'mockjs';

const Random = Mock.Random;
//使用mockjs模拟数据
Mock.mock('/api/list0', (req, res) => {//当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
    let list = [];
    for(let i = 0; i < 10; i++) {
        let listObject = {
            nick: Random.csentence(3, 8),//随机生成一段中文文本。
            company: Random.csentence(5, 10),
            status: '当前在线',//返回一个随机的整数。
            city: '广州市',
            age:Random.integer(18, 80)+'岁',
            avatar: Random.image('200x200', '#50B347', '#FFF', 'Mock.js'),
            imgSrc: require("@/assets/img/1.jpg")
        }
        list.push(listObject);
    }
    return {
        data: list
    }
})
Mock.mock('/api/list0', (req, res) => {//当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
    let list = [];
    for(let i = 0; i < 10; i++) {
        let listObject = {
            nick: Random.csentence(3, 8),//随机生成一段中文文本。
            company: Random.csentence(5, 10),
            status: '当前在线',//返回一个随机的整数。
            city: '广州市',
            age:Random.integer(18, 80)+'岁',
            avatar: Random.image('200x200', '#50B347', '#FFF', 'Mock.js'),
            imgSrc: require("@/assets/img/1.jpg")
        }
        list.push(listObject);
    }
    return {
        data: list
    }
})
Mock.mock('/api/list1', (req, res) => {//当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
    let list = [];
    for(let i = 0; i <100; i++) {
        let listObject = {
            nick: Random.csentence(3, 8),//随机生成一段中文文本。
            company: Random.csentence(5, 10),
            status: '当前在线',//返回一个随机的整数。
            city: '广州市',
            age:Random.integer(18, 80)+'岁',
            avatar: Random.image('200x200', '#50B347', '#FFF', '123'),
            imgSrc: require("@/assets/img/2.jpg")
        }
        list.push(listObject);
    }
    return {
        data: list
    }
})
Mock.mock('/api/list2', (req, res) => {//当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
    let list = [];
    for(let i = 0; i < 100; i++) {
        let listObject = {
            nick: Random.csentence(3, 8),//随机生成一段中文文本。
            company: Random.csentence(5, 10),
            status: '当前在线',//返回一个随机的整数。
            city: '广州市',
            age:Random.integer(18, 80)+'岁',
            avatar: Random.image('200x200', '#50B347', '#FFF', 'Mock.js'),
            imgSrc: require("@/assets/img/3.jpg")
        }
        list.push(listObject);
    }
    return {
        data: list
    }
})