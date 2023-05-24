// import I18n from 'i18n';
import { Dimensions, Linking } from 'react-native';
import Toast from 'react-native-simple-toast';

export const CustomToast = (value: string) => {
    Toast.show(value);
};

export const CustomToastDev = () => {
    // Toast.show(I18n.t('handleError.developing'));
};

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
        return title;
    }
    const titleArr = title.split('');

    let shortTitle = '';
    for (let i = 0; i < titleArr.length; i++) {
        if (i > maxWidth) break;
        shortTitle += titleArr[i];
    }
    return shortTitle + '...';
}

export const { width: widthScreen, height: heightScreen } = Dimensions.get('screen');
export const { width: widthWindow, height: heightWindow } = Dimensions.get('window');


export const formatDate = (_day: Date) => {
    const newDate = new Date(_day)
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const hour = newDate.getHours();
    const miniutes = newDate.getMinutes();

    let dayString = day.toString();
    let monthString = month.toString();
    let yearString = year.toString();
    let hourString = hour.toString();
    let miniuteString = miniutes.toString();

    if (day < 10) {
        dayString = '0' + dayString;
    }
    if (month < 10) {
        monthString = '0' + monthString;
    }
    if (hour < 10) {
        hourString = '0' + hourString;
    }
    if (miniutes < 10) {
        miniuteString = '0' + miniuteString;
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
    );
};


export const handleOpenCall = (phone: string) => {
    if (phone) {
      Linking.openURL(`tel:${phone}`)
    }
  }
