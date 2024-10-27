import BasicDetails from "../Components/BasicDetails/BasicDetails.component"
import Header from "../Components/Header/Header"

const LandingPage = () => {
    return <div className="landing-page">
        <Header/>
        <div className="landing-page-container">
            <BasicDetails/>
        </div>

    </div>

}

export default LandingPage