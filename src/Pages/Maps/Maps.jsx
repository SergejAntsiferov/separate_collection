import React from "react";
import { useParams} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Button from "../../Components/Button/Button";
import classes from "../../Components/Button/button.module.scss"
import './maps.scss'


const Maps = () => { 

  const history = useHistory()
  const {coordinates} = useParams()
  const coordinatesArray = JSON.parse(coordinates)
  const mapDefault = {
    center: [...coordinatesArray],
    zoom: 15
  };
 
    return (
      <div className="maps">
        <Button className={classes['wide-button']} onClick={() => history.goBack()}>Вернуться к списку</Button>
        <YMaps className="maps__ymaps">
          <Map defaultState={mapDefault} width="100%" height="75vh">
            <Placemark geometry={[...coordinatesArray]}/>
          </Map>
        </YMaps>
      </div>
    )
}

export default Maps;