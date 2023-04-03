import React from "react";
import { ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainApp from "./src/navigation";
import { persistor, store } from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
