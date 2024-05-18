import Header from './header/Header.jsx'
import Body from './body/Body.jsx'
import Footer from './footer/Footer.jsx'
import './App.css'

function App() {

    return (
        <>
            <Header/>
            <div className='app-container'>
                <Body/>
            </div>
            <Footer/>
        </>
    )
}

export default App
