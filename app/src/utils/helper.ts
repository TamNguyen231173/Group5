// import I18n from 'i18n';
import { Dimensions, Linking } from 'react-native'
import Toast from 'react-native-simple-toast'

export const CustomToast = (value: string) => {
  Toast.show(value)
}

export const CustomToastDev = () => {
  // Toast.show(I18n.t('handleError.developing'));
}

export const regexPhoneNumber: string = '^[0-9-+]{9,15}$'
// export const convertCurrency = value => {
//   if (value == null) {
//     return 0;
//   }
//   if (typeof value !== 'string') {
//     value = value.toString();
//   }
//   if (value === '0') {
//     return '0';
//   }
//   let result = '';
//   if (value.length >= 3) {
//     result = value;
//   }
//   if (value.length >= 4) {
//     result = `${value.substr(0, value.length - 3)}.${value.substr(
//       value.length - 3,
//       value.length,
//     )}`;
//   }
//   if (value.length >= 7) {
//     result = `${value.substr(0, value.length - 6)}.${value.substr(
//       value.length - 6,
//       3,
//     )}.${value.substr(value.length - 3, value.length)}`;
//   }
//   if (value.length >= 10) {
//     result = `${value.substr(0, value.length - 9)}.${value.substr(
//       value.length - 9,
//       3,
//     )}.${value.substr(value.length - 6, 3)}.${value.substr(
//       value.length - 3,
//       value.length,
//     )}`;
//   }

//   return result;
// };

// export const convertHTML = str => {
//   return str.replace(/font-family:[^;]+;?|font-weight:[^;]+;?/g, '');
// };

// export const convertHTMLtoText = str => {
//   return str
//     .replace(/<style([\s\S]*?)<\/style>/gi, ' ')
//     .replace(/<script([\s\S]*?)<\/script>/gi, ' ')
//     .replace(/(<(?:.|\n)*?>)/gm, ' ')
//     .replace(/\s+/gm, ' ');
// };

// export const convertCart = (cart = []) => {
//   return JSON.stringify(
//     cart?.map(value => {
//       const {
//         item_id,
//         option_id,
//         quantity,
//         price,
//         price_buy,
//         combo_id,
//         combo_info,
//       } = value;
//       return {
//         item_id,
//         option_id,
//         quantity,
//         price,
//         price_buy,
//         combo_id: combo_id || '0',
//         combo_info: combo_info || '',
//       };
//     }),
//   );
// };

// export const convertOption = (arr_option_tmp, option1, option2, option3) => {
//   return arr_option_tmp?.find(value => {
//     const checkOption1 = value.Option1 === option1;
//     const checkOption2 = value.Option2 === option2;
//     const checkOption3 = value.Option3 === option3;
//     return checkOption1 && checkOption2 && checkOption3;
//   });
// };

export const getShortTitle = (title: string, maxWidth: number) => {
  if (title.length <= maxWidth) {
    return title
  }
  const titleArr = title.split('')

  let shortTitle = ''
  for (let i = 0; i < titleArr.length; i++) {
    if (i > maxWidth) break
    shortTitle += titleArr[i]
  }
  return shortTitle + '...'
}

export const { width: widthScreen, height: heightScreen } =
  Dimensions.get('screen')
export const { width: widthWindow, height: heightWindow } =
  Dimensions.get('window')

export const formatDate = (_day: Date) => {
  const newDate = new Date(_day)
  const day = newDate.getDate()
  const month = newDate.getMonth() + 1
  const year = newDate.getFullYear()
  const hour = newDate.getHours()
  const miniutes = newDate.getMinutes()

  let dayString = day.toString()
  let monthString = month.toString()
  let yearString = year.toString()
  let hourString = hour.toString()
  let miniuteString = miniutes.toString()

  if (day < 10) {
    dayString = '0' + dayString
  }
  if (month < 10) {
    monthString = '0' + monthString
  }
  if (hour < 10) {
    hourString = '0' + hourString
  }
  if (miniutes < 10) {
    miniuteString = '0' + miniuteString
  }

  return (
    hourString +
    ':' +
    miniuteString +
    ' - ' +
    dayString +
    '/' +
    monthString +
    '/' +
    yearString
  )
}

