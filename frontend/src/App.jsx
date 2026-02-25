import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';


gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <div className='flex-center h-[100vh]'>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
}
