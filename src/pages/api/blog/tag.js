export default async function handler(request, response) {
  const tag = request.query.tag;
  const data = await fetch(
    `https://dev.to/api/articles?tag=${tag}&per_page=12`
  );
  const blog = await data.json();
  response.setHeader("Access-Control-Allow-Origin", "*");

  response.status(200).json(blog);
}
