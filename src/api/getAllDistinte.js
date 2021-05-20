import { client, q } from '../config/db';
const getAllDistinte = client
     .query(q.Paginate(q.Match(q.Ref('indexes/all_distinte'))))
     .then((response) => {
          const expenseRef = response.data;
          const getAllDataQuery = expenseRef.map((ref) => {
               return q.Get(ref);
          });
          return client.query(getAllDataQuery).then((data) => data);
     })
     .catch((error) => console.error('Error: ', error.message));
export default getAllDistinte;
