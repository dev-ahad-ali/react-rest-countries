import CountryData from '../CountryData/CountryData';

const CountryDetail = (props) => {
  //   const { country, handleVisitedFlags, handleVisitedCountry } = props;
  return (
    <div>
      <h3>Country Detail</h3>
      <hr />
      {/* <CountryData
        country={country}
        handleVisitedFlags={handleVisitedFlags}
        handleVisitedCountry={handleVisitedCountry}
      ></CountryData> */}
      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetail;
