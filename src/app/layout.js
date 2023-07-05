import './globals.css';
import { Navbar } from './lakshmiagency/Navbar';
import { Mobilenav } from './lakshmiagency/Mobilenav';
import { Mobilefooter } from './lakshmiagency/Mobilefooter';




export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Mobilenav/>
        <Mobilefooter/>
      </body> 
    </html>
  )
}
