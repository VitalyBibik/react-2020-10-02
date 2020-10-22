import produce from 'immer';
import { arrToMap } from '../utils';

import {
  ADD_REVIEW,
  FAILURE,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
} from '../constants';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, payload, userId, error, response } = action;

  switch (type) {
    case ADD_REVIEW:
      const { name } = payload.review;
      draft[userId] = { id: userId, name };
      break;

    case LOAD_USERS + REQUEST:
      draft.loading = true;
      draft.error = null;
      break;

    case LOAD_USERS + SUCCESS:
      draft.entities = arrToMap(response);
      draft.loading = false;
      draft.loaded = true;
      break;

    case LOAD_USERS + FAILURE:
      draft.loading = false;
      draft.loaded = false;
      draft.error = error;
      break;

    default:
      return draft;
  }
});
