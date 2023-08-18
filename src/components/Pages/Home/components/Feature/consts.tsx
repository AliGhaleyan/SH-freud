import { FeatureCardProps } from "@/components/Pages/Home/components/Feature/types";
import {
  FeatureBandaidDoubleIcon,
  FeatureControlIcon,
  FeatureHeatbeatIcon,
  FeatureLockIcon,
  FeatureMicrosopeIcon,
  FeatureMobilePhoneIcon,
} from "./FeatureIcons";

export const FEATURE_CARD_LIST: FeatureCardProps[] = [
  {
    title: "Emotional Support",
    description:
      "Receive empathetic and compassionate guidance tailored to your unique mental health needs, helping you navigate challenges with confidence.",
    icon: <FeatureHeatbeatIcon />,
  },
  {
    title: "Personalized Insights",
    description:
      "Gain deep insights into your thoughts, emotions, and behaviors with our personalized AI-powered analysis.",
    icon: <FeatureControlIcon />,
  },
  {
    title: "Self-Discovery",
    description:
      "Unlock a deeper understanding of yourself through reflective exercises, empowering you to make positive changes and growth.",
    icon: <FeatureMicrosopeIcon />,
  },
  {
    title: "Cognitive Enhancement",
    description:
      "Enhance your cognitive abilities and mental resilience with scientifically backed techniques and exercises.",
    icon: <FeatureBandaidDoubleIcon />,
  },
  {
    title: "24/7 Accessibility",
    description:
      "Access support anytime, anywhere, allowing you to address your mental well-being at your own pace and convenience.",
    icon: <FeatureMobilePhoneIcon />,
  },
  {
    title: "Confidential and Secure",
    description:
      "Unlock a deeper understanding of yourself through reflective exercises, empowering you to make positive changes and growth.",
    icon: <FeatureLockIcon />,
  },
];
