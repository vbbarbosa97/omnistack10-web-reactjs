import React from 'react';

import { Container, ListUser } from './styles';

export default function ListUsers({devs}) {
    
  return (
    <Container>
      <ListUser>
        {
          devs.map(dev => (
            <li
              key={dev._id}
            >
          
              <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div>
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')} </span>
                </div>
              </header>
    
              <p>{dev.bio} </p>
              <a href={`https://github.com/${dev.github_username}`} >Acessar perfil no GitHub</a>
    
            </li>
          ))
        }

       
      </ListUser>
      
    </Container>
  );
}
