import { client, q } from '../config/db';
const deleteDistinta = (distintaID) =>
    client
        .query(q.Delete(q.Ref(q.Collection('distinte'), distintaID)))
        .then((ret) => ret)
        .catch((error) => console.error('Error: ', error.message));
export default deleteDistinta;
