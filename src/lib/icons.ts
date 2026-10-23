import book from "@tabler/icons/outline/book-2.svg?raw";
import cards from "@tabler/icons/outline/cards.svg?raw";
import chevronDown from "@tabler/icons/outline/chevron-down.svg?raw";
import chevronLeft from "@tabler/icons/outline/chevron-left.svg?raw";
import close from "@tabler/icons/outline/x.svg?raw";
import layoutLeft from "@tabler/icons/outline/layout-sidebar.svg?raw";
import layoutRight from "@tabler/icons/outline/layout-sidebar-right.svg?raw";
import layoutTop from "@tabler/icons/outline/layout-navbar.svg?raw";
import list from "@tabler/icons/outline/list.svg?raw";
import pencil from "@tabler/icons/outline/pencil.svg?raw";
import question from "@tabler/icons/outline/help-circle.svg?raw";
import route from "@tabler/icons/outline/route.svg?raw";

export const ICONS = {
  book,
  cards,
  chevronDown,
  chevronLeft,
  close,
  layoutLeft,
  layoutRight,
  layoutTop,
  list,
  pencil,
  question,
  route
};

export type IconName = keyof typeof ICONS;
