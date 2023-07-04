import './globals.css';
import { Navbar } from './lakshmiagency/Navbar';
import { Mobilenav } from './lakshmiagency/Mobilenav';



export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Mobilenav/>
      </body> 
    </html>
  )
}
