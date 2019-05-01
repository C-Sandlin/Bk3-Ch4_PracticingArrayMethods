//ONE WAY TO FILTER

let outputLocation = document.querySelector("#output");
businesses
  .filter(biz => biz.addressStateCode === "NY")
  .forEach(business => {
    outputLocation.innerHTML += `
  <h3>${business.companyName}</h3>
  <address>${business.addressFullStreet}</address>
  <p>${business.addressStateCode}</p>
  <hr>
  `;
  });

//SECOND WAY TO FILTER

const filteredBusinesses = businesses.filter(business => {
  return business.addressStateCode === "NY";
});

filteredBusinesses.forEach(business => {
  outputLocation.innerHTML += `
    <h3>${business.companyName}</h3>
    <address>${business.addressFullStreet}</address>
    <p>${business.addressStateCode}</p>
    <hr>
    `;
});

// MAPPING

function showBusiness(business) {
  return `<div>${business.companyName}</div>`;
}

let newStuff = businesses.map(showBusiness);
outputLocation.innerHTML += newStuff.join("");

// FINDING - RETURNS first element IN ARRAY THAT PASSES TEST

const firstCheapCandy = candies.find(candy => candy.price < 2.0);

console.log(firstCheapCandy);
