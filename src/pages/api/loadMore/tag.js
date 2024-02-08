export default async function handler(request, response) {
  const page = request.query.page;
  const tag = request.query.tag;
  const data = await fetch(
    `https://dev.to/api/articles?tag=${tag}&per_page=3&page=${page}`
  );
  const blog = await data.json();
  response.setHeader("Access-Control-Allow-Origin", "*");

  response.status(200).json(blog);
}
