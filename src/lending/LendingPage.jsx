import AboutMeBlock from './AboutMeBlock'
import Contacts from './Contacts'
import PriceList from './PriceList'
import Stack from './Stack'
import './style.css'

function LendingPage() {
    return <main className='Lending'>
        <h1 className='Lending-headline'>Информация</h1>
        <AboutMeBlock/>
        <Stack/>
        <PriceList/>
        <Contacts/>
    </main>
}

export default LendingPage