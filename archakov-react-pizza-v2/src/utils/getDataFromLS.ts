export const getDataFromLS = (key: string, emptyValue: any) => {
  const storageData = localStorage.getItem(key);
  //@ts-ignore
  console.log(JSON.parse(storageData));
  return storageData !== null ? JSON.parse(storageData) : emptyValue;
};
