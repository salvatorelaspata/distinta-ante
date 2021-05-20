import { useState, useEffect } from 'react';
import { getAllDistinte } from '../../api';

function useDistinte(defaultDistinte = [], defaultOpen = false) {
     const [distinte, setDistinte] = useState(defaultDistinte);
     const [open, setOpen] = useState(defaultOpen);
     /* const getAll = () =>
          getAllDistinte.then((res) => {
               const all = res.map((r) => r.data);
               setDistinte(all);
          }); */
     useEffect(() => {
          getAllDistinte.then((res) => {
               const all = res.map((r) => r.data);
               setDistinte(all);
          });
     }, []);

     return {
          distinte,
          open,
          setOpen,
          setDistinte,
     };
}

export default useDistinte;
