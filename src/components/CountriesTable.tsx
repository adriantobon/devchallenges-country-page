import { ICountry } from '@/models/country.interface';

interface Props {
  countries: ICountry[];
}

export const CountriesTable = ({ countries }: Props) => {
  return (
    <div className="countries-table-container">
      <table className="countries-table">
        <thead className="text-xs">
          <tr>
            <th scope="col" className="text-bold-600">Flag</th>
            <th scope="col" className="text-bold-600">Name</th>
            <th scope="col" className="text-bold-600">Population</th>
            <th scope="col" className="text-bold-600">Area(km)</th>
            <th scope="col" className="text-bold-600 only-for-desktop">Region</th>
          </tr>
        </thead>
        <tbody>
          {
            countries.map((country) => (
              <tr key={ country.name.common }>
                <th scope="row">
                  <div className="country-flag"></div>
                </th>
                <td>{ country.name.common }</td>
                <td>{ country.population }</td>
                <td>{ country.area }</td>
                <td className="only-for-desktop">{ country.region }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
