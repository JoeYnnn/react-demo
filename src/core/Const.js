/**
 * Created by vincent on 2016/11/16.
 */

const Const = {
  cookie: {
    SESSION_ID: 'session_id',
    USER_ID: 'userid',
    NAME: 'name',
    ROLE: 'role',
    HEAD_ICON: 'headicon',
    IS_VERIFIED: 'isVerified',
    COMPANY_NAME: 'companyName',
    PHONE: 'phone',
    ACCESS_KET_Id: 'AccessKeyId',
    BUSINESS_LICENSE_PIC: "businessLicensePic",
    ID_CARD_NUMBER: 'idCardNumber',
    ID_CARD_FRONT_PIC: 'idCardFrontPic',
    WALLET: 'wallet',
    VERIFY_STATUS: 'verifyStatus',
    PERMISSION: 'permission'
  },

  route: {
    FINANCE_CENTER: '/financeCenter',
    HOME_PAGE: '/homePage',
    MESSAGE: '/message',
    MODIFYPWD: './modifyPwd',
    BATCH: '/batch',
    PERSONAL: '/personal',
    USER_DETAIL: '/userDetail',
    SOURCE_DETAIL: '/sourceDetail',
    SOURCE: '/source',
    COMPLETE: '/complete',
    EDITDATA: './editData',
    ONGOING: './onGoing',
    WAITCONFIRM: './waitConfirm',
    SOURCEONGOING: './sourceOnGoing',
    SOURCECOMPLETE: './sourceComplete',
    SOURCEONGOING_DETAIL: './sourceOnGoingDetail',
    STOCK: './stock',
    ROUTE: './route',
    SUB_ACCOUNT: './subAccount',
    CONTRACT: './myContract',
    PERMISSIONS: './permissions'
  },

  goodsType: {
    TEXTILE: "轻纺",
    SPORT: "文体",
    COMMODITY: "日用品",
    WOOD_PRODUCT: "木制品",
    PAPER_PRODUCT: "纸制品",
    METAL: "金属",
    COAL: "煤炭",
    MINERAL: "矿石",
    BUILDING_MATERIAL: "建材",
    ELECTRONICS: "电器",
    NORMAL_CHEMICAL: "化学物品",
    GLASS: "易碎品",
    STONE: "石材",
    DANGEROUS_CHEMICAL: "危险品",
    STEEL: "钢材",
    AGRICULTURAL_PRODUCT: "农副产品",
    OTHER: "其它"
  },

  billsType: {
    PHONE_CHARGE: "手机充值",
    WITHDRAWAL: "提现",
    RED_PACKET: "红包",
    REFOUND: "退款",
    TASK: "收入",
    BONUS: "奖金",
    UNKNOWN: "未知",
    CHARGE: "充值",
    TRANSFER: "转账",
    WITHDRAWAL_REFOUND: "提现失败退款",
    FARE: "运费"
  },

  localStorage: {
    PROVINCE: 'province',
  },

  aliyunOSS: {
    bucket: 'kcsj',
    region: 'oss-cn-beijing',
    endpoint: 'oss-cn-beijing.aliyuncs.com',
    osspath: 'http://kcsj.oss-cn-beijing.aliyuncs.com/'
  },

  status: {
    DONE: '已完成',
    PROCESS: '进行中'
  },

  source: {
    SYSTEM_ADD: '系统添加',
    ORDER_SETTLEMENT: '订单结算'
  },

  carType: {
    CAR: '蓝牌车',
    TOTAL_TRUCK: '黄牌整车',
    TRAILER_TRUCK: '黄牌挂车',
    CARRIAGE_TRUCK: '黄牌牵引车'
  },

  appointmentStatus:{
    EXPIRED:'车辆未到',
    NOT_BEGIN:'未开始',
    ALREADY_BEGIN:'车辆已到'
  }

};

export default Const;