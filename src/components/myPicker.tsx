import React from 'react';
import { PickerColumn } from '@ionic/core';
import { IonPicker } from '@ionic/react';

interface _Props {
    isOpen : boolean
    onSave : Function
    onCancel : Function
}

const RaceColumn = {
    name: 'Race',
    options: [
        { text: 'Austrian Grand Prix', value: '1'},
        { text: 'Styrian Grand Prix', value: '2'},
        { text: 'Hungarian Grand Prix', value: '3'},
        { text: 'British Grand Prix', value: '4'},
        { text: '70th Anniversary Grand Prix', value: '5'}
    ]
} as PickerColumn;

const MyPicker: React.FC<_Props> = ({onSave, onCancel, isOpen}) => {

    return (
        <IonPicker
            isOpen={isOpen}
            columns={[RaceColumn]}
            buttons={[
                {
                    text: 'Cancel',
                    role: 'Cancel',
                    handler: value => {
                    onCancel()
                }
            },
                {
                    text: 'Confirm',
                    handler: value => {
                        onSave(value)
                    }
                }
            ]}
        ></IonPicker>
        );
};

export default MyPicker;