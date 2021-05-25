import { useEffect } from 'react';
import Navbar from './Navbar'
import {useRouter} from 'next/router'
import NProgress from 'nprogress'
const Layout = ({children, footer = true}) =>{ 
    
    const router = useRouter()

    useEffect(()=>{

        const handleRouteChange = url => {console.log(url)
        NProgress.start()}
        router.events.on('routeChangeStart',handleRouteChange)
        router.events.on('routeChangeComplete', () => NProgress.done())
        return () => {
            router.events.off('routeChangeStart',handleRouteChange)
        }
    },[])
    
    return (
    <>
   
    <Navbar/>
    <main className="container py-4">
    {children}
    </main>
        {footer && ( <footer className="bg-dark text-light text-center">
    <div className="container p-4">
        <h1>&copy; Facundo Oyola Portfolio</h1>
        <p>2020 - {new Date().getFullYear()}</p>
        <a href="https://github.com/Facucode/portfolio">Portfolio repository</a>
    </div>
    </footer>)}
   
    </>
)
}

export default Layout;