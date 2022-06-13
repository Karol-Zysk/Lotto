  //check for duplicates in custom Array

export const findDuplicates = (arr: any) =>
    arr
      .filter((item: number, index: number) => arr.indexOf(item) !== index)
      .filter(function (value: number) {
        return !Number.isNaN(value);
      });

      
      