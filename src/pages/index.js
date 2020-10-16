import React, { useState, useEffect } from "react"

import "./global.css"

import Header from "../components/Header"
// import SEO from "../components/seo"

const IndexPage = () => {
  let [scroll, setScroll] = useState(0)

  let handleScroll = () => {
    setScroll(window.scrollY)
  }

  useEffect(() => {
    handleScroll()
  }, [])

  window.addEventListener("scroll", function () {
    handleScroll()
  })

  return (
    <div>
      {/* <SEO title="Home" /> */}
      <Header />
      {/* <h2>{scroll}</h2> */}
    </div>
  )
}

export default IndexPage
