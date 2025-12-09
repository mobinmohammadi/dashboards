import React from "react";

function ItemDetails() {
  return (
    <div className="w-[261px] h-40 border border-gray-300 rounded-md">
      <span>کل مراجعین </span>
      <div>
        <span>۲۵۴</span>
        <span>نقر</span>
      </div>
      <div>
        <div className="bg-primary-100 flex gap-1 items-center text-white">
          <svg className="w-4 h-4 ">
            <use href="#arrowup"></use>
          </svg>
          <span>۱۷%</span>
        </div>
        <span>نسبت به ماه گذشته</span>
      </div>
    </div>
  );
}

export default ItemDetails;