export const handleOpenCall = (phone: string) => {
  if (phone) {
    Linking.openURL(`tel:${phone}`)
  }
}

export const listTempAvatar = [
  'https://firebasestorage.googleapis.com/v0/b/demoappnhac-93ada.appspot.com/o/pic%2Fcao.png?alt=media&token=6be4b2a2-7693-4461-9f9b-29af0d9b364e&_gl=1*li1yic*_ga*MTcwODkxMTYxNi4xNjg2NDk1MDgx*_ga_CW55HF8NVT*MTY4NjY3MjM2NC4yLjEuMTY4NjY3MzAwOC4wLjAuMA..',
  'https://firebasestorage.googleapis.com/v0/b/demoappnhac-93ada.appspot.com/o/pic%2Fcho.png?alt=media&token=a9064de8-b159-4737-8ddc-c721bf763fac&_gl=1*1nyhgp3*_ga*MTcwODkxMTYxNi4xNjg2NDk1MDgx*_ga_CW55HF8NVT*MTY4NjY3MjM2NC4yLjEuMTY4NjY3MzA1MC4wLjAuMA..',
  'https://firebasestorage.googleapis.com/v0/b/demoappnhac-93ada.appspot.com/o/pic%2Fchuot.png?alt=media&token=a3d748d7-df5c-4161-9c98-2708182061ee&_gl=1*16ysryr*_ga*MTcwODkxMTYxNi4xNjg2NDk1MDgx*_ga_CW55HF8NVT*MTY4NjY3MjM2NC4yLjEuMTY4NjY3MzA1OS4wLjAuMA..',
  'https://firebasestorage.googleapis.com/v0/b/demoappnhac-93ada.appspot.com/o/pic%2Fgau.png?alt=media&token=bee8d74c-f8f6-4c71-b8c9-46464836e83d&_gl=1*1f4uv7w*_ga*MTcwODkxMTYxNi4xNjg2NDk1MDgx*_ga_CW55HF8NVT*MTY4NjY3MjM2NC4yLjEuMTY4NjY3MzA3MC4wLjAuMA..',
  'https://firebasestorage.googleapis.com/v0/b/demoappnhac-93ada.appspot.com/o/pic%2Fhuou.png?alt=media&token=fda1d8bf-123c-4dd2-bca3-8bff1e80ec78&_gl=1*1egnxz5*_ga*MTcwODkxMTYxNi4xNjg2NDk1MDgx*_ga_CW55HF8NVT*MTY4NjY3MjM2NC4yLjEuMTY4NjY3MzA4MC4wLjAuMA..',
  'https://firebasestorage.googleapis.com/v0/b/demoappnhac-93ada.appspot.com/o/pic%2Fmeo.png?alt=media&token=f72ad631-2c42-42ab-ab7b-6ebd7a5dcfa0&_gl=1*oxx5y6*_ga*MTcwODkxMTYxNi4xNjg2NDk1MDgx*_ga_CW55HF8NVT*MTY4NjY3MjM2NC4yLjEuMTY4NjY3MzA4OC4wLjAuMA..',
  'https://firebasestorage.googleapis.com/v0/b/demoappnhac-93ada.appspot.com/o/pic%2Fmonkey.png?alt=media&token=b8322eeb-0b8f-45fd-bfa3-1f15e6a02ebd&_gl=1*10qz36j*_ga*MTcwODkxMTYxNi4xNjg2NDk1MDgx*_ga_CW55HF8NVT*MTY4NjY3MjM2NC4yLjEuMTY4NjY3MzA5OC4wLjAuMA..',
]
