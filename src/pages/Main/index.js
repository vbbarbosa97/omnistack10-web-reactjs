import React, {useState,useEffect} from 'react';
import api from '../../services/api';
import { Container, Location } from './styles';

export default function Main({ setDevs, devs }) {
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  //carregando a posição 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  },[])

  async function handleAddDev(e){
    e.preventDefault(); //faz com que não encaminha para outra tela quando disparado o form
    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithub_username('');
    setTechs('');
    setDevs([...devs, response.data]);
  }

  return (
    <Container>
      <strong>Cadastrar</strong>
      <form onSubmit={handleAddDev}>
        <input 
          placeholder="Usuário do GitHub" 
          name="github_username" 
          required
          value={github_username}
          onChange={e => setGithub_username(e.target.value)}
        />

        <input 
          placeholder="Tecnologias"
          name="techs"
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />

        <Location>
          <input 
            type="number"
            placeholder="Latitude"
            name="latitude"
            required
            value={latitude}
            onChange={ e => setLatitude(e.target.value)}
          />

          <input 
            type="number"
            placeholder="Longitude"
            name="longitude"
            required
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
          />
        </Location>

        <button type="submit" >Salvar</button>

      </form>
    </Container>
  );
}
