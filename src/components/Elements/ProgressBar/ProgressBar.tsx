type Props = {
  percent: number;
};

const ProgressBar = (props: Props) => {
  return (
    <div className="h-2 w-full bg-mindful-gray-20">
      <div
        style={{ width: `${props.percent}%` }}
        className="h-full bg-mindful-gray-80"
      />
    </div>
  );
};

export default ProgressBar;
