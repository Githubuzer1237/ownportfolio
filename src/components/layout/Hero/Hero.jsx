import React from 'react'
import s from './Hero.module.scss'
import AnimatedSpan from '../../ui/AnimatedSpan/AnimatedSpan'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <section className={s.hero}>
        <div className="container">
          <div className={s.wrap}>
            <h1>Hey there! <AnimatedSpan> My name is Abduazim</AnimatedSpan> <br /> I am a <AnimatedSpan>front-end</AnimatedSpan> developer</h1>
            <p>Let’s create something awesome together!</p>

            <div className={s.inner}>
              <Link to="/portfolio">→ See my projects</Link>
              <Link to="/about">→ More about me</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero