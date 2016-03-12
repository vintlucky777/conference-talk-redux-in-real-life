import _ from 'lodash';

import {HYDRATE, NEXT_SLIDE, PREV_SLIDE, EDIT_TEXT_1} from '../actions/types';

const initialState = {
  slide: 0,
  loggerVisible: false,
  text1: '',
};

export default function presentationState(state = initialState, action) {
	switch (action.type) {
		case NEXT_SLIDE:
			return {...state, slide: state.slide + 1};

		case PREV_SLIDE:
      return {...state, slide: Math.max(state.slide - 1, 0)};

		case EDIT_TEXT_1:
      return {...state, text1: _.toString(action.text)};

    case HYDRATE:
      return {...state, ...action.state.presentation};

		default:
			return state;
	}
}
