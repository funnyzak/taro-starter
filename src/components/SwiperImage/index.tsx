import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { Image, Swiper, SwiperItem } from '@tarojs/components';
import './index.scss';

interface IProps {
  interval?: number;
  vertical?: boolean;
  /**
   * 是否可预览
   */
  preview?: boolean;
  /**
   * 图片集合
   */
  imgList: Array<string>;
}

const Index: React.FC<IProps> = ({ interval, vertical, preview, imgList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreview = () => {
    if (preview) {
      Taro.previewImage({
        current: imgList[currentIndex],
        urls: imgList
      });
    }
  };

  useEffect(() => {
    // log(`current img:` + imgList[currentIndex], 'debug');
  });

  return imgList.length > 1 ? (
    <Swiper
      className='swiper'
      style={{ height: 45 + 'vw' }}
      onClick={handlePreview}
      indicatorDots={false}
      indicatorColor='#999'
      indicatorActiveColor='#333'
      vertical={vertical}
      interval={interval}
      onChange={(v) => {
        setCurrentIndex(v.detail.current);
      }}
      circular
      autoplay={imgList.length > 1}
    >
      {imgList.map((img, i) => {
        return (
          <SwiperItem key={i}>
            <Image mode='scaleToFill' className='banner-img' src={img} />
          </SwiperItem>
        );
      })}
    </Swiper>
  ) : (
    <Image
      mode='widthFix'
      className='banner'
      onClick={handlePreview}
      src={imgList[0]}
    />
  );
};

Index.defaultProps = {
  interval: 5000,
  preview: true,
  imgList: ['https://7n.niuqi.cc/example/images/e750x400.jpg']
};

export default Index;
