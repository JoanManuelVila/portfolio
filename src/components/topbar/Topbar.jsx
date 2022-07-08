import "./topbar.scss"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">JMV</a>
            <div className="itemContainer">
              <EmailIcon className='icon' />
              <span>vilajoan96@gmail.com</span>
            </div>
            <div className="itemContainer">
              <LinkedInIcon className='icon' />
              <span>Joan Manuel Vila</span>
            </div>
          </div>
          
          <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Topbar