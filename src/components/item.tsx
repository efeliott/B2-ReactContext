import { useContext } from "react";
import { UserContext } from "../userContext";
import { CheeseContext } from "../cheeseContext";

type Props = {
    cheese: { 
        name: string; 
        photo: string; 
        isAdmin?: boolean;
    }
}

const Item = ({ cheese } : Props) => {
    const { isSelected } = useContext(CheeseContext);

    const { user } = useContext(UserContext);

    if(cheese.isAdmin === true && user?.isAdmin !== true){
        return(
            <div className="itemCheese notAuth">
                You're not admin
            </div>
        );
    }

    return(
        <div className="itemCheese" style={{
            border: isSelected ? '2px solid #4AF87F' : '2px solid #F84A4A',
        }}>
            <img src={cheese.photo} style={{ height:"7rem", width: "7rem", objectFit: "cover", borderRadius: "0.5rem"}}/>
            {cheese.name}
        </div>
    );
}

export default Item;