import convert from 'convert-units';

const convertTemperaturefromKelvinToCentrigrates = kelvin => Number(convert(kelvin).from('K').to('C').toFixed(0));

export default convertTemperaturefromKelvinToCentrigrates;