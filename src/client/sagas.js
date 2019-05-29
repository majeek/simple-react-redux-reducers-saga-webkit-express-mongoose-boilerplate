import { all } from 'redux-saga/effects'
import GallerySaga from './components/Gallery/saga'

export default function* Sagas() {
  yield all([
    GallerySaga()
  ])
}
