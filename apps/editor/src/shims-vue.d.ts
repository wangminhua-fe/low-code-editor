/*
 * @Author: Marshall
 * @Date: 2022-04-28 00:16:11
 * @LastEditors: Marshall
 * @LastEditTime: 2022-04-28 00:16:41
 * @Description: 
 * @FilePath: /low-code-editor/shims-vue.d.ts
 */
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}