import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import GenericForm from './GenericForm';
import { FormFieldWithoutSetValue } from '.';

export const WithDefault = () => {
    const emailRequired = boolean('Required Email', false, 'email');
    const showEmailDescription = boolean(
        'Show Email Description',
        false,
        'email'
    );

    const passwordRequired = boolean('Required Password', false, 'password');
    const showPasswordDescription = boolean(
        'Show Password Description',
        false,
        'password'
    );

    const textRequired = boolean('Required Text', false, 'text');
    const showTextDescription = boolean('Show Text Description', false, 'text');
    const textDescription = text(
        'Text Field Description',
        'Text Field Description',
        'text'
    );

    const selectRequired = boolean('Select Required', false, 'select');
    const showSelectDescription = boolean(
        'Show Select Description',
        false,
        'select'
    );
    const selectDescription = text(
        'Select Description',
        'Select Description field area',
        'select'
    );

    const fields: FormFieldWithoutSetValue[] = [
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            required: emailRequired,
            description: showEmailDescription
                ? `Email is ${!emailRequired ? 'not' : ''} required`
                : null,
            default: ''
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            required: passwordRequired,
            description: showPasswordDescription
                ? `Password is ${!passwordRequired ? 'not' : ''} required`
                : null,
            default: ''
        },
        {
            label: 'Some Text Field',
            name: 'text',
            type: 'text',
            required: textRequired,
            description: showTextDescription ? textDescription : null,
            default: ''
        },
        {
            label: 'Some Select',
            name: 'select',
            type: 'radio-select',
            required: selectRequired,
            description: showSelectDescription ? selectDescription : '',
            default: null,
            options: [
                {
                    label: 'First Option Label',
                    value: 'first'
                },
                {
                    label: 'Second Option Label dude',
                    value: 'second'
                },
                {
                    label: 'Third Option Label',
                    value: 'third'
                }
            ]
        }
    ];

    const submit = {
        label: text('Submit Button Text', 'Submit', 'submit'),
        handler: (values: any) => {
            alert('submit config handler!');
            console.log(values);
        }
    };

    return (
        <GenericForm
            fields={fields}
            submit={submit}
            identifier="default-generic-form"
            formErrors={[]}
            validationSchema={null}
        />
    );
};

export default {
    title: 'Generic Form',
    decorators: [withKnobs]
};
