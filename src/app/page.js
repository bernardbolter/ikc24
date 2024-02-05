import Image from "next/image"
import IKC from '../../public/ikc.png'

const Home = () => {
  return (
    <section className="ikc-container">
      <a
        className="logo-container" 
        href="mailto:hello@ingakatcoleman.com"
      >
        <img src="/ikc.png" alt="logo" />
      </a>
    </section>
  )
}

export default Home