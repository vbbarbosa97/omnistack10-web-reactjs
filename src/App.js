import React, {useEffect, useState} from 'react';
import api from './services/api';
import Main from './pages/Main';
import ListUsers from './pages/ListUsers';
import GlobalStyle from './styles/global';
import { Container } from './styles/StylesApp';

function App() {
  const [devs, setDevs] = useState([]);
  
  //carregando lista de usuarios
  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    loadDevs();
  },[]);


  return (
    <Container>
      <Main setDevs={setDevs} devs={devs} />
      <ListUsers devs={devs}/>
      <GlobalStyle />
    </Container>
  );
}

export default App;
