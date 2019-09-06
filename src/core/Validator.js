/**
 * Created by vincent on 2016/11/22.
 */

import Const from '../core/Const';
import {goodsType} from '../web-common/components/GoodsType/GoodsType';

const Validator = {

  REG_NUMBER: '^[0-9]*$',
  REG_EMAIL: '^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$',
  REG_PHONE: '^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\\d{8}$',
  REG_NON_NEGATIVE_FLOAT: '^\\d+(\\.\\d+)?$',//非负浮点数

  assembleCallback(data, mode, successCallback, errorCallback) {
    if(this.validByRegExp(data, mode)) {
      successCallback && successCallback();
    } else {
      errorCallback && errorCallback();
    }
  },

  /**
   * 通过正则表达式匹配
   * @param data
   * @param reg
   */
  validByRegExp(data, reg) {
    const regExp = new RegExp(reg);
    return regExp.test(data);
  },

  /**
   * 校验地址
   * @param data {province: '浙江', city: '杭州'，county: '下城区'}
   * @returns {boolean} 是
   */
  validAddress(data) {
    if (window.localStorage) {
      let areaInfoString = localStorage.getItem(Const.localStorage.PROVINCE);
      if (areaInfoString) {
        let provinces = JSON.parse(areaInfoString);
        return !!(provinces[data.province] && provinces[data.province][data.city]);
      } else {
        return true;
      }
    } else {
      console.warn('This browser does NOT support localStorage');
      return true;
    }
  },

  /**
   * 是否是空字符串
   * @param data
   * @returns {boolean}
   */
  validNonEmptyString(data) {
    if (data) {
      if (typeof data === 'string') {
        if (data.length > 0) {
          return true;
        } else {
          console.log('input string is empty');
          return false;
        }
      } else {
        console.log('input is not a string object');
        return false;
      }
    }
    console.log('input string is undefined');
    return false;
  },
  /*
  * 上传的货物类型是否和列表的类型一致
  * */
  validGoodsType(data){
      //console.info(goodsType);
      for (let type in goodsType) {
        if ( goodsType[type] != data ) {
          console.log('goodsTyle is ettor');
        }else{
          return true;
        }
      }

      return false;
  },


  /**
   * 验证字符串长度是否满足需求
   * @param data
   * @param minLength 最小长度
   * @param maxLength 最大长度
   * @returns {boolean}
   */
  validLength(data, minLength, maxLength) {
    const min = minLength ? minLength : 0;
    const max = maxLength ? maxLength : 30;

    return data.length >= min && data.length <= max;
  }

};

export default Validator;