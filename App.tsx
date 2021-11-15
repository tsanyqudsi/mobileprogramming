import * as React from 'react';
import * as eva from '@eva-design/eva';
import { StatusBar } from 'expo-status-bar';
import { IconRegistry, ApplicationProvider, Button, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { TopNav } from './components/TopNav';
import { Default } from './pages/Default';
import { Students } from './pages/Students';

const App = () => {
  const [state, setState] = React.useState<boolean>(true);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar style="auto" />
      <ApplicationProvider {...eva} theme={eva.light}>
        <TopNav />
        <Button onPress={() => setState(!state)}>
          <Text>Change to {state ? 'UNUGHA' : 'Students'}</Text>
        </Button>
        {state ? <Students /> : <Default />}
      </ApplicationProvider>
    </>
  );
};

export default App;
