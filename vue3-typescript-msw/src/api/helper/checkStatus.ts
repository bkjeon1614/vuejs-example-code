export const checkStatus = (status: number): void => {
  switch (status) {
    case 400:
      console.log("Request failed! Please try again later");
      break;
    case 500:
      console.log("Service exception!");
      break;
    default:
      console.log("Request failed!");
  }
};
