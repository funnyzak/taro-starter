import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { appName } from '@/config/app.config';
import { useReady } from '@tarojs/taro';
import homeIcon from '@/images/icon/home.png';
import './index.scss';

const Index: React.FC = () => {
  const [detail, setDetail] = useState<String>(appName);
  useReady(async () => {
    setDetail('这是首页');
  });

  return (
    <View className='page-wrap'>
      <h1 style={{ textAlign: 'center' }}>{detail}</h1>
      <dl>
        <dt>环境参数：</dt>
        <dd>NODE_ENV: {process.env.NODE_ENV}</dd>
        <dd>TARO_ENV: {process.env.TARO_ENV}</dd>
      </dl>
      <br />
      <img src='./public/favicon.png' />
      <br />
      <img src={homeIcon} />
      <br />
    </View>
  );
};

export default Index;
