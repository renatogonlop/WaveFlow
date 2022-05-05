import "./Home.css";
import Carrossel from '../components/carrossel';
import {Cards} from '../components/Cards'


function Home() {
    return (
        <>
            <div>
                <Carrossel />
            </div>


            <div id="cont_2">
                 
                <Cards />
            </div>
        </>
    )
}
export default Home;