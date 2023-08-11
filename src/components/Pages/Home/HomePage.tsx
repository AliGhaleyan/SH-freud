import { BasePageLayout } from "@/components/Layout";
import { Button } from "@/components/Elements";
import { EmailIcon } from "@/components/Icons";

const HomePage = () => {
  return (
    <BasePageLayout>
      <div className="flex gap-4 p-10">
        <Button
          type="fill"
          color="gray"
          icon={<EmailIcon width={24} height={24} />}
        >
          HEY
        </Button>
        <Button
          type="fill"
          color="orange"
          icon={<EmailIcon width={24} height={24} />}
        >
          HEY
        </Button>
        <Button
          type="fill"
          color="green"
          icon={<EmailIcon width={24} height={24} />}
        >
          HEY
        </Button>
      </div>
      <div className="flex gap-4 p-10">
        <Button type="fill" color="gray">
          HEY
        </Button>
        <Button type="fill" color="orange">
          HEY
        </Button>
        <Button type="fill" color="green">
          HEY
        </Button>
        <Button type="outline" color="gray">
          HEY
        </Button>
        <Button type="outline" color="orange">
          HEY
        </Button>
        <Button type="outline" color="green">
          HEY
        </Button>
      </div>
    </BasePageLayout>
  );
};

export default HomePage;
