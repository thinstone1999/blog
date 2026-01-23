module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 禁用所有严格规则，允许自由格式的提交消息
    'type-enum': [0], // 不限制提交类型
    'type-empty': [0], // 不要求必须有类型
    'subject-empty': [0], // 不要求必须有主题
    'type-case': [0], // 不强制类型大小写
    'type-min-length': [0], // 不限制类型最小长度
    'subject-min-length': [0], // 不限制主题最小长度
    'header-max-length': [0] // 不限制标题最大长度
  }
}
