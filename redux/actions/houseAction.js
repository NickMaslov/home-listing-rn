export const FETCH_HOUSES = 'FETCH_HOUSES';
export const CREATE_HOUSES = 'CREATE_HOUSES';

var houses = [
  {
    id: '628c2ca479cb51e70587cad',
    title: 'Beautiful apartment number 1',
    address: '1000 Park Ave, New York',
    homeType: 'apartment',
    description: 'perfect location, close to center of the city',
    price: 300,
    image:
      'https://media.istockphoto.com/photos/exterior-view-of-modern-apartment-building-offering-luxury-rental-in-picture-id1322575582?b=1&k=20&m=1322575582&s=170667a&w=0&h=bGCtLpgCEorQuVdW2lbWguNZHcOGPePSwDibgbgyh0U=',
    yearBuilt: 2000,
    __v: 0,
  },
  {
    id: '628c2ca479cb51e70587cad9',
    title: 'Beautiful apartment number 2',
    address: '1000 Park Ave, New York',
    homeType: 'apartment',
    description: 'perfect location, close to center of the city',
    price: 300,
    image:
      'https://media.istockphoto.com/photos/exterior-view-of-modern-apartment-building-offering-luxury-rental-in-picture-id1322575582?b=1&k=20&m=1322575582&s=170667a&w=0&h=bGCtLpgCEorQuVdW2lbWguNZHcOGPePSwDibgbgyh0U=',
    yearBuilt: 2000,
    __v: 0,
  },
];

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
