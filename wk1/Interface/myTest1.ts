interface User {
  name: string;
  age: number;
}

// This object MUST match the shape above, or TS will error.
const user1: User = {
  name: "Osman",
  age: 30,
};

// Try uncommenting the line below — TS will complain (missing "age"):
// const badUser: User = { name: "Osman" };

console.log(user1);