import Mock from 'mockjs'
let mock = Mock.mock('/bannerList',{
    code: 200,
    list: [
        {
            id: 1,
            src: 'static/img/01.jpg'
        },
        {
            id: 2,
            src: 'static/img/02.jpg'
        },
        {
            id: 3,
            src: 'static/img/03.jpg'
        }
    ]
})

export default mock;