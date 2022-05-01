/*
 * @Author: Marshall
 * @Date: 2022-05-02 07:34:02
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-02 07:34:02
 * @Description:
 * @FilePath: /low-code-editor/env.d.ts
 */
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
