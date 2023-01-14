import { ICat } from "../../../types/types";
export const localAdress = "http://127.0.0.1:3000";

export class Api {
  static async getCars(limit: number, page: number) {
    const url = new URL(localAdress + "\\garage");
    url.searchParams.set("_limit", String(limit));
    url.searchParams.set("_page", String(page));
    const response = await fetch(url);
    const count = response.headers.get("X-Total-Count");

    const commits: ICat[] = await response.json();
    return { cats: commits, count: count };
  }
}
