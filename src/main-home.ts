import { mount } from "svelte";
import Home from "./pages/Home.svelte";
import "./styles.css";

const target = document.getElementById("app");

if (target) {
  mount(Home, { target });
}
