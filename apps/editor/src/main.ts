/*
 * @Author: Marshall
 * @Date: 2022-04-27 23:18:50
 * @LastEditors: Marshall
 * @LastEditTime: 2022-04-28 00:04:48
 * @Description: 
 * @FilePath: /low-code-editor/apps/editor/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import { sum } from '@apollo-fe/shared'

const app = createApp(App)
app.mount('#app')
