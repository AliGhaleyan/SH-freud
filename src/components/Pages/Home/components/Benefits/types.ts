import { ReactNode } from "react";

export type BenefitContainerProps = BenefitItem & {
  benefitIndex: number;
  imageShapes: ReactNode | ReactNode[];
  imageFirst?: boolean;
};

export type BenefitHeadingProps = Pick<
  BenefitItem,
  "title" | "description" | "extraDescription"
> &
  Pick<BenefitContainerProps, "benefitIndex">;

export type BenefitImageContainerProps = Pick<BenefitItem, "image"> & {
  shapes: BenefitContainerProps["imageShapes"];
};

export type BenefitItem = {
  title: string;
  description: ReactNode;
  extraDescription: ReactNode;
  image: string;
};
