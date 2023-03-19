export function Statistic({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Totalfeedback: {totalFeedback}</li>
        <li>Positive: {positivePercentage}%</li>
      </ul>
    </div>
  );
}
