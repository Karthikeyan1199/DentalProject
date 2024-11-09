import BasicDetails from "../Components/BasicDetails/BasicDetails.component"
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import "./LandingPage.scss"

const LandingPage = () => {
    return <div className="landing-page">
        <Header/>
        <div className="landing-page-container">
            <BasicDetails/>
        </div>
        <Footer/>
    </div>

}

export default LandingPage