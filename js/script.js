const xhr = new XMLHttpRequest();
xhr.open("GET", "https://fcbooking.cse.hku.hk/Form/GetTrainingSessionsAsync2?CenterID=10002");
console.log("hi")
xhr.send();
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const data = xhr.response;
    console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};