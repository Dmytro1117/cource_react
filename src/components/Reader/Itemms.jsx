export default function Itemms({ currentItem }) {
  return (
    <article>
      <h2>{currentItem.topic}</h2>
      <p>{currentItem.text}</p>
    </article>
  );
}
