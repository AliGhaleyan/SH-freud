import { Label } from "@/components/Elements";

const PostCard = () => {
  return (
    <div className="grid gap-y-6 rounded-4xl bg-mindful-gray-10 p-4">
      <div
        className="h-[14.75rem] rounded-3xl bg-cover"
        style={{ backgroundImage: "url('/posts/01.jpg')" }}
      />
      <div className="grid gap-4 text-center">
        <div className="flex justify-center gap-2">
          <Label className="bg-mindful-gray-20 text-mindful-gray-60">
            Jun 25, 2025
          </Label>
          <Label className="bg-mindful-gray-20 text-mindful-gray-60">
            Health
          </Label>
          <Label className="bg-mindful-gray-20 text-mindful-gray-60">
            Mental
          </Label>
        </div>
        <div className="text-2xl font-bold text-mindful-gray-80">
          The Power of Self-Care: Nurturing Your Mental Health In The Age of AI
          Revolution
        </div>
      </div>
    </div>
  );
};

export default PostCard;
