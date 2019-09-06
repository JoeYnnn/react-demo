/**
 * Created by yueer on 16/10/19.
 */
'use strict';

function validatePhone(phone) {
  if((/^1[3-9]\d{9}$/.test(phone))){
    return true;
  }else{
    return false;
  }
}

function getQueryParameters(str) {//获取地址变量
  if (location.search.split('?')[1] == null) {
    return null;
  } else {
    return location.search.split('?')[1].split('&').map(function (n) {
      return n = n.split("="), this[n[0]] = n[1], this;
    }.bind({}))[0][str];
  }
}

function getLocationByPoint(point) {
  return new Promise((resolve, reject) => {
    if(point){
      let location=point.split(',');
      var geoc = new BMap.Geocoder();
      var pt = new BMap.Point(parseFloat(location[0]), parseFloat(location[1]));
      geoc.getLocation(pt, function (rs) {
        resolve(rs.address);
      });
    }else{
      reject();
    }
  });

}

module.exports =  {validatePhone, getQueryParameters, getLocationByPoint};