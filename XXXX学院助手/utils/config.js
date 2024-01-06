/**首页公告 */
function getIndex() {
  return {
    "notice": "我的校园助手的公告!"
  }
}
//失物招领
function lostAndFound(){
   return {
     goods:[
       {
         id: 1,
         logo: "/img/key.jpg",
         goods: "教室一",
         name: "宝三201",
         mobile: "45",
         addr: "福建省石狮市闽南理工学院 605教室"
       },
       {
         id: 2,
         logo: "/img/key.jpg",
         goods: "教室一",
         name: "宝三201",
         mobile: "45",
         addr: "福建省石狮市闽南理工学院 605教室"
       },
       {
         id: 3,
         logo: "/img/key.jpg",
         goods: "教室一",
         name: "宝三201",
         mobile: "45",
         addr: "福建省石狮市闽南理工学院 605教室"
       },
       {
         id: 4,
         logo: "/img/key.jpg",
         goods: "教室一",
         name: "宝三201",
         mobile: "45",
         addr: "福建省石狮市闽南理工学院 605教室"
       },
       {
         id: 5,
         logo: "/img/key.jpg",
         goods: "教室一",
         name: "宝三201",
         mobile: "45",
         addr: "福建省石狮市闽南理工学院 605教室"
       },
       {
         id: 6,
         logo: "/img/key.jpg",
         goods: "教室一",
         name: "宝三201",
         mobile: "45",
         addr: "福建省石狮市闽南理工学院 605教室"
       }
     ]
   }
}

//二手商品配置
function getFoundthing() {
  return {
    goodsList: [
      {
        "id":1,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        //辅助图片描述 4张
        "picdesc":[
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "书",
        "status": 0,
        "desc": "",
        "contact": "10086",
        "price": "99",
      area: 1 //1表示南校区 2表示北校区
      },
      {
        "id": 2,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        "picdesc": [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "水杯",
        "status": 1,
        "desc": "我商品描述二哦^_^我商品描述2哦^_^",
        "contact": "10086",
        "price": "99", area: 1 //1表示南校区 2表示北校区
      },
      {
        "id": 3,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        "picdesc": [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "书2",
        "status": 1,
        "desc": "我商品描述三哦^_^我商品描述3哦^_^我商品描述3哦^_^",
        "contact": "10086",
        "price": "99", area: 1 //1表示南校区 2表示北校区
      },
      {
        "id": 10,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        "picdesc": [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "水杯",
        "status": 0,
        "desc": "红色绿色",
        "contact": "10086",
        "price": "99", area: 1 //1表示南校区 2表示北校区
      },
      {
        "id": 4,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        "picdesc": [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "好",
        "status": 0,
        "desc": "是^_^",
        "contact": "10086",
        "price": "99", area: 1 //1表示南校区 2表示北校区
      },
      {
        "id": 5,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        "picdesc": [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "牛",
        "status": 0,
        "desc": "事实^_^",
        "contact": "10086",
        "price": "99", area: 2 //1表示南校区 2表示北校区
      },
      {
        "id": 6,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        "picdesc": [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "杨",
        "status": 0,
        "desc": "绿色^_^",
        "contact": "10086",
        "price": "99", area: 1 //1表示南校区 2表示北校区
      },
      {
        "id":7,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        "picdesc": [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "学生八",
        "status":0,
        "desc": "我商品描述7哦^_^",
        "contact": "10086",
        "price": "99", area: 2//1表示南校区 2表示北校区
      },
      {
        "id": 8,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        "picdesc": [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "继",
        "status":0,
        "desc": "我商品描述8哦^_^",
        "contact": "10086",
        "price": "99", area: 1 //1表示南校区 2表示北校区
      },
      {
        "id": 9,
        "logo": "http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg",
        "picdesc": [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3316419459,29192861&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1005384713,2963361968&fm=27&gp=0.jpg",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=3006455014,3110469038&fm=85&s=75102D3B170269434CF1BDCE0300E024",
          "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=272289460,1872214664&fm=85&s=9F104D8568B3AA8CA4B035A70300C000"
        ],
        "avatars": "http://img1.imgtn.bdimg.com/it/u=2278739224,3680254183&fm=26&gp=0.jpg",
        "name": "学生十",
        "status": 0,
        "desc": "我商品描述9哦^_^",
        "contact": "10086",
        "price": "99", area:2 //1表示南校区 2表示北校区
      }
    ]
  }
}
//报修配置
function getShopHelper(){
  return {
     //南校区
     shophelper0:[
        {
          id:1,
          goods:"灯",
          addr:"6舍一栋",
          sex:"男",
          name:"唐一",
avatarurl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=274612981,3403090092&fm=27&gp=0.jpg",
          contact:"15520449931",
          money:3,
          time:"2019-3-19 16:35:25",
          status:0, 
        },
        {
         id: 2,
         goods: "门",
         addr: "6舍一栋",
         sex: "女",
         name: "梅花",
         avatarurl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=274612981,3403090092&fm=27&gp=0.jpg",
         contact: "15520449931",
         money: 3,
         time: "2019-3-19 13:35:25",
          status: 1
       },
       {
         id: 3,
         goods: "风扇",
         addr: "6舍一栋",
         sex: "女",
         name: "梅花",
         avatarurl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=274612981,3403090092&fm=27&gp=0.jpg",
         contact: "15520449931",
         money: 3,
         time: "2019-3-19 09:35:25",
         status: 0
       },
       {
         id: 4,
         goods: "厕所",
         addr: "6舍一栋",
         sex: "女",
         name: "梅花",
         avatarurl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=274612981,3403090092&fm=27&gp=0.jpg",
         contact: "15520449931",
         money: 3,
         time: "2019-3-19 09:35:25",
         status: 0
       },
       {
         id: 5,
         goods: "椅子",
         addr: "6舍一栋",
         sex: "女",
         name: "梅花",
         avatarurl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=274612981,3403090092&fm=27&gp=0.jpg",
         contact: "15520449931",
         money: 3,
         time: "2019-3-19 09:35:25",
         status: 0
       },
       {
         id: 6,
         goods: "门",
         addr: "6舍一栋",
         sex: "女",
         name: "梅花",
         avatarurl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=274612981,3403090092&fm=27&gp=0.jpg",
         contact: "15520449931",
         money: 3,
         time: "2019-3-19 09:35:25",
         status: 0
       }
     ],
    //北校区
     shophelper1: [
       {
         id: 1,
         goods: "灯",
         addr: "5舍一栋",
         sex: "男",
         name: "唐一",
         avatarurl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=274612981,3403090092&fm=27&gp=0.jpg",
         contact: "15520449931",
         money: 3,
         time: "2019-3-19 16:35:25",
         status: 1
       },
       {
         id: 2,
         goods: "椅子",
         addr: "6舍一栋",
         sex: "女",
         name: "梅花",
         avatarurl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=274612981,3403090092&fm=27&gp=0.jpg",
         contact: "15520449931",
         money: 3,
         time: "2019-3-19 13:35:25",
         status: 0
         
       },
       {
         id: 3,
         goods: "卓骗子",
         addr: "6舍一栋",
         sex: "女",
         name: "梅花",
         avatarurl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=274612981,3403090092&fm=27&gp=0.jpg",
         contact: "15520449931",
         money: 3,
         time: "2019-3-19 09:35:25",
         status: 0
       }
     ],
  }
}


module.exports={
  getIndex: getIndex,
  getFoundthing: getFoundthing,
  getShopHelper: getShopHelper,
  lostAndFound: lostAndFound
}