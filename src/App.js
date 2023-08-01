import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';
import RoutesPages from './Routes';

const customTheme = extendTheme({
  components: {
    Table: {
      variants: {
        mytable: {
          tr: {
            _odd: {
              background: 'white',
            },
          },
        },
      },
    },
  },
});

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider theme={customTheme}>
          <RoutesPages />
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  );
}
