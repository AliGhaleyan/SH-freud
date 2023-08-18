import React from "react";
import classNames from "classnames";
import { BenefitContainerProps } from "@/components/Pages/Home/components/Benefits/types";
import BenefitHeading from "./BenefitHeading";
import BenefitImageContainer from "./BenefitImageContainer";

const BenefitContainer = (props: BenefitContainerProps) => {
  return (
    <div className="grid items-center justify-between gap-y-16 lg:flex">
      <div
        className={classNames(
          "order-1",
          props.imageFirst ? "lg:order-1 lg:ml-auto" : "lg:order-0"
        )}
      >
        <div className={classNames({ "lg:ml-10": props.imageFirst })}>
          <BenefitHeading
            title={props.title}
            description={props.description}
            extraDescription={props.extraDescription}
            benefitIndex={props.benefitIndex}
          />
        </div>
      </div>
      <div
        className={classNames(
          "order-0 flex justify-center",
          props.imageFirst ? "lg:order-0" : "lg:order-1 lg:ml-auto"
        )}
      >
        <div className={classNames({ "lg:ml-10": !props.imageFirst })}>
          <BenefitImageContainer
            image={props.image}
            shapes={props.imageShapes}
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitContainer;
