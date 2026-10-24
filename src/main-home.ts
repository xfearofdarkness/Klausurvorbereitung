import { mount } from "svelte";
import Home from "./pages/Home.svelte";
import { applySiteMigration } from "./lib/siteMigration";
import "@fontsource-variable/outfit";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./styles.css";

if (!applySiteMigration()) {
  const target = document.getElementById("app");
  if (target) mount(Home, { target });
}
