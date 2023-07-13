const Mock = require('mockjs');

const phones = [
  {
    id: 1,
    title: "iPhone8 Plus",
    otherTitle: "iPhone8 64G 3G 深空灰",
    price: 3559,
    oldPrice: 5999,
    seckill: 1,
    num: "1"
    
  },
  {
    id: 2,
    title: "OPPO R11",
    otherTitle: "OPPO R11 64G 土豪金",
    price: 899,
    oldPrice: 2499,
    seckill: 1,
    num: "1"
  },
  {
    id: 3,
    title: "iPhone8",
    otherTitle: "iPhone8 64G 3G 土豪金",
    price: 2659,
    oldPrice: 5099,
    seckill: 1,
    num: "1"
  },
]
Mock.mock(/\/api\/Shopping/, 'get', phones)

const detailList = [
  {
    id: 1,
    title: "iPhone8 Plus",
    otherTitle: "iPhone8 64G 3G 深空灰",
    price: 3559,
    num: 1
  },
  {
    id: 2,
    title: "OPPO R11",
    otherTitle: "OPPO R11 64G 土豪金",
    price: 899,
    num: 1
  },
  {
    id: 3,
    title: "iPhone8",
    otherTitle: "iPhone8 64G 3G 土豪金",
    price: 2659,
    num: 1
  }
];
//mock高级用法
Mock.mock("/api/detail", "post", function(options) {
  let index = options.body - 1;
  return detailList[index];
})