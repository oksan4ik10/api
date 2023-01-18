import { ICat } from "../../../types/types";
import { ICreateCat } from "../../../types/types";
import { IWinner } from "../../../types/types";
export const localAdress = "http://127.0.0.1:3000";

export class Api {
  static async getCats(limit: number, page: number) {
    const url = new URL(localAdress + "\\garage");
    url.searchParams.set("_limit", String(limit));
    url.searchParams.set("_page", String(page));
    const response = await fetch(url);
    const count = response.headers.get("X-Total-Count");

    const commits: ICat[] = await response.json();
    return { cats: commits, count: count };
  }
  static async getCat(id: number) {
    const response = await fetch(`${localAdress}\\garage\\${id}`);
    const commits: ICat = await response.json();
    return commits;
  }
  static async create(obj: ICreateCat) {
    const response = await fetch(`${localAdress}\\garage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(obj),
    });
    const result = await response.json();
    return result;
  }
  static async update(id: number, obj: ICreateCat) {
    const response = await fetch(`${localAdress}\\garage\\${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(obj),
    });
    if (response.status === 200) {
      const result = await response.json();
      return result;
    }
    console.error("Cat not found!");
  }
  static async delete(id: number) {
    const response = await fetch(`${localAdress}\\garage\\${id}`, {
      method: "DELETE",
    });
    const responseWin = await fetch(`${localAdress}\\winners\\${id}`, {
      method: "DELETE",
    });
    if (response.status === 200) {
      if (responseWin.status === 200) return;
    }
    console.error("Cat not found!");
  }
  static async getWinners(
    limit: number,
    page: number,
    sort: string,
    order: string
  ) {
    const url = new URL(localAdress + "\\winners");
    url.searchParams.set("_limit", String(limit));
    url.searchParams.set("_page", String(page));
    if (sort) url.searchParams.set("_sort", sort);
    if (order) url.searchParams.set("_order", order);
    const response = await fetch(url);
    const count = response.headers.get("X-Total-Count");
    const commits: IWinner[] = await response.json();
    return { winners: commits, count: count };
  }
  static async getWin(id: number) {
    const response = await fetch(`${localAdress}\\winners\\${id}`);
    if (response.status === 200) {
      const commits: IWinner = await response.json();

      return commits;
    }
    console.error("Cat isn't winner");
    return;
  }
  static async createWin(data: IWinner) {
    const response = await fetch(`${localAdress}\\winners`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    return result;
  }
  static async updateWin(obj: IWinner) {
    const response = await fetch(`${localAdress}\\winners\\${obj.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ wins: obj.wins, time: obj.time }),
    });
    if (response.status === 200) {
      const result = await response.json();
      return result;
    }
    console.error("Cat not found!");
  }
  static async startCat(id: number, name: string, status: string) {
    const url = new URL(localAdress + "\\engine");
    url.searchParams.set("id", String(id));
    url.searchParams.set("status", status);
    const response = await fetch(url, {
      method: "PATCH",
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 500) {
      console.error(`${response.status}: Cat ${name} isn't hungry`);
    } else {
      console.error(`${response.status}: ${response.statusText}`);
    }
    return false;
  }
}
