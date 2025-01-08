export default function ClicksTracker({ value, onUpdate }) {
  return <button onClick={onUpdate}>Click me {value}</button>;
}
