export default {
  realname: {
    value: '',
    mark: '全部是中文,且不大于10个字',
    regular: (value) => /[\u4e00-\u9fa5]/.test(value) && value.length <= 10,
    listener: (info) => console.log(info),
  },
  nickname: {
    value: '',
    mark: '昵称需为中英文数字字母下划线组成,且不大于10个字',
    regular: (value) =>
      /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(value) && value.length <= 10,
     // listener: (info) => console.log(info),
  },

  idnumber: {
    value: '',
    mark: '8位数字',
    regular: (value) => /^\d+$/.test(value) && value.length === 8,
  },
  gender: {
    value: '',
    mark: '必须选择性别',
    regular: (value) => ['female', 'male'].includes(value),
  },
  occupation: {
    value: '',
    mark: '必须选择职业',
    regular: (value) =>
      ['frontend', 'backend', 'network', 'operation'].includes(value),
  },

  learning: {
    value: [],
    mark: '至少选择一门学习语言',
    regular: (value) =>
      value.every((el) => ['java', 'go', 'javascript'].includes(el)) &&
      value.length > 0,
  },

  intro: {
    value: '',
    mark: '至少填写10个字',
    regular: (value) => value.length >= 10,
  },
  confirm: '#submitBtn',

  submit: (info,state) => {
    /* 
     * { 
        realname:'小野森森',
        idnumber:1234567,
        gender:'male',
        occupation:'backend'
        learning:['java','go'],
        intro:'我是一名前端工程师,你好'
      }
    
    */
    console.log('submit', info,state);
  },
};
