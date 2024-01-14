var dateDiffInDays = function (date1, date2) {
  //   write your code here
  const oneDay = 24 * 60 * 60 * 1000; 
  const fDate = new Date(date1);
  const sDate = new Date(date2);

  const diffInTime = sDate.getTime() - fDate.getTime();

 
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
