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
import AdminDash from "views/Admin/AdminDash";
import AdminReg from "views/Admin/AdminReg";
import AdminView from "views/Admin/AdminView";

var routes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "nc-icon nc-tv-2",
    component: AdminDash,
    layout: "/admin",
  },
  {
    path: "/View",
    name: "Нийт бүртгэл",
    icon: "nc-icon nc-simple-add",
    component: AdminView,
    layout: "/admin",
  },
  {
    path: "/Reg",
    name: "Бүртгэл нээх",
    icon: "nc-icon nc-check-2",
    component: AdminReg,
    layout: "/admin",
  },
];
export default routes;
