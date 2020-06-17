import { FormFieldType } from './fields';

export interface FormField {
    /**
     * Unique name this field is responsible for in the overall form value object
     */
    name: string;
    label: string;
    placeholder?: string;
    description?: string;
    /**
     * Will be required by default unless explicitly otherwise
     */
    required?: boolean;
    type: FormFieldType;
    default: any;
    error: any;
    register: any;
    toSubmit: () => void;

    /**
     * Only required for certain field types necessitating a selection from a set
     */
    options?: { label: string; value: any }[];

    /**
     * Set specific form state value
     */
    setValue: (name: string, value: any) => void;

    /**
     * Retrieve form values
     */
    getValues: () => any;

    hidden?: boolean;
}
