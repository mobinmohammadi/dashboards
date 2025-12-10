
interface IDataPropsItem {
  title: string;
  count: string;
  persent: string;
}

function ItemDetails({ title, count, persent }: IDataPropsItem) {
  return (
    <div className=" h-40 border flex flex-col gap-6 border-gray-300 rounded-2xl p-6">
      <span className="text-neutral-600">{title}</span>
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <span className="text-neutral-950">{count}</span>
          <span className="text-neutral-700">نفر</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-primary-100 flex items-center justify-center w-14 pr-1 pl-1 pt-0.5 pb-0.5 rounded-md gap-1 text-white">
            <svg className="w-3 h-3 ">
              <use href="#arrowup"></use>
            </svg>
            <span className="text-xs">{persent}</span>
          </div>
          <span className="text-xxs text-primary-100">نسبت به ماه گذشته</span>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
