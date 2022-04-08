import "./Home.css";
import Carrossel from '../components/carrossel';
import Card from '../components/Cards'


function Home() {
    return (
        <>
            <div>
                <Carrossel />
            </div>


            <div id="cont_2">
                <Card />
            </div>
        </>
    )
}
export default Home;