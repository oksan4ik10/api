const t = "http://127.0.0.1:3000";
const test = async (local: string) => {
  const url = `${local}\\garage`;
  const response = await fetch(url);

  const commits = await response.json(); // читаем ответ в формате JSON

  console.log(commits);
};
import "./style.css";
import { App } from "./pages/app";

const app = new App();
app.run();
