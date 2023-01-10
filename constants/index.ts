import routes from "./routes";
import strings from "./strings";

export const bottomTabList = [
  {
    title: strings.HOME,
    to: routes.HOME,
  },
  {
    title: strings.CALENDAR,
    to: routes.CALENDAR,
  },
  {
    title: strings.ADD,
    to: "",
  },
  {
    title: strings.GROUP,
    to: routes.GROUP,
  },
  {
    title: strings.MY_PAGE,
    to: routes.MY_PAGE,
  },
];
