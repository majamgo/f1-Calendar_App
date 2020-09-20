import React, { useState, useEffect } from 'react';
import MyPicker from '../components/myPicker';
import axios from 'axios';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonFooter, IonRow, IonCol, IonButton } from '@ionic/react';
import './Tab2.css';

export interface ISessionTime {
  racetrack: string;
}

export interface Provider {
  races: [
    {
      raceName: string
    }
  ]
}

const Tab2: React.FC<Provider> = (props) => {

  const [selectedNumber, setSelectedNumber] = useState<string>('1');
  const [raceInfo, setRaceInfo] = useState({
    races: []
  });

  const [pickerIsOpen, setPickerIsOpen] = useState(false);
  const [sessionTime, setSessionTime] = useState<ISessionTime | undefined>(undefined);

  // useEffect(() => {
  //   axios.get('http://ergast.com/api/f1/current/' + selectedNumber + '.json')
  //   .then(res => {
  //     console.log(res.data.MRData.RaceTable.Races[0]);
  //     setRaceInfo({ races: res.data.MRData.RaceTable.Races[0] });
  //   })
  //   .catch(err => console.log(err))
  // }, [selectedNumber]);

  // const raceSection = raceInfo.races.map((race) => {
  //   return (
  //   <li>{race!.{raceName}}</li>
  //   );
  // });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonDatetime Examples</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>

        <IonItem>
          <IonButton onClick={() => { setPickerIsOpen(true); }} >
            Select Race
          </IonButton>
          <IonButton onClick={() => { setSessionTime(undefined); }}>
            Clear
          </IonButton>
        </IonItem>
        <IonItem onClick={() => { setPickerIsOpen(true); }} >
          {sessionTime ? (
            <IonLabel>
              
            </IonLabel>
          ) : (
            <IonLabel>Please Select Race</IonLabel>
          )}
        </IonItem>
        <MyPicker 
          isOpen={pickerIsOpen}
          onCancel={() => {
            setPickerIsOpen(false);
          }}
          onSave={(_value: any) => {
            console.log(_value);
            let { Race } = _value;
            setSessionTime({ racetrack: Race.value });
            setPickerIsOpen(false);
            setSelectedNumber(Race.value);
          }}
        />

      </IonContent>

      <IonFooter>
        <IonToolbar></IonToolbar>
      </IonFooter>

    </IonPage>
  );
};

export default Tab2;
