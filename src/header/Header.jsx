import { Link } from 'react-router-dom'
import Headline from './Headline'
import './style.css'
import {FaEnvelope, FaIdCard} from 'react-icons/fa'

function Header() {
    return <header className='Header'>
        <Headline/>

        <Link to='/' className='Header-menuItem'>
            <FaIdCard className='Header-menuItemIcon'/>
            Главная страница
        </Link>
        <Link to='/contact' className='Header-menuItem'>
            <FaEnvelope className='Header-menuItemIcon'/>
            Контакт
        </Link>
    </header>
}

export default Header