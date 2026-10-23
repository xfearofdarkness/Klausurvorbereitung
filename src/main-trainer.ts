import { mount } from "svelte";
import Trainer from "./pages/Trainer.svelte";
import "@fontsource-variable/outfit";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./styles.css";

const target = document.getElementById("app");

if (target) {
  mount(Trainer, { target });
}
