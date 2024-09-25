const users = [
  {
    id: 1001,
    username: "ianmng",
    fullName: "Ian Nava",
    email: "ianmng@gmail.com",
    password: "mybankpass",
    gender: "male",
    card: "student",
    creditCard: "",
    movements: [920.55, 9000, 20000, -5000, -100, 10000, -450, -3400],
    descriptionMove: [
      "Product sold",
      "Paycheck",
      "Product sold",
      "Liverpool",
      "KFC",
      "Product sold",
      "P.F. Changs",
      "Bar Margaritas",
    ],
  },
  {
    id: 1002,
    username: "john117",
    fullName: "John Smith",
    email: "john117@gmail.com",
    password: "masterchiefpass",
    gender: "male",
    card: "saving",
    creditCard: "",
    movements: [5000, -2000, 10000, 599, -355, 9000, -500, -210],
    descriptionMove: [
      "Army bonus",
      "Gun Shop Tobby",
      "UNSC paycheck",
      "Product sold",
      "Cheesecake Factory",
      "UNSC paycheck",
      "Gun Shop Tobby",
      "Body Energy Club",
    ],
  },
  {
    id: 1003,
    username: "meganfox",
    fullName: "Megan Fox",
    email: "foxyM@gmail.com",
    password: "meganfoxpass",
    gender: "female",
    card: "checking",
    creditCard: "",
    movements: [20000, 4000, -2500, -6000, 1200, -899, -300, -890, 2000],
    descriptionMove: [
      "Paycheck",
      "Hollywood bonus",
      "Evelyn salon",
      "Best Buy",
      "Hollywood bonus",
      "Spaguetti Factory",
      "Starbucks",
      "Apple Store",
      "Hollywood bonus",
    ],
  },
];

function addNewUser(newUser) {
  newUser.id = users.at(-1).id + 1;
  users.push(newUser);
}

function getUsername(username) {
  const user = users.find((user) => user.username === username);
  return user;
}

module.exports = { users, addNewUser, getUsername };
