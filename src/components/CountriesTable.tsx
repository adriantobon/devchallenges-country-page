export const CountriesTable = () => {
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
          <tr>
            <th scope="row">
              <div className="country-flag"></div>
            </th>
            <td>China</td>
            <td>1,402,112,000</td>
            <td>9,706,961</td>
            <td className="only-for-desktop">Asia</td>
          </tr>
          <tr>
            <th scope="row">
              <div className="country-flag"></div>
            </th>
            <td>India</td>
            <td>1,439,323,776</td>
            <td>3,287,590</td>
            <td className="only-for-desktop">Asia</td>
          </tr>
          <tr>
            <th scope="row">
              <div className="country-flag"></div>
            </th>
            <td>United States</td>
            <td>329,484,123</td>
            <td>9,372,610</td>
            <td className="only-for-desktop">Americas</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
