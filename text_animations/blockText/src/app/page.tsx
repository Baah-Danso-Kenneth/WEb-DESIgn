import Copy from "@/components/Copy"
import {ReactLenis} from "lenis/react"


function Home() {
  return (
    <>
    <ReactLenis root/>
    
      <nav>
        <p>Static House</p>
        <p>Menu</p>
      </nav>

      <section className='intro'>
        <div className='section-bg'>
          <img src="/mexico-b.jpg" alt="some-days" />
        </div>

      <Copy>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, distinctio?</h1>
      </Copy>

      </section>


    <section className='about'>
      <Copy>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium dolorem aut sequi voluptas facilis quos, quisquam, quaerat aspernatur omnis nesciunt repellat non quasi eum reprehenderit a earum voluptatum dolore accusamus.</p>
      </Copy>
    </section>

      <section>
        <div className="section-bg">
          <img src="/mexico-b.jpg" alt="hulio" />
        </div>
      </section>


      <section className='banner-img'>
        <div className="section-bg">
          <img src="/mexico-b.jpg" alt="hulio" />
        </div>
      </section>


      <section className="services">
        <Copy>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, sint?</h1>
        </Copy>
      </section>

      <section className="banner-img">
        <div className="section-bg">
          <img src="/mexico-b.jpg" alt="hulio" />
        </div>
      </section>

      <section className="cta">
        <Copy>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolor. Expedita reiciendis autem ad officia sint aspernatur error accusantium dignissimos.</p>
        </Copy>
      </section>

      <section className="outro">
        <div className="section-bg">
          <img src="/mexico-b.jpg" alt="" />
        </div>


      <Copy>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quasi blanditiis maiores nobis recusandae consequuntur! Quia fugit hic sint quam?</h1>
      </Copy>
      </section>

    </>
  )
}

export default Home