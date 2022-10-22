import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { APP_NAME } from '@/config/app.config'
import { useReady } from '@tarojs/taro'
import './index.scss'

const Index: React.FC = () => {
  const [detail, setDetail] = useState(APP_NAME)
  useReady(async () => {
    setDetail('这是日程页')
  })

  return <View className='page-wrap'>{detail}</View>
}

export default Index
