export const Statistics = ({
  options: { good, neutral, bad },
  total,
  positivePercentage,
}) => {
  return (
    <>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {total}</span>
      {good > 0 ? <span>Positive feedback: {positivePercentage}%</span> : null}
    </>
  );
};
