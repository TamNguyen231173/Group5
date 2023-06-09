// import { Block } from '@components/Block/index';
import { RootNavigation } from '@navigation'
import { persistor, store } from 'reduxs/store'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/lib/integration/react'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider
          initialMetrics={{
            frame: { x: 0, y: 0, width: 0, height: 0 },
            insets: { top: 0, left: 0, right: 0, bottom: 0 },
          }}
        >
          <RootNavigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
