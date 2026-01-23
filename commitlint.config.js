module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 自定义规则（如果需要）
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复bug
        'docs', // 文档
        'style', // 格式（不影响代码运行的变动）
        'refactor', // 重构（既不修复bug也不添加新功能的改动）
        'perf', // 性能优化
        'test', // 测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回滚
        'update', // 更新
        'up' // 简短更新
      ]
    ],
    'subject-case': [0] // 不强制要求提交信息大小写格式
  }
}
