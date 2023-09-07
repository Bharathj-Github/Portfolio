import React from 'react'
import Drawer from "../../Drawer";
import NightMode_Btn from "../../NightMode_Btn"

export default function index({nightHandler,nightMode}) {
  return (
    <div>
      <div
        className={`md:hidden ${
          nightMode ? "bg-[#512B81]" : "bg-white"
        } fixed w-screen bottom-0 flex justify-evenly items-center shadow-2xl z-50`}
      >
        <p className="font-bold text-lg px-2 py-1">Bharath</p>
        <NightMode_Btn nightHandler={nightHandler} nightMode={nightMode} />
        <Drawer />
      </div>
    </div>
  )
}
