import React, { useState, useEffect } from "react"

import { HeaderContainer } from "./styles"

export default function Header() {
  let [scroll, setScroll] = useState(0)
  let [windowHeight, setWindowHeight] = useState(0)
  let [windowWidth, setWindowWidth] = useState(0)

  let handleScroll = () => {
    setScroll(window.scrollY)
  }

  useEffect(() => {
    setWindowHeight(window.innerHeight)
    setWindowWidth(window.innerWidth)
    handleScroll()
  }, [])

  window.addEventListener("scroll", function () {
    handleScroll()
  })
  return (
    <HeaderContainer scroll={scroll} windowHeight={windowHeight} windowWidth={windowWidth}>
      <h1>Jeff Moraes</h1>
      <h2>Full Stack Developer</h2>
      <div />
      <p> with a strong design background, passion for innovation and problem-solving. I am a quick learner and a team player, excited to continue evolving and learning new technologies. I am looking to contribute with energy and dedication to the success of a fast-paced company.
</p>
    </HeaderContainer>
  )
}
