import { client, q } from '../config/db';
const deleteExpenseItem = (distintaID) =>
     client
          .query(q.Delete(q.Ref(q.Collection('distinte'), distintaID)))
          .then((ret) => ret)
          .catch((error) => console.error('Error: ', error.message));
export default deleteExpenseItem;
