import FeatureCardItem from "./FeatureCardItem";
import { FEATURE_CARD_LIST } from "@/components/Pages/Home/components/Feature/consts";

const CardList = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
      {FEATURE_CARD_LIST.map((featureCard, key) => (
        <FeatureCardItem key={key} {...featureCard} />
      ))}
    </div>
  );
};

export default CardList;
