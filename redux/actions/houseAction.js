export const FETCH_HOUSES = 'FETCH_HOUSES';
export const CREATE_HOUSES = 'CREATE_HOUSES';

export const fetchHouses = () => {
  return async (dispatch) => {
    // logic to fetch out houses from API

    try {
      const results = await fetch('http://192.168.1.193:3000/api/houses/');
      const resultData = await results.json();

      dispatch({
        type: FETCH_HOUSES,
        payload: resultData,
      });
    } catch (error) {
      console.log('error: ', error);
    }
  };
};

export const createHome = ({
  title,
  image,
  homeType,
  price,
  yearBuilt,
  address,
  description,
}) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://192.168.1.193:3000/api/houses/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          image,
          homeType,
          price,
          yearBuilt,
          address,
          description,
        }),
      });

      const responseData = await response.json();

      console.log(responseData);

      dispatch({
        type: CREATE_HOUSES,
        payload: responseData,
      });
    } catch (error) {
      console.log('error: ', error);
    }
  };
};
