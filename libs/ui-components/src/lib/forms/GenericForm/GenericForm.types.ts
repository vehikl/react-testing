import { FormField } from './GenericField/FormField.type';

export type FormFieldWithoutSetValue = Omit<
    FormField,
    'getValues' | 'setValue' | 'error' | 'register' | 'toSubmit'
>;

export interface GenericFormProps {
    fields: FormFieldWithoutSetValue[];
    submit: {
        label: string;
        handler: (values: any) => void;
    };
    identifier: string;
    validationSchema: any;
    formErrors: {
        message: string;
        code?: number;
        error?: string;
    }[];
}
