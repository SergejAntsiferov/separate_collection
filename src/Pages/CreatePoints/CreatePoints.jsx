import React, { useContext, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import Button from '../../Components/Button/Button';
import classes from '../../Components/Button/button.module.css'
import './CreatePoints.css'
import { AppContext } from '../../App';



const CreatePoints = () => {
    
    const {isVisible, setIsVisible, points, setPoints} = useContext(AppContext);

    //Хуки для управления input
    const [address, setAddress] = useState('');
    const [workingHours, setWorkingHours] = useState('');

    //Функция создания нового пункта сбора отходов
    const createPoint = (category) => {
        const newPoint = {
            // image: '',
            address: `${address}`,
            workingHours: `${workingHours}`,
            category: `${category}`
        }

        //setPoint обновляет отображаемый список 
        setPoints([...points, newPoint])
        localStorage.setItem('points', JSON.stringify([...points, newPoint]))

        console.log(points)

        //Сброс поля ввода после создания
        setAddress('')
        setWorkingHours('')
    };


    const close = () => {
        setIsVisible(null)
    };

    //Условие отображения компонента
    if (!isVisible) {
        return null
    }

    return (
        <div className="createPoints">
            <h2 className="createPoints__title">Create</h2>
            <Formik
                initialValues={{
                    category: []
                }}
                onSubmit={(values) => {
                (JSON.stringify(values));
                createPoint(values.category)
                }} 
            >
            {() => (
                <Form>
                    <div className="createPoints__input-group">
                        <label htmlFor="address">Адрес</label>
                        <input id="address" 
                            type="text" 
                            className="createPoints__input" 
                            placeholder="Адрес" 
                            value={address}
                            onChange={(e) => {setAddress(e.target.value)}}/>
                        <label htmlFor="workingHours">Режим работы</label>
                        <input id="workingHours" type="text" 
                            className="createPoints__input"
                            placeholder="Режим работы"
                            value={workingHours}
                            onChange={(e) => {setWorkingHours(e.target.value)}}/>
                    </div>
                    <h4 id="checkbox-group">Типы отходов</h4>
                    <div role="group" aria-labelledby="checkbox-group" className="createPoints__checkbox-group">
                        <label><Field type="checkbox" name="category" value=" бумага"/> Бумага</label>
                        <label><Field type="checkbox" name="category" value=" стекло" /> Стекло</label>
                        <label><Field type="checkbox" name="category" value=" жесть" /> Жесть</label>
                        <label><Field type="checkbox" name="category" value=" алюминий" /> Алюминий</label>
                        <label><Field type="checkbox" name="category" value=" ПЭТ-пластик" /> ПЭТ-пластик</label>
                        <label><Field type="checkbox" name="category" value=" ПНД-пластик" /> ПНД-пластик</label>
                        <label><Field type="checkbox" name="category" value=" батарейки" /> Батарейки</label>
                        <label><Field type="checkbox" name="category" value=" лампы" /> Лампы</label>
                    </div>
                    <Button type="submit" className={classes.button}>Создать</Button>
                    <Button onClick={close}>закрыть</Button>
                </Form>
            )}
            </Formik>
        </div>
    );
};

export default CreatePoints;
