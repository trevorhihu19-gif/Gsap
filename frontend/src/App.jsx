import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Navbar } from '../components/navbar.jsx';
import { Hero } from '../components/Hero.jsx';
import { Cocktails } from '../components/Cocktails.jsx';


gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
   <main>
    <Navbar />
    <Hero />
    <Cocktails />
   </main>
  )
}
