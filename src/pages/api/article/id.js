export default async function handler(request, response) {
  const id = request.query.id;
  const data = await fetch(`https://dev.to/api/articles/${id}`);
  const blog = await data.json();
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status(200).json(blog);
}
