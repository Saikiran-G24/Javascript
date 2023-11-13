const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  
  let carname = prompt("Enter car name")
  let result = cars.filter(obj => {
      if(obj.type == carname) {
          return obj;
      }
  })
  
  console.log(result[0]?.year)
  