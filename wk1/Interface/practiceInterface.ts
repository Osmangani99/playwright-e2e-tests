export {}; // makes this file a module so its declarations don't clash with practiceOne.ts

// ============================================================
// STEP 1: What is an interface?
// ============================================================
// An interface is a CONTRACT. It describes the SHAPE of an object:
// what properties it must have, and what type each one is.
// It does NOT contain logic — it's purely a compile-time check.
// It disappears when TypeScript compiles to JavaScript.

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


// ============================================================
// STEP 2: Optional (?) and readonly properties
// ============================================================
interface Product {
  id: number;
  title: string;
  discount?: number; // optional — can be omitted
  readonly sku: string; // readonly — can be set once, never reassigned
}

const product1: Product = {
  id: 1,
  title: "Keyboard",
  sku: "KB-001",
  // discount is optional, so we can skip it
};

// product1.sku = "KB-002"; // ❌ Error: sku is readonly


// ============================================================
// STEP 3: Function/method signatures inside an interface
// ============================================================
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

// Any object implementing Calculator must provide these methods.
const calc: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

console.log(calc.add(2, 3)); // 5


// ============================================================
// STEP 4: Extending interfaces (reuse / composition)
// ============================================================
interface Person {
  firstName: string;
  lastName: string;
}

// Employee "inherits" everything from Person, plus its own fields.
interface Employee extends Person {
  employeeId: number;
  department: string;
}

const emp1: Employee = {
  firstName: "Jane",
  lastName: "Doe",
  employeeId: 101,
  department: "QA",
};


// ============================================================
// STEP 5: Using an interface to type function parameters
// ============================================================
// This is the pattern you'll use CONSTANTLY in test automation:
// defining the shape of "test data" and passing it into functions.

interface LoginCredentials {
  username: string;
  password: string;
}

function printCredentials(creds: LoginCredentials): void {
  console.log(`User: ${creds.username}, Pass: ${creds.password}`);
}

printCredentials({ username: "admin", password: "Password123" });


// ============================================================
// STEP 6: Interfaces in a Playwright context — typing test data
// ============================================================
// In tests/functional/login.spec.ts today, login values are hardcoded
// inline as string literals. An interface lets you describe reusable,
// type-checked test data instead of loose strings.

interface PatientRegistrationData {
  firstName: string;
  lastName: string;
  gender: "Male" | "Female"; // union type — only these two strings allowed
  dateOfBirth?: string; // optional
}

const patient: PatientRegistrationData = {
  firstName: "John",
  lastName: "Smith",
  gender: "Male",
};


// ============================================================
// STEP 7: Interfaces + Playwright's `Page` type (Page Object pattern)
// ============================================================
// This repo doesn't use Page Objects yet, but this is the natural next
// step once you outgrow inline locators. An interface can describe what
// every "page object" must expose, and each page class implements it.
//
// Uncomment this block once @playwright/test is importable from this file
// (it already is, since it's a project dependency):

// import { Page, Locator } from "@playwright/test";
//
// interface LoginPage {
//   readonly page: Page;
//   usernameInput: Locator;
//   passwordInput: Locator;
//   loginButton: Locator;
//   login(username: string, password: string): Promise<void>;
// }
//
// class CuraLoginPage implements LoginPage {
//   readonly page: Page;
//   usernameInput: Locator;
//   passwordInput: Locator;
//   loginButton: Locator;
//
//   constructor(page: Page) {
//     this.page = page;
//     this.usernameInput = page.getByPlaceholder("Username");
//     this.passwordInput = page.getByPlaceholder("Password");
//     this.loginButton = page.getByRole("button", { name: "Login" });
//   }
//
//   async login(username: string, password: string) {
//     await this.usernameInput.fill(username);
//     await this.passwordInput.fill(password);
//     await this.loginButton.click();
//   }
// }
//
// The `implements LoginPage` above forces this class to have every
// property/method the interface promises — TS errors if you forget one.


// ============================================================
// STEP 8 (your turn): practice exercise
// ============================================================
// 1. Define an interface `AppointmentData` with fields matching the
//    CURA "Make Appointment" form: facility (string), hospitalReadmission
//    (boolean), visitDate (string), comment (optional string).
// 2. Create a const of that type with sample values.
// 3. Write a function `bookAppointment(data: AppointmentData): void`
//    that logs a formatted summary.
//
// Write your answer below this line:
