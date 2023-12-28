// async function getData(id) {
//   const baseURL = process.env.VERCEL_URL ? `https://football-stats-app.vercel.app` : 'http://localhost:3000';
//   const url = `${baseURL}/api/event/${id}`;
//   const res = await fetch(url, { cache: 'no-store' });
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// }


export default async function Event() {
  // const { id } = params;
  // const data = await getData("1234");
  // const events = data?.data;

	return (
		<div> hello </div>
	)
}