import { uuid } from "../utils";

/*
 * @Author: Marshall
 * @Date: 2022-05-02 03:31:34
 * @LastEditors: Marshall
 * @LastEditTime: 2022-05-02 07:25:04
 * @Description:
 * @FilePath: /low-code-editor/packages/shared/src/project/index.ts
 */
interface IElement {
  id: string;
  /** 名称 */
  name: string;
  /** 物料ID */
  mId: number;
  /** 物料版本 */
  mVersion: string;
}

interface IPage {
  /** 名称 */
  name: string;
  /** 描述 */
  description: string;
  /** 元素 */
  elements: IElement[];
}

interface IProject {
  id: number;
  /** 名称 */
  name: string;
  /** 类型 */
  // type: string;
  /** 描述 */
  description: string;
  /** 页面 */
  pages: IPage[];
}

export class Project implements IProject {
  public static create(p?: IProject) {
    const project = new Project();
    if (p) {
      project.id = p.id;
      project.name = p.name;
      project.description = p.description;
      project.pages = p.pages.map((page) => Page.create(page));
    } else {
      project.addPage(Page.create());
    }

    return project;
  }

  public id: number;
  public name: string = "New Project";
  public description: string = "New Project Description";
  public pages: Page[] = [];

  public addPage(page: Page) {
    this.pages.push(page);
  }

  public removePage(page: Page) {
    const index = this.pages.indexOf(page);
    if (index >= 0) {
      this.pages.splice(index, 1);
    }
  }

  public insertPage(index: number, page: Page) {
    this.pages.splice(index, 0, page);
  }

  public getJson() {
    return {
      name: this.name,
      description: this.description,
      pages: this.pages.map((page) => page.getJson()),
    };
  }
}

export class Page implements IPage {
  public static create(p?: IPage) {
    const page = new Page();
    if (p) {
      page.name = p.name;
      page.description = p.description;
      page.elements = p.elements.map((element) => PageElement.create(element));
    }
    return page;
  }

  public name: string = "New Page";
  public description: string = "New Page Description";
  public elements: PageElement[] = [];

  public addElement(element: PageElement) {
    this.elements.push(element);
  }

  public removeElement(element: PageElement) {
    const index = this.elements.indexOf(element);
    if (index >= 0) {
      this.elements.splice(index, 1);
    }
  }

  public indertElement(index: number, element: PageElement) {
    this.elements.splice(index, 0, element);
  }

  public getJson() {
    return {
      name: this.name,
      description: this.description,
      elements: this.elements.map((element) => element.getJson()),
    };
  }
}

export class PageElement implements IElement {
  public static create(e?: IElement) {
    const element = new PageElement();
    if (e) {
      element.id = e.id;
      element.name = e.name;
      element.mId = e.mId;
      element.mVersion = e.mVersion;
    }
    return element;
  }

  public id: string = uuid();
  public name: string = "New Element";
  public mId: number;
  public mVersion: string;

  public getJson() {
    return {
      id: this.id,
      name: this.name,
      mId: this.mId,
      mVersion: this.mVersion,
    };
  }
}
