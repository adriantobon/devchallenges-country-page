import { ICountry } from '@/models/country.interface';

export const fetchCountries = async(): Promise<ICountry[]> => {
  const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,independent,region,area,population');
  return response.json();
};
