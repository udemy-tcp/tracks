import createDataContext from './createDataContext';

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTrack = (dispatch) => async () => {};
const createTrack = (dispatch) => async (name, locations) => {
  // make a request to our api
  console.log(name, locations.length);
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTrack, createTrack },
  []
);
