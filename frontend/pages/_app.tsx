import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' 

config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <div className='bg-emphasis-50 text-textColor min-h-screen relative '>
    {/* <div className=' text-textColor min-h-screen relative bg-oldScroll'> */}
    {/* <div className="bg-gradient-to-b from-eggBlue-200 to-white text-textColor min-h-screen relative"> */}
      <div className=" bg-cover text-textColor min-h-screen relative bg-center ">
        <Header/>
        <div className='absolute animate-float-slow pointer-events-none' >
          <img alt="" src="https://res.cloudinary.com/zsa-technology/image/upload/f_auto/q_auto/v1/zsa-io-refactor-prod/hot-swappable-waves.png?_a=ATCqVAA0" srcSet="https://res.cloudinary.com/zsa-technology/image/upload/f_auto/q_auto/c_scale,w_405/v1/zsa-io-refactor-prod/hot-swappable-waves.png?_a=ATCqVAA0 405w, https://res.cloudinary.com/zsa-technology/image/upload/f_auto/q_auto/c_scale,w_810/v1/zsa-io-refactor-prod/hot-swappable-waves.png?_a=ATCqVAA0 810w, https://res.cloudinary.com/zsa-technology/image/upload/f_auto/q_auto/c_scale,w_1215/v1/zsa-io-refactor-prod/hot-swappable-waves.png?_a=ATCqVAA0 1215w, https://res.cloudinary.com/zsa-technology/image/upload/f_auto/q_auto/c_scale,w_1621/v1/zsa-io-refactor-prod/hot-swappable-waves.png?_a=ATCqVAA0 1621w, https://res.cloudinary.com/zsa-technology/image/upload/f_auto/q_auto/c_scale,w_810/v1/zsa-io-refactor-prod/hot-swappable-waves.png?_a=ATCqVAA0 810w, https://res.cloudinary.com/zsa-technology/image/upload/f_auto/q_auto/c_scale,w_1620/v1/zsa-io-refactor-prod/hot-swappable-waves.png?_a=ATCqVAA0 1620w, https://res.cloudinary.com/zsa-technology/image/upload/f_auto/q_auto/c_scale,w_2430/v1/zsa-io-refactor-prod/hot-swappable-waves.png?_a=ATCqVAA0 2430w, https://res.cloudinary.com/zsa-technology/image/upload/f_auto/q_auto/c_scale,w_3242/v1/zsa-io-refactor-prod/hot-swappable-waves.png?_a=ATCqVAA0 3242w" sizes="(max-width: 1621px) 100vw, 1621px" loading="lazy"/>
        </div>
        <Component {...pageProps} />
      </div>
        <Footer/>
    </div>
  )
}

export default App