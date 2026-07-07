import { mount } from "svelte";
import Trainer from "./pages/Trainer.svelte";
import "./styles.css";

const target = document.getElementById("app");

if (target) {
  mount(Trainer, { target });
}
