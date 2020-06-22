import api from '../../api';

import md5 from 'js-md5';

import {LOAD_CHARACTERS, LOAD_LETTERS, SEARCH_BY_LETTER, HERO_DETAILS, MODAL_VISIBLE} from './actionTypes';

const PUBLIC_KEY = 'a0766465ea4b57ae125da9e38d29844b';
const PRIVATE_KEY = '2614f605fa45ccec50cbfdc9fbaa48b8d3d0e9c3';
const timestamp = Number(new Date());
let hash = md5.create();

export const loadCharacters = () =>{
  hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);
  const request = api.get(`/characters?ts=${timestamp}&orderBy=name&limit=50&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
  return {
    type: LOAD_CHARACTERS,
    payload: request,
  };
};

export const loadLetters = () => {
  const request = require('../../letters.json');
  return {
    type: LOAD_LETTERS,
    payload: request,
  };
};

export const searchByLetter = letter => {
  hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);
  const request = api.get(`/characters?ts=${timestamp}&orderBy=name&limit=50&nameStartsWith=${letter}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`);
  return {
    type: SEARCH_BY_LETTER,
    payload: request,
  }
};

export const setHeroDetails = hero => {
  return {
    type: HERO_DETAILS,
    payload: hero,
  }
}

export const setModalVisible = isVisible => {
  return {
    type: MODAL_VISIBLE,
    payload: isVisible
  }
}