import React, { useState, useEffect } from 'react';
import MyPicker from '../components/myPicker';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardTitle, IonItem, IonButton, IonLabel, IonText, IonCardSubtitle } from '@ionic/react';
import './Tab1.css';


export interface ISessionTime {
  racetrack: string;
}

export interface RacesF1 {
  season: string,
  round: string,
  raceName: string,
  location: string,
  circuit: string,
  practise1: string,
  practise2: string,
  practise3: string,
  qual: string,
  raceDay: string
}

const Tab1: React.FC = () => {

  const [pickerIsOpen, setPickerIsOpen] = useState(false);
  const [sessionTime, setSessionTime] = useState<ISessionTime | undefined>(undefined);
  const [raceText, setRaceText] = useState<string>('');
  const [filterRace, setFilterRace] = useState<Array<RacesF1>>([]);

  const f1Races = [
    {
      season: '2020',
      round: '1',
      raceName: 'Austrian Grand Prix',
      location: 'Spielberg, Austria',
      circuit: 'Red Bull Ring',
      practise1: '03-07-2020',
      practise2: '03-07-2020',
      practise3: '04-07-2020',
      qual: '04-07-2020',
      raceDay: '05-07-2020 | 15:10:00'
    },
    {
      season: '2020',
      round: '2',
      raceName: 'Styrian Grand Prix',
      location: 'Spielberg, Austria',
      circuit: 'Red Bull Ring',
      practise1: '10-07-2020',
      practise2: '10-07-2020',
      practise3: 'CANCELLED',
      qual: '11-07-2020',
      raceDay: '12-07-2020 | 15:10:00'
    },
    {
      season: '2020',
      round: '3',
      raceName: 'Hungarian Grand Prix',
      location: 'Budapest, Hungary',
      circuit: 'Hungaroring',
      practise1: '17-07-2020',
      practise2: '17-07-2020',
      practise3: '18-07-2020',
      qual: '18-07-2020',
      raceDay: '19-07-2020 | 15:10:00'
    },
    {
      season: '2020',
      round: '4',
      raceName: 'British Grand Prix',
      location: 'Silverstone, UK',
      circuit: 'Silverstone',
      practise1: '31-07-2020',
      practise2: '31-07-2020',
      practise3: '01-08-2020',
      qual: '01-08-2020',
      raceDay: '02-08-2020 | 15:10:00'
    },
    {
      season: '2020',
      round: '5',
      raceName: '70th Anniversary Grand Prix',
      location: 'Silverstone, UK',
      circuit: 'Silverstone',
      practise1: '07-08-2020',
      practise2: '07-08-2020',
      practise3: '08-08-2020',
      qual: '08-08-2020',
      raceDay: '09-08-2020 | 15:10:00'
    }
  ];

  useEffect(() => {
    console.log(raceText);
    const res = f1Races.filter(race => race.raceName === raceText);
    setFilterRace(res);
  }, [raceText]);

    console.log(filterRace);

  const racesMap = filterRace.map(r => {
    return (
      <IonCard color="dark" key={r.round}>
        <IonCardContent>
          <IonCardTitle>{r.raceName}</IonCardTitle>
          <h3 className="ion-text-capitalize">{r.location}</h3>
          <h4>{r.circuit}</h4>
          <IonCard className="ion-white ion-padding">
            <IonText><IonCardSubtitle>Practise 1:</IonCardSubtitle>{r.practise1}</IonText>
          </IonCard>
          <IonCard className="ion-white ion-padding">
          <IonText><IonCardSubtitle>Practise 2:</IonCardSubtitle>{r.practise2}</IonText>
          </IonCard>
          <IonCard className="ion-white ion-padding">
          <IonText><IonCardSubtitle>Practise 3:</IonCardSubtitle>{r.practise3}</IonText>
          </IonCard>
          <IonCard className="ion-white ion-padding">
          <IonText><IonCardSubtitle>Qualification:</IonCardSubtitle>{r.qual}</IonText>
          </IonCard>
          <IonCard className="ion-white ion-padding">
          <IonText><IonCardSubtitle>Race:</IonCardSubtitle>{r.raceDay}</IonText>
          </IonCard>
          <IonText>Round: {r.round}</IonText>
        </IonCardContent>
      </IonCard>
    );
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>F1 Calendar {f1Races[0].season}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonItem>
          <IonButton size="large" color="danger" onClick={() => { setPickerIsOpen(true); }} >
            Select Race
          </IonButton>
          <IonButton size="large" color="danger" fill="outline" onClick={() => { setSessionTime(undefined); }}>
            Clear
          </IonButton>
        </IonItem>
        <IonItem onClick={() => { setPickerIsOpen(true); }} >
          {sessionTime ? (
            <IonLabel>
              {racesMap}
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
          onSave={(value: any) => {
            console.log(value);
            let { Race } = value;
            setSessionTime({ racetrack: Race.value });
            setPickerIsOpen(false);
            setRaceText(value.Race.text);
          }}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;