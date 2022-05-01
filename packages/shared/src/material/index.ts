/*
 * @Author: Marshall
 * @Date: 2022-05-02 03:13:44
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-02 03:36:51
 * @Description:
 * @FilePath: /low-code-editor/packages/shared/src/material/index.ts
 */
export interface ICategory {
  name: string;
}

export interface IMaterialData {
  /** 版本 */
  version: string;
  /** 物料源 */
  source: string;
}

export interface IMaterial extends IMaterialData {
  id: number;
  /** 类型 */
  type: string;
  /** 类目 */
  category: ICategory;
  /** 数据 */
  data: Array<IMaterialData>;
}

export interface IMaterialLoader {
  type: string;
  load(material: IMaterial): Promise<any>;
}
