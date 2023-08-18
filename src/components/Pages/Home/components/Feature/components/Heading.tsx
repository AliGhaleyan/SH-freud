import { Label, Psyche } from "@/components/Elements";

const Heading = () => {
  return (
    <div className="grid gap-y-6 lg:gap-y-4">
      <div className="flex">
        <Label className="bg-serenity-green-30 text-serenity-green-80">
          <Psyche width={8} height={8} />
          our Features
        </Label>
      </div>
      <div className="grid items-end gap-y-4 lg:flex">
        <h3 className="text-heading-xl font-bold text-white">
          Freud.ai App Features
        </h3>
        <div className="lg:ml-auto">
          <span className="text-label-lg font-extrabold uppercase text-serenity-green-20">
            6 Total
          </span>
        </div>
      </div>
    </div>
  );
};

export default Heading;
