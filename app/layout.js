import './globals.css';
import { Navbar } from './lakshmiagency/Navbar';
import { Mobilenav } from './lakshmiagency/Mobilenav';
import { Mobilefooter } from './lakshmiagency/Mobilefooter';
import { Dashboard } from './lakshmiagency/Dashboard';
import { Card} from './lakshmiagency/Card';






export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Mobilenav/>
        <Dashboard/>
        <Card/>
        <Mobilefooter/>
      </body> 
    </html>
  )
}
