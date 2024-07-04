import Welcome from "./Welcome"
import Navigation from "./Navigation"
import Variety from "./Variety"
import Reviews from "./Review"
import Footer from "./Footer"
import Categories from "./Categories"
const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Welcome></Welcome>
            <Categories></Categories>
            <Variety></Variety>
            <Reviews></Reviews>
            <Footer></Footer>
        </>)
}
export default Home