/*
 * @Author: Marshall
 * @Date: 2022-04-27 20:49:37
 * @LastEditors: Marshall
 * @LastEditTime: 2022-04-27 20:55:49
 * @Description: 
 * @FilePath: /low-code-editor/packages/shared/build.config.ts
 */
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index'
  ],
  declaration: true,
  rollup: {
    emitCJS: true 
  }
})