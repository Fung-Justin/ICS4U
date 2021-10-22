const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

 //let filteredAges= ages.filter((age) => {if(age >= 30) return true; else return false});

 let filteredAges= ages.filter((age) => age > 30);

 /*filteredAges.forEach(age => {
     console.log(age);
     
 });
 */

 filteredAges.forEach(age => { console.log(`${age}`);}); 


 let technoCompanies = companies.filter( company => company.category === 'Technology');

 technoCompanies.forEach(company => {console.log(company.name, company.start, company.end);});


 //Ternary Operators

 /*
 let age = 29; 
 let message = age > 29 ? 'You are old': FW < 10 ?'You are not old yet' : 'you are very little';
 console.log(message);

 */
 let sortedAges = ages.sort((a,b)=> a-b)


 /*
 let sortedCompanies = companies.sort((company.start, company.end) => company.start - company.end);


 sortedAges.forEach(age => { console.log(`${age}`);}); 
*/

let test = companies.map(company => `Hello ${company.name}`);

test.forEach(company => {console.log(company)})


let test1 = companies.map(company => {
    let t = {};
    t.property1 = company.start;
    t.property2 = company.end;
    return t;
});

test1.forEach(x => console.log(x))


let totalAge = ages.reduce((total,age) => total+age,0);

console.log(totalAge);
