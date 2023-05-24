import React, { useContext } from 'react'
import {HiArrowSmRight} from 'react-icons/hi'
import { StripeContext } from './StripeContext'

const Hero = () => {
  let {closeSubmenu}=useContext(StripeContext)
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className="content">
        <h1>Payments Infrastructure for the internet</h1>
        <p>Millions of businesses of all sizes—from startups to large enterprises—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
        <div className="btn-section">
          <button className='primary'>Start now &nbsp;<HiArrowSmRight className='arrow'/></button>
          <button className='secondary'>Contact sales &nbsp;<HiArrowSmRight className='arrow'/></button>
        </div>
      </div>
      <div className="phone">
        <img src="https://pbs.twimg.com/media/FAJIkmSUUAQCOW6?format=jpg&name=large" alt="" />
      </div>
    </section>
  )
}

export default Hero