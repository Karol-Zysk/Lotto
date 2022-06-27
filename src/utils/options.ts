//check for duplicates in custom Array

export const findDuplicates = (arr: any) =>
  arr
    .filter((item: number, index: number) => arr.indexOf(item) !== index)
    .filter(function (value: number) {
      return !Number.isNaN(value);
    });

//add comas to numbers
export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export const stringsWithCommas = (x: string) => {
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
