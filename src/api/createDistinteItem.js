import { client, q } from '../config/db';
const createDistinteItem = ({
     id,
     telaio,
     ante,
     base,
     altezza,
     antaB,
     antaH,
     fascione,
     tAScatto,
     mezzaLamella,
     lamella,
}) =>
     client
          .query(
               q.Create(q.Collection('distinte'), {
                    data: {
                         id,
                         telaio,
                         ante,
                         base,
                         altezza,
                         antaB,
                         antaH,
                         fascione,
                         tAScatto,
                         mezzaLamella,
                         lamella,
                    },
               })
          )
          .then((ret) => {
               return ret;
          })
          .catch((error) => console.error('Error: ', error.message));
export default createDistinteItem;
