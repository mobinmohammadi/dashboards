import RightContent from "../Components/RightContent/RightContent";
import LeftContent from "../Components/LeftContent/LeftContent";

export default function Profile() {
  return (
    <div className="flex items-center sm:flex-row flex-col gap-8">
      <RightContent />
      <LeftContent />
    </div>
  );
}
