export interface ICat {
  id: number;
  color: string;
  name: string;
}

export interface ICreateCat {
  name: string;
  color: string;
}
export interface IWinner {
  id: number;
  wins: number;
  time: number;
}
export interface IDriveCat {
  velocity: number;
  distance: number;
}
export interface IWinnerCatRace {
  cat: ICat;
  time: string;
}
