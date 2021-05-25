import Carousel from '../Components/Carousel';
import Slider from '../Components/Slider/Slider';
console.log(process.env.REACT_APP_AXIOS_DEFAULT)
const Home = () => {
    return (
        <>
            <Carousel/>
            <Slider/>
        </>
    )
}
export default Home;