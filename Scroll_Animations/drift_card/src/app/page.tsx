import {ReactLenis} from "lenis/react"
import StickyCard from "@/components/StickyCard";


export default function Home() {
  return (
    <>
    <ReactLenis root/>
    <section className="intro">
       <h1>The Foundations</h1>
    </section>

    <StickyCard/>

    <section className="outro">
      <h1> Ends in Forms</h1>
    </section>
    </>
  );
}
