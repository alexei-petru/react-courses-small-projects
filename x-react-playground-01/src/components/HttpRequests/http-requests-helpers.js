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

export const isDatesRangeValid = (startDate, endDate, type) => {
  const startDateMs = Date.parse(startDate);
  const endDateMs = Date.parse(endDate);
  const sevenDays = 7 * 24 * 60 * 60 * 1000;

  if (endDateMs - startDateMs < 0) {
    return {
      startDate: type === "STARTDATE" ? startDate : endDate,
      endDate: type === "STARTDATE" ? startDate : endDate,
    };
  }

  if (endDateMs - startDateMs > sevenDays) {
    if (type === "STARTDATE") {
      const datePlusSevenDaysISO = getTodayISOFormatedDate(
        startDateMs + sevenDays
      );
      return { startDate: startDate, endDate: datePlusSevenDaysISO };
    }

    if (type === "ENDDATE") {
      const datePlusSevenDaysISO = getTodayISOFormatedDate(
        endDateMs - sevenDays
      );
      return { startDate: datePlusSevenDaysISO, endDate: endDate };
    }
  }
};

export const getNotDefaultSortedArray = (daysArray, sort) => {
  console.log(daysArray, sort);
  return daysArray;
};
