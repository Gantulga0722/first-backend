export default async function handler(request, response) {
  const data = await fetch("https://dev.to/api/articles/1747862");
  const blog = await data.json();
  response.setHeader("Access-Control-Allow-Origin", "*");

  response.status(200).json(blog);
}
