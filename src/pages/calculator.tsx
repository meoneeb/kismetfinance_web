import type { NextPage } from "next"
import { Navbar } from "../components/navbar"

const Calculator: NextPage = () => {
  return <div className="h-full w-full">
    <Navbar />
    <iframe src="https://www.washingtonbrown.com.au/public/static/external/" className="w-full h-screen border-none " ></iframe>

  </div>
}

export default Calculator