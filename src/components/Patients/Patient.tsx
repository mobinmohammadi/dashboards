import BoxPatient from "./BoxPatient";
import DetailsDoctor from "./DetailsDoctor";
import HeaderPatient from "./HeaderPatient";

const DataBoxPatint = [
  { title: "ضربان قلب", img: "./../Images/onepagepatint/2.png", descCount: "86 ", descText: "در دقیقه" },
  { title: "اکسیژن خون", img: "./../Images/onepagepatint/3.png", descCount: "۹۹ ", descText: "درصد" },
  { title: "دمای بدن ", img: "./../Images/onepagepatint/1.png", descCount: "۳۵ ", descText: "درجه سانتیگراد" },
  { title: "فشار خون", img: "./../Images/onepagepatint/4.png", descCount: "۱۵۰ ", descText: "میلیمتر جیوه" }
]

export default function Patient() {
  return (
    <div className="flex flex-col gap-5 pb-20">
      <HeaderPatient />
      <div className="grid grid-cols-4 gap-4">
        {DataBoxPatint.map(item => (

          <BoxPatient {...item} />
        ))}

      </div>
      <DetailsDoctor/>

    </div>
  )
}
