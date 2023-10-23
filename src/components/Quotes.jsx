import useFetch from "../hooks/useFetch";

export default function Quotes() {
  const res = useFetch("https://api.quotable.io/random", {});

  if (!res.response) {
    return <div className="loading">Loading...</div>;
  }

  const content = res.response.content;
  const author = res.response.author;

  return (
    <div className="container">
      <h3>Quotes Of The Day</h3>
      <h1>{content}</h1>
      <div></div>
      <p>- {author} -</p>
    </div>
  );
}
