import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import PeopleIcon from "@material-ui/icons/People";
// import BarChartIcon from "@material-ui/icons/BarChart";
// import LayersIcon from "@material-ui/icons/Layers";
// import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
// import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import Dashboard from "../pages/Dashboard";
import Formulario from "../pages/Formulario";
import Distinte from "../pages/Distinte";
// import ToDo from "../pages/ToDo";
// import Drive from "../pages/Drive";

export const ITEMS_MENU = (darkState, handleThemeChange) => [
   {
      id: 0,
      icon: <DashboardIcon />,
      text: "Dashboasrd",
      path: "/",
      component: (
         <Dashboard
            darkState={darkState}
            handleThemeChange={handleThemeChange}
         />
      ),
   },
   {
      id: 1,
      path: "/Formulario",
      icon: <AccountTreeIcon />,
      text: "Formulario",
      component: <Formulario />,
   },
   {
      id: 2,
      path: "/Distinte",
      icon: <PeopleIcon />,
      text: "Distinte",
      component: <Distinte />,
   },
   // {
   //    id: 4,
   //    path: "/",
   //    icon: <BarChartIcon />,
   //    text: "Reports",
   //    component: (
   //       <Dashboard
   //          darkState={darkState}
   //          handleThemeChange={handleThemeChange}
   //       />
   //    ),
   // },
   // {
   //    id: 5,
   //    path: "/",
   //    icon: <LayersIcon />,
   //    text: "Integrations",
   //    component: (
   //       <Dashboard
   //          darkState={darkState}
   //          handleThemeChange={handleThemeChange}
   //       />
   //    ),
   // },
   // {
   //    id: 6,
   //    path: "/todo",
   //    icon: <PlaylistAddCheckIcon />,
   //    text: "ToDo",
   //    component: <ToDo />,
   // },
   // {
   //    id: 7,
   //    path: "/drive",
   //    icon: <CloudUploadIcon />,
   //    text: "Drive",
   //    component: <Drive />,
   // },
];

/**
 * PALETTE COLORS
 */
export const PRIMARY_DARK = "#7DB3FF";
export const PRIMARY_LIGTH = "#111827";
export const SECONDARY_DARK = "#FFFFFF";
export const SECONDARY_LIGHT = "#7DB3FF";
export const PAPER_DARK = "#1F2937";
export const PAPER_LIGHT = "#ececec";
export const BG_DARK = "#111827";
export const BG_LIGHT = "#F3F6FD";
