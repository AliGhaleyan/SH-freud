type Props = {
  leftSideChildren: React.ReactNode;
  rightSideChildren: React.ReactNode;
};

const BenefitContainer = (props: Props) => {
  return (
    <div className="flex items-center justify-between">
      {props.leftSideChildren}
      <div className="ml-auto">
        <div className="ml-4">{props.rightSideChildren}</div>
      </div>
    </div>
  );
};

export default BenefitContainer;
