import type { NextPage } from "next";
// import { Navbar } from "../components/navbar";

const Calculator: NextPage = () => {
  return (
    <div className="h-screen w-full pt-20">
      {/* <Navbar /> */}
      <iframe
        src="https://www.washingtonbrown.com.au/public/static/external/"
        className="h-full w-full border-none "
      ></iframe>
    </div>
  );
};

export default Calculator;
