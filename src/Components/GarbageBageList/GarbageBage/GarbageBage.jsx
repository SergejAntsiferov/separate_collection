import React, { useContext } from 'react';
import { AppContext } from '../../../utils/AppContext';
import './garbageBage.scss';

const GarbageBage = (props) => {
    
    const {image, name, title} = props
    const {setPoints} = useContext(AppContext)

    const sorting = () => {
        const pointsFromLS = JSON.parse(localStorage.getItem('points'))
        const temporary = pointsFromLS.filter((item) =>  {
            if (item.category.toLowerCase().includes(title.toLowerCase())) {
                return item // если имя бейджа есть в категориях объекта, возвращает объект
            } 
            return !item // если нет - то не возвращает (спасибо,Кэп!)
        })
        return (
            setPoints([...temporary]) // обновил список пунктов на странице в соответствии с фмльтром
        )
    }

    return (
        <div className="garbage-bage" onClick={sorting}>
           <img className="garbage-bage__image" src={image} alt={name} />
        </div>
    );
};

export default GarbageBage;