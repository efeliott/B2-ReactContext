import { useContext } from "react";
import { UserContext } from "../userContext";
import { CheeseContext } from "../cheeseContext";

type Props = {
    cheese: {name: string; photo: string; isAdmin?: boolean}
}

const Item = ({ cheese }: Props) => {
    const { isSelected } = useContext(CheeseContext);
    const itemClass = isSelected ? "selected" : "";
    const { user } = useContext(UserContext);

    if (cheese.isAdmin === true && !user?.isAdmin) { 
        return <div>you're not admin</div>
    }

    return(
        <div className={`cheeseCard ${itemClass}`}>
            <div>{cheese.name}</div>
            <img src={cheese.photo} alt={cheese.name} className="itemImage" />
        </div>
    );
}

export default Item;