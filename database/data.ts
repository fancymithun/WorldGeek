import { IData, ISidebar } from "../types";

export const data: IData[] = [
  {
    id: "1",
    name: "Coming soon",
    url: "https://undraw.io/illustrations",
    category: "Adventure",
    subcategory: "India",
  },
  {
    id: "2",
    name: "Coming soon",
    url: "https://unsplash.com",
    category: "Adventure",
    subcategory: "USA",
  }
];

export const sidebarData: ISidebar[] = [
  {
    category: "Adventure",
    subcategory: ["India", "USA", "Australia", "New Zealand"],
  },
  {
    category: "Wildlife and Nature",
    subcategory: ["India", "USA", "Australia", "New Zealand"],
  },
  {
    category: "Beach and Relaxation",
    subcategory: ["India", "USA", "Australia", "New Zealand"],
  },
  {
    category: "Historical",
    subcategory: ["India", "USA", "Australia", "New Zealand"],
  },
];
