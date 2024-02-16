import { useContext } from "react";
import { UserContext } from "../userContext";
import { CheeseContext } from "../cheeseContext";

type Props = {
    cheese: {name: string; photo: string; isAdmin?: boolean}
}

const Item = ({cheese} : Props) => {
    const isSelected = useContext(CheeseContext);
    const { user } = useContext(UserContext);

    if (cheese.isAdmin === true && !user?.isAdmin) { 
        return <div>you're not admin</div>
    }

    return(
        <div>
            <div>{cheese.name}</div>
            <img src={cheese.photo} alt="" />
        </div>
    );
}

export default Item;