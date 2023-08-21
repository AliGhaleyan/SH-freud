import { Label, Psyche } from "@/components/Elements";

const Heading = () => {
  return (
    <div className="grid gap-6 text-center">
      <div className="flex justify-center">
        <Label className="bg-empathy-orange-10 text-empathy-orange-40">
          <Psyche width={8} height={8} />
          Blog Posts
        </Label>
      </div>
      <h3 className="hidden text-heading-xl font-bold text-mindful-gray-80 md:block">
        Browse Our Latest News
      </h3>
      <h3 className="text-heading-lg font-bold text-mindful-gray-80 md:hidden">
        Latest News
      </h3>
    </div>
  );
};

export default Heading;
