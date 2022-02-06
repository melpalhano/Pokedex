import { all } from 'redux-saga/effects';

import pokemons from './pokemons/sagas';
import evolutions from './evolucoes/sagas';

export default function* rootSaga(): any {
  return yield all([pokemons, evolutions]);
}
