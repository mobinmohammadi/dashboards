import BoxRecordsTest from "./BoxRecordsTest";

export default function TestRecords() {
  return (
    <div className="border-gray-400 h-[205px]  overflow-hidden flex flex-col gap-12 pt-5 pr-5 pl-5 border overflow-y-auto rounded-2xl sm:w-[704px]">
      <div className="w-[704px] flex  flex-col gap-12 overflow-x-scroll">

      <span className="text-xxs ">سوابق آزمایشات</span>
      <div className="grid grid-cols-4">
        <BoxRecordsTest />
        <BoxRecordsTest />
        <BoxRecordsTest />
        <BoxRecordsTest />
      </div>
      </div>
    </div>
  );
}
