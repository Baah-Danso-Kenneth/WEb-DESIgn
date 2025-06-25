import TrailContainer from '@/components/TrailContainer'
import React from 'react'

function Page() {
  return (
    <>
    <section className='hero'>
      <div className='hero-img'>
        <img src="/images/trance.png" alt="solid"/>
      </div>
        <p>[ The future moves in frames ]</p>
        <p>Experiment 457 by codegrd..</p>
        <TrailContainer/>
    </section>
    </>
  )
}

export default Page