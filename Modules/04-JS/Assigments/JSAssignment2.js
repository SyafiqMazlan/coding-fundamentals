/* 
Calculate age
Create a function that takes in user's birth date in dd/mm/yyyy format, and calculate user's age.

Example:

calculateAge("20/7/2002") // output: 19
calculateAge("1/1/1979") // output: 43
*/
//Starter Code:

function calculateAge(date) {
  const today = new Date();
  const birthDate = new Date(date);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

// Test cases
console.log(calculateAge("20/7/2002"));
console.log(calculateAge("1/1/1979"));
