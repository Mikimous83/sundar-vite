import Header from './header/Header.jsx'
import Body from './body/Body.jsx'
import './App.css'

function App() {

    return (
        <>
            <div>
            <Header/>
            </div>
            <div className='app-container'>
                <Body/>
            </div>
        </>
    )
}

export default App
