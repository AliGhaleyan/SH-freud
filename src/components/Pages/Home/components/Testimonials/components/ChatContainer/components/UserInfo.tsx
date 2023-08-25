import Image from "next/image";

const UserInfo = () => {
  return (
    <div className="flex items-center gap-3.5 rounded-4xl md:bg-mindful-gray-10 md:p-2.5">
      <div className="relative h-16 w-16 md:h-24 md:w-24">
        <Image
          src="/testimonials/user-profile-picture.jpg"
          className="rounded-2xl md:rounded-3xl"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="grid gap-y-2">
        <h6 className="text-lg font-bold text-mindful-gray-80 md:text-2xl">
          Sarah T. Booker
        </h6>
        <p className="text-label-sm font-extrabold uppercase text-mindful-gray-60 md:text-label-md">
          Senior Graphic Designer
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
