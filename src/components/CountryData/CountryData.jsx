const CountryData = ({ country, handleVisitedFlags, handleVisitedCountry }) => {
  return (
    <div>
      <h3>Country Data</h3>
      <p>
        <small>{country.name.common}</small>
      </p>
    </div>
  );
};

export default CountryData;
