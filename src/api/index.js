import { client, q } from '../config/db';

export const getAllDistinte = client
     .query(q.Paginate(q.Match(q.Ref('indexes/all_distinte'))))
     .then((response) => {
          const expenseRef = response.data;
          const getAllDataQuery = expenseRef.map((ref) => {
               return q.Get(ref);
          });
          return client.query(getAllDataQuery).then((data) => data);
     })
     .catch((error) => console.error('Error: ', error.message));

export const createDistinteItem = ({
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
          .then((ret) => ret)
          .catch((error) => console.error('Error: ', error.message));

export const deleteExpenseItem = (distintaID) =>
     client
          .query(q.Delete(q.Ref(q.Collection('distinte'), distintaID)))
          .then((ret) => ret)
          .catch((error) => console.error('Error: ', error.message));
