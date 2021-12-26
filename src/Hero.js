import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            beatae repellat eum, laborum aliquid placeat fuga saepe quod nobis
            unde cum adipisci ipsa id odit, harum obcaecati! Veritatis, vitae.
            Dignissimos!
          </p>
          <a
            className="btn"
            href="https://samirrodrigues.github.io"
            target="_blank"
          >
            Start Now
          </a>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
        <article></article>
      </div>
    </section>
  )
}

export default Hero
