export default function Controls({ handlePrev, handleNext, isFirst, isLast }) {
  return (
    <div>
      <button onClick={handlePrev} disabled={isFirst}>
        Prev
      </button>
      <button onClick={handleNext} disabled={isLast}>
        Next
      </button>
    </div>
  );
}
