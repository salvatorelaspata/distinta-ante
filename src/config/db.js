import faunadb from 'faunadb';
const client = new faunadb.Client({
     secret: 'fnAEJblRuEACAXsukMgIxLRwRFQop1Vz5H07qJs4', //process.env.DB_KEY,
});
const q = faunadb.query;
export { client, q };
