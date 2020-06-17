import React from 'react';

import EmailField from './fields/Email/EmailField';
import PasswordField from './fields/Password/PasswordField';
import TextField from './fields/Text/TextField';
import { FormField } from './FormField.type';
import { TextFieldType } from './fields/Text';
import { PasswordFieldType } from './fields/Password';
import { EmailFieldType } from './fields/Email';
import { RadioSelectFieldType } from './fields/RadioSelect';
import RadioSelectField from './fields/RadioSelect/RadioSelectField';

const GenericField: React.FC<{ config: FormField }> = ({ config }) => {
    const { type } = config;

    switch (type) {
        case TextFieldType:
            return <TextField config={config} />;
        case PasswordFieldType:
            return <PasswordField config={config} />;
        case EmailFieldType:
            return <EmailField config={config} />;
        case RadioSelectFieldType:
            return <RadioSelectField config={config} />;
        default:
            throw new Error(`Unknown Generic Field Type: ${type}`);
    }
};

export default GenericField;
