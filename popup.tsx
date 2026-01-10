import { useState } from "react"

import "./style.css"

import Header from "./app/components/Header"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div className="w-[400px] h-[400px] ">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-100 to-white" />
      <Header ifOn={true} />
    </div>
  )
}

export default IndexPopup
