import { Switch, Route } from 'react-router-dom'
import FormPage from './form/FormPage'
import Header from './header/Header'
import LendingPage from './lending/LendingPage'

function App() {
    return <>
        <Header/>

        <Switch>
            <Route path='/contact' render={() => <FormPage/>} />
            <Route path='/' render={() => <LendingPage/>} />
        </Switch>
    </>
}

export default App