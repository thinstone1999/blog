import test from 'node:test'
import assert from 'node:assert/strict'
import { getReadingTime } from '@/lib/getReadingTime'

test('getReadingTime ignores fenced code blocks', () => {
  const content = ['你好世界', '```ts', 'const ignored = true', '```', '再见'].join('\n')
  const result = getReadingTime(content, 300)

  assert.equal(result.words, 6)
})
