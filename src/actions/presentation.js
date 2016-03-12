import {NEXT_SLIDE, PREV_SLIDE, EDIT_TEXT_1} from './types';

export const nextSlide = () => ({type: NEXT_SLIDE});
export const prevSlide = () => ({type: PREV_SLIDE});
export const editText1 = (text) => ({type: EDIT_TEXT_1, text});
