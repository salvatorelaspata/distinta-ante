import { useState, useEffect } from 'react';
import { getAllDistinte } from '../../api';

function useDistinte(defaultDistinte = [], defaultOpen = false) {
    const [distinte, setDistinte] = useState(defaultDistinte);
    const [open, setOpen] = useState(defaultOpen);
    const getAll = () =>
        getAllDistinte.then((res) => {
            if (res) {
                console.log(res);
                const all = res.map((r) => {
                    r.data.id = r.ref.value.id;
                    return r.data;
                });
                setDistinte(all);
            } else {
                setDistinte([]);
            }
        });
    useEffect(() => {
        getAll();
    }, []);

    const updateList = (res) => {
        res.data.id = res.ref.value.id;
        const newDistinteArray = distinte.concat([res.data]);
        setDistinte(newDistinteArray);
    };

    return {
        distinte,
        open,
        setOpen,
        updateList,
        getAll,
        setDistinte,
    };
}

export default useDistinte;
