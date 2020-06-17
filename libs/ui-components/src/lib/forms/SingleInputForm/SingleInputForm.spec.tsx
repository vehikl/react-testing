import React from 'react';
import { render } from '@testing-library/react';

import SingleInputForm from './SingleInputForm';
import { ThemeProvider } from '@chakra-ui/core';

describe(' SingleInputForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider>
        <SingleInputForm
          submit={() => {}}
          identifier="form1"
          copy={{
            input: {
              describe: '',
              label: '',
              placeholder: ''
            },
            submit: {
              text: ''
            }
          }}
        />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
