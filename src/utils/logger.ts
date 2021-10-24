import Taro from '@tarojs/taro';

export const toast = (
  name: string,
  action: string,
  info: string | object = ''
) => {
  if (typeof info === 'object') {
    info = JSON.stringify(info);
  }
  Taro.showToast({
    title: `${name}${action}${info}`,
    icon: 'none',
    duration: 3000
  });
};

export const log = (logObject: any, level: string = 'debug') => {
  let logString =
    typeof logObject === 'object' ? JSON.stringify(logObject) : logObject;
  logString = `${level} => ${logString}`;
  if (level === 'error') {
    console.error(logString);
  } else if (level === 'warning') {
    console.warn(logString);
  } else if (level === 'info' && process.env.NODE_ENV === 'development') {
    console.log(logString);
  } else if (level === 'debug' && process.env.NODE_ENV === 'development') {
    console.log(logString);
  }
};
