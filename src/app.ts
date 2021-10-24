import 'default-passive-events';

import './app.scss';
// import { isWechatBrower } from '@/utils'

const App = (props: any) => {
  // console.log('hello world')
  // this.props.children 是将要会渲染的页面
  // console.log(navigator.userAgent.toLowerCase())
  // console.log(isWechatBrower)
  return props.children;
};

export default App;
