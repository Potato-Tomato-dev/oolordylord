/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Home from "views/Comis/Home.js";
import Edit from "views/Comis/Edit.js";
import Register from "views/Comis/Register.js";
import Confirm from "views/Comis/Confirm.js";
import Import from "views/Comis/Import";
import Export from "views/Comis/Export";

var routes = [
  {
    path: "/dashboard",
    name: "Таны нийт бүртгэлүүд",
    icon: "nc-icon nc-tv-2",
    component: Home,
    layout: "/comis",
  },
  {
    path: "/icons",
    name: "Элсэгч нэмэх",
    icon: "nc-icon nc-simple-add",
    component: Register,
    layout: "/comis",
  },
  {
    path: "/maps",
    name: "Томилох",
    icon: "nc-icon nc-check-2",
    component: Confirm,
    layout: "/comis",
  },
  {
    path: "/notifications",
    name: "Мэдээлэл шинэчлэх",
    icon: "nc-icon nc-ruler-pencil",
    component: Edit,
    layout: "/comis",
  },
  {
    path: "/user-page",
    name: "Excel Import",
    icon: "nc-icon nc-cloud-upload-94",
    component: Import,
    layout: "/comis",
  },
  {
    path: "/tables",
    name: "Excel Export",
    icon: "nc-icon nc-cloud-download-93",
    component: Export,
    layout: "/comis",
  },
];
export default routes;
