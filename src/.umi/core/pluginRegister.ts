// @ts-nocheck
import { plugin } from './plugin';
import * as Plugin_0 from 'C:/Users/lx/Desktop/file/test/src/app.ts';
import * as Plugin_1 from 'C:/Users/lx/Desktop/file/test/src/.umi/plugin-dva/runtime.tsx';
import * as Plugin_2 from '../plugin-initial-state/runtime';
import * as Plugin_3 from '../plugin-model/runtime';
import * as Plugin_4 from '@@/plugin-qiankun/masterRuntimePlugin';

  plugin.register({
    apply: Plugin_0,
    path: 'C:/Users/lx/Desktop/file/test/src/app.ts',
  });
  plugin.register({
    apply: Plugin_1,
    path: 'C:/Users/lx/Desktop/file/test/src/.umi/plugin-dva/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_2,
    path: '../plugin-initial-state/runtime',
  });
  plugin.register({
    apply: Plugin_3,
    path: '../plugin-model/runtime',
  });
  plugin.register({
    apply: Plugin_4,
    path: '@@/plugin-qiankun/masterRuntimePlugin',
  });
