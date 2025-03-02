import assert from 'node:assert';
import test from 'node:test';
import { mcn } from 'src';

test('测试基础功能', () => {
  assert.equal(mcn('a', 'b'), 'a b');
});

test('测试排序', () => {
  const classNameList = ['a', 'c', 'b'];
  assert.equal(mcn(...classNameList), classNameList.toSorted().join(' '));
  assert.notEqual(mcn(...classNameList), classNameList.join(' '));
});
