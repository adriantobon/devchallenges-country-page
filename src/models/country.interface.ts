export interface ICountry {
  flags: IFlags;
  name: Name;
  independent?: boolean;
  region: Region;
  area: number;
  population: number;
}

interface IFlags {
  png: string;
  svg: string;
  alt: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: NativeName };
}

interface NativeName {
  official: string;
  common: string;
}

type Region = 'Africa' | 'Americas' | 'Antarctic' | 'Asia' | 'Europe' | 'Oceania';
