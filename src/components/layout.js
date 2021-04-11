import React from "react"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <div className="special" >
      {children}
    </div>
  )
}