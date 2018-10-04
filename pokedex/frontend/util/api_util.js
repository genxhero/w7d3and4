import React from 'react';


export const fetchAllPokemon = () => (
  $.ajax({
    //FRANCIS
    url: '/api/pokemon',
    method: 'GET'
  })
);
