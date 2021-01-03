import './style.css'
import {FaGithub, FaPhone, FaMailBulk} from 'react-icons/fa'

function Contacts() {
    return <div className='Lending-block'>
        <div className='Lending-links'>
            <p className='Lending-link'>
                <FaPhone/>
                +7(915)-748-59-71
            </p>
            <p className='Lending-link'>
                <FaGithub/> 
                <a href='https://github.com/alexKudryavtsev-web'>alexKudryavtsev-web</a>
            </p>
            <p className='Lending-link'>
                <FaMailBulk/>
                <a href='https://qwertyshurazh@gmail.com'>qwertyshurazh@gmail.com</a>
            </p>
        </div>
    </div>
}

export default Contacts