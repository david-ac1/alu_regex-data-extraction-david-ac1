// Implement Regex patterns to be validated
const patterns = {
  email: /^[\w.-]+@[\w.-]+\.\w{2,}$/,
  url: /^https?:\/\/(www\.)?[\w.-]+\.[a-z]{2,}(:\d+)?(\/[^\s]*)?$/,
  phone: /^(\(\d{3}\)\s?|\d{3}[-.]?)\d{3}[-.]?\d{4}$/,
  creditCard: /^(\d{4}[-\s]?){3}\d{4}$/,
  time: /^(?:[01]\d|2[0-3]):[0-5]\d$|^(0?[1-9]|1[0-2]):[0-5]\d\s?(AM|PM|am|pm)$/,
  hashtag: /^#[A-Za-z0-9_]+$/,
};

// Test strings
const testStrings = {
  email: ["user@example.com", "firstname.lastname@company.co.uk", "wrongemail..com"],
  url: ["https://www.example.com", "https://subdomain.example.org/page", "http://regex101.com/tech"],
  phone: ["(123) 456-7890", "123-456-7890", "12-34-567"],
  creditCard: ["1234 5678 9012 3456", "1234-5678-9012-3456", "12345678"],
  time: ["14:30", "2:30 PM", "25:99"],
  hashtag: ["#StraightfromNaija", "#EqualRights", "#DBMS"],
};

// Validation function
function validate(type, value) {
  return patterns[type].test(value);
}

// Run tests
for (const [type, values] of Object.entries(testStrings)) {
  console.log(`\nTesting ${type}:`);
  values.forEach((val) => {
    console.log(`${val} -> ${validate(type, val) ? "Valid" : "Invalid"}`);
  });
}
