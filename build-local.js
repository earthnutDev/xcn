import { _p, Color, isWindows, pathJoin, runOtherCode } from 'a-node-tools';

/// 清空
await runOtherCode('npx jja clear');
/// 删除
await runOtherCode('npx jja rm  dist *.tgz');
/// 构建
await runOtherCode('npm run build');
// 本地打包
const pack = await runOtherCode('npm pack');
/// 获取当前路径
const pwd = await runOtherCode({
  code: isWindows ? 'echo %cd%' : 'pwd',
  printLog: false,
});

const noLineBreak = str => str.replace(/\r?\n/g, '');
if (pack.success && pwd.success) {
  /// 输出路径
  const result = pathJoin(noLineBreak(pwd.data), noLineBreak(pack.data));
  console.log('====================================');
  console.log('\n\n');
  _p(Color.random('npm install '), false);
  _p(Color.random(result));
  await runOtherCode('echo "npm install ' + result + '" | pbcopy');
  console.log('\n\n');
  console.log(Color.random('已复制到剪切板'));
}
