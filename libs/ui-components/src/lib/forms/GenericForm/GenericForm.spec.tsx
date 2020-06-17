import React from 'react';
import { render } from '@testing-library/react';

import GenericForm from './GenericForm';
import { ThemeProvider } from '@chakra-ui/core';

const ThemedComponent: React.FC = ({ children }) => (
    <ThemeProvider>{children}</ThemeProvider>
);

describe(' GenericForm', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <ThemedComponent>
                <GenericForm
                    fields={[]}
                    formErrors={[]}
                    identifier="some-form"
                    submit={{
                        handler: () => {},
                        label: 'submit'
                    }}
                    validationSchema={null}
                />
            </ThemedComponent>
        );
        expect(baseElement).toBeTruthy();
        expect(true).toBeTruthy();
    });
});
