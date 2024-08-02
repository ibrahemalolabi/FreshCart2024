import Countact from "./Countact";
import FirstCards from "./FirstCards";
import FruitsVegetables from "./FruitsVegetables";
import Map from "./Map";
import ShppingProducts from "./ShppingProducts";
import Snacks from "./Snacks";
import Top from "./Top";

export default function Home(){
    return(
        <div>
            <Top/>
            <FirstCards/>
            <ShppingProducts/>
            <FruitsVegetables/>
            <Snacks/>
            <Countact/>
            <Map/>
        </div>
    );
}