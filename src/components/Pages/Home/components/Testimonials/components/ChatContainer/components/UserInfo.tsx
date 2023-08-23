import Image from "next/image";

const UserInfo = () => {
  return (
    <div className="flex items-center gap-3.5 rounded-4xl bg-mindful-gray-10 p-2.5">
      <Image
        src="/testimonials/user-profile-picture.jpg"
        width={96}
        height={96}
        className="rounded-3xl"
        objectFit="cover"
      />
      <div className="grid gap-y-2">
        <h6 className="text-2xl font-bold text-mindful-gray-80">
          Sarah T. Booker
        </h6>
        <p className="text-label-md font-extrabold uppercase text-mindful-gray-60">
          Senior Graphic Designer
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
