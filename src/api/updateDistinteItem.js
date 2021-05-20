import { client, q } from '../config/db';

const updateDistinteItem = (id, data) =>
     client
          .query(q.Update(q.Ref(q.Collection('distinte'), id), { data: data }))
          .then((ret) => console.log(ret))
          .catch((err) => console.warn(err));

export default updateDistinteItem;
