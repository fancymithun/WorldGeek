import React from "react"
import {dataList} from "../../types"
export const CollapsElement = ({name,url}:dataList) => {
  return (
    <a href={url}>
      <div className="border-b-2 border-base-200 py-2 cursor-pointer">
        <h4 className="text-violet-500 font-semibold text-[17px] text-white">{name}</h4>
      </div>
    </a>
  )
}