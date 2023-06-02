export type dataList = {
  name:string,
  url: string
}

export interface ICollapsProps {
  title:string
  elements:dataList[]
}

export interface IData {
  id: string,
  name: string,
  url: string,
  category: Category,
  subcategory: SubCategory
}

export type Category = "Adventure" | "Wildlife and Nature" | "Beach and Relaxation" | "Historical";

export type SubCategory = "India" | "USA" | "Australia" | "New Zealand";

export interface ISidebar {
    category: Category,
    subcategory: Array<string>
}