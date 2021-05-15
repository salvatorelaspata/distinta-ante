import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
   Link as RouterLink,
   // LinkProps as RouterLinkProps,
   useLocation,
} from "react-router-dom";

function ListItemLink(props) {
   const location = useLocation();
   const { icon, primary, to } = props;

   const renderLink = React.useMemo(
      () =>
         React.forwardRef((itemProps, ref) => (
            <RouterLink to={to} ref={ref} {...itemProps} />
         )),
      [to]
   );

   return (
      <li>
         <ListItem
            button
            component={renderLink}
            selected={to === location.pathname}
         >
            {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
            <ListItemText primary={primary} />
         </ListItem>
      </li>
   );
}
export default ListItemLink;
