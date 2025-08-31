import { _p, colorLine } from 'a-node-tools';
import { xcn } from '../index';
import { randomPen } from 'color-pen';

colorLine('开始测试');

xcn(
  'a',
  { a: false, b: true, c: true },
  ['g', 'op', undefined, undefined, 1],
  undefined,
  0,
  null,
)
  .split(' ')
  .forEach(e => _p(randomPen`${e} `, false));

colorLine('结束测试');
