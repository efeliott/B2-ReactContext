import { useContext } from "react";
import { UserContext } from "../userContext";

const User = () => {
    const { user, login } = useContext(UserContext)

    if (!user) {
        return <button onClick={login}>login</button>
    } else {
        return <div> { user?.name } </div>
    }

    
}

export default User;