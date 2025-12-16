import RightContent from "../Components/RightContent/RightContent";
import LeftContent from "../Components/LeftContent/LeftContent";

export default function Profile() {
  return (
    <div className="flex gap-8">
      <RightContent />
      <LeftContent />
    </div>
  );
}
