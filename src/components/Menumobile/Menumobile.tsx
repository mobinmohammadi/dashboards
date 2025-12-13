import { Link } from "react-router";

export default function Menumobile() {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] h-[88px] z-10 flex items-center bg-white rounded-2xl shadow-2xl">
      <div className="flex gap-5 justify-center items-center w-full h-full">
        <Link to="/">
          <svg className="w-6 h-6">
            <use href="#menu-svg"></use>
          </svg>
        </Link>

        <Link
          to="/listofpatients"
          className="bg-primary-100 flex gap-1 items-center rounded-2xl p-2 text-white"
        >
          <svg className="w-6 h-6">
            <use href="#patins"></use>
          </svg>
          <span>بیماران</span>
        </Link>

        <Link to="/">
          <svg className="w-6 h-6">
            <use href="#time"></use>
          </svg>
        </Link>

        <Link to="/">
          <svg className="w-6 h-6">
            <use href="#user"></use>
          </svg>
        </Link>
      </div>
    </div>
  );
}
