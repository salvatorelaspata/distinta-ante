import { client, q } from '../config/db';
const createDistinteItem = (distinta) =>
    client
        .query(
            q.Create(q.Collection('distinte'), {
                data: distinta,
            })
        )
        .then((ret) => {
            return ret;
        })
        .catch((error) => console.error('Error: ', error.message));
export default createDistinteItem;
