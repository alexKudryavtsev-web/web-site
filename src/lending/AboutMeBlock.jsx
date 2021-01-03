import './style.css'
import Quote from './Quote'

function AboutMeBlock() {
    return <div className='Lending-block'>
        <h2 className='Lending-title'>Обо мне</h2>
        <p className='Lending-text'>
            Я – начинающий web программист, желающий довести ваш сайт до ума. Я руководствуюсь при работе цитатой:
        </p>
        <Quote/>
    </div>
}

export default AboutMeBlock