import { useState } from "react";

export const useDrawer = (initialValue) => {
   const [open, setOpen] = useState(initialValue);

   const handleDrawerOpen = () => setOpen(true);
   const handleDrawerClose = () => setOpen(false);
   return { open, handleDrawerOpen, handleDrawerClose };
};
