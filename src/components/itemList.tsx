import Item from "./item";
import { CheeseContext } from "../cheeseContext";
import { useContext } from "react";

const ItemList = () => {
    const { cheeses } = useContext(CheeseContext)

    return(
        <div>
            {cheeses.map((cheese) => <Item cheese={cheese} key={cheese.name}/>)}
        </div>
    );
}

export default ItemList;