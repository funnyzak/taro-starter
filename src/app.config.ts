export default {
  pages: ['pages/home/index', 'pages/date/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#A40000',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
        iconPath: './images/icon/home.png',
        selectedIconPath: './images/icon/home_sel.png'
      },
      {
        pagePath: 'pages/date/index',
        text: '日程',
        iconPath: './images/icon/date.png',
        selectedIconPath: './images/icon/date_sel.png'
      }
    ],
    position: 'bottom',
    custom: false
  }
};
