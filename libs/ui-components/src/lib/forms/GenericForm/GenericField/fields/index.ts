import { EmailFieldType } from './Email';
import { PasswordFieldType } from './Password';
import { RadioSelectFieldType } from './RadioSelect';
import { TextFieldType } from './Text';

export type FormFieldType =
    | typeof EmailFieldType
    | typeof PasswordFieldType
    | typeof TextFieldType
    | typeof RadioSelectFieldType;
