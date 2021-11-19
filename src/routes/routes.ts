import iRoutes from "./routesInterface";
import { Home } from "../component/home/Home";
import { ROUTES } from "./routeConstants";
import { Header } from "../component/Header/Header";
import {Accordion} from "../component/accordion/Accordion";
import { FileUploader } from "../component/FileUploader/FileUploader";

const { HOME_PAGE } = ROUTES;
const { HEADER } = ROUTES;
const { ACCORDION } = ROUTES;
const { FILE_UPLOADER } = ROUTES;

const routes: iRoutes[] = [
  {
    path: HOME_PAGE,
    exact: true,
    component: Home,
  },
  {
    path: HEADER,
    exact: true,
    component: Header,
  },
  {
    path: ACCORDION,
    exact: true,
    component: Accordion,
  },
  {
    path: FILE_UPLOADER,
    exact: true,
    component: FileUploader,
  },
];

export default routes;
