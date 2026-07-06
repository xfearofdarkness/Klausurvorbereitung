import { mount } from "svelte";
import Trainer from "./pages/Trainer.svelte";
import "./styles.css";
import "katex/dist/katex.min.css";

const target = document.getElementById("app");

if (target) {
  mount(Trainer, { target });
}
