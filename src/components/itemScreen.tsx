import { useContext } from 'react';
import { CheeseContext } from '../cheeseContext';
import '../App.css';

const ItemScreen = () => {
    const { cheeses } = useContext(CheeseContext);

    return (
        <div className="itemScreen">
            {cheeses.map(cheese => (
                <div key={cheese.name} className="cheeseCard">
                    <img src={cheese.photo} alt={cheese.name} />
                    <h3>{cheese.name}</h3>
                </div>
            ))}
        </div>
    );
}

export default ItemScreen;
