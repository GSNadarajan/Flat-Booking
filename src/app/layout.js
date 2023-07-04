import './globals.css';
// import { Navbar } from './navbar';
// import { Home } from './home';
// import { About } from './home/about';
// import { Note } from './home/note';
// import { Footer } from './footer';
import { Navbar } from './lakshmiagency/Navbar';
import { Mobilenav } from './lakshmiagency/Mobilenav';



export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Mobilenav/>
        {/* <Home/>
        <About/>
        <Note/>
        <Footer/> */}
      </body> 
    </html>
  )
}
