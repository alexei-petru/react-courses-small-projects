const getAsteroidAPIArray = async (startDate, endDate) => {
  const ApiKey = "XDujIISECRZoDgjNy2xU4w6AkxzotNpgiZRuCRtd";
  //date-format"YYYY-MM-DD";

  const closestAsteroidsApi = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${ApiKey}`;
  const responseApi = await fetch(closestAsteroidsApi);
  if (!responseApi.ok || !responseApi)
    throw new Error(`Server answer ${responseApi.status} `);
  const responseJson = await responseApi.json();
  let daysArrays = Object.entries(responseJson["near_earth_objects"]);
  return daysArrays;
};

export const compareDaysArrayFromAPI = async (startDate, endDate) => {
  return (await getAsteroidAPIArray(startDate, endDate)).sort(
    (firstArr, secondArr) => {
      return firstArr[0].localeCompare(secondArr[0]);
    }
  );
};

export const getTodayISOFormatedDate = (numberOrEmpty) => {
  let day;
  if (Number.isInteger(numberOrEmpty)) {
    day = new Date(numberOrEmpty);
  } else {
    day = new Date();
  }
  return day.toISOString().slice(0, 10);
};
