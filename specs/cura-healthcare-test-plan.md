# CURA Healthcare Service Positive and Negative Test Plan

## Application Overview

An exploratory browser-based test plan for the public CURA Healthcare Service demo at https://katalon-demo-cura.herokuapp.com/. The explored user-facing flows include the home page and navigation, login with the displayed demo credentials, invalid-credential handling, appointment form options (facility, readmission, healthcare program, required visit date, comment), appointment confirmation, History, Profile, and logout. Each scenario is independent and starts in a fresh browser state; appointment-specific scenarios authenticate using the published demo account. Do not rely on appointments created by a previous test. The demo credentials shown by the application are John Doe / ThisIsNotAPassword. Tests should use the date picker to choose a date in a future month rather than hardcoding a date that will become stale.

## Test Scenarios

### 1. Authentication

**Seed:** `tests/seed.spec.ts`

#### 1.1. Positive: valid demo credentials open the appointment form

**File:** `tests/functional/cura-positive-login.spec.ts`

**Steps:**
  1. Start from a fresh browser state and open https://katalon-demo-cura.herokuapp.com/.
    - expect: The page title is CURA Healthcare Service.
    - expect: The homepage heading CURA Healthcare Service and Make Appointment link are visible.
  2. Select Make Appointment.
    - expect: The Login heading and Please login to make appointment. message are visible.
    - expect: The login form contains Username and Password fields and a Login button.
  3. Enter the displayed demo credentials: username John Doe and password ThisIsNotAPassword. Select Login.
    - expect: The user is authenticated and the Make Appointment form is displayed.
    - expect: The Facility selector, Apply for hospital readmission checkbox, Healthcare Program radio options, Visit Date (Required), Comment, and Book Appointment button are visible.

#### 1.2. Negative: invalid credentials do not authenticate

**File:** `tests/functional/cura-negative-login.spec.ts`

**Steps:**
  1. Start from a fresh browser state, open the homepage, and select Make Appointment.
    - expect: The Login form is displayed.
  2. Enter an invalid username and password, then select Login.
    - expect: The Login page remains displayed.
    - expect: The message Login failed! Please ensure the username and password are valid. is shown.
    - expect: Authenticated navigation such as History and Profile is not shown.

#### 1.3. Negative: submit login with blank credentials

**File:** `tests/functional/cura-negative-empty-login.spec.ts`

**Steps:**
  1. Start from a fresh browser state and open Make Appointment to reach Login.
    - expect: Username and Password fields are empty.
  2. Leave both fields blank and select Login.
    - expect: The user is not authenticated and remains on the Login page.
    - expect: A failure/validation message is shown, or required-field browser validation prevents submission; no appointment form is shown.

#### 1.4. Negative: submit login with only one credential

**File:** `tests/functional/cura-negative-partial-login.spec.ts`

**Steps:**
  1. Start from a fresh browser state and open Make Appointment to reach Login.
    - expect: The Login page is displayed.
  2. Enter John Doe as the username, leave Password blank, and select Login.
    - expect: Authentication is denied and the Login page remains displayed.
    - expect: No appointment form or authenticated navigation is shown.

### 2. Appointment booking

**Seed:** `tests/seed.spec.ts`

#### 2.1. Positive: book an appointment with selected options and verify confirmation

**File:** `tests/functional/cura-positive-appointment.spec.ts`

**Steps:**
  1. Start from a fresh browser state, open Make Appointment, and sign in with John Doe / ThisIsNotAPassword.
    - expect: The Make Appointment form is displayed.
  2. Select Hongkong CURA Healthcare Center, check Apply for hospital readmission, and select Medicaid.
    - expect: The selected facility is Hongkong CURA Healthcare Center.
    - expect: The readmission checkbox is checked and Medicaid is selected.
  3. Open the Visit Date picker and choose a valid date in the next calendar month. Enter a recognizable comment such as Positive appointment scenario.
    - expect: The selected future date is displayed in the Visit Date field.
    - expect: The comment field contains the entered comment.
  4. Select Book Appointment.
    - expect: Appointment Confirmation is displayed.
    - expect: The confirmation shows the selected facility, readmission value Yes, Medicaid, the chosen visit date, and the submitted comment.

#### 2.2. Negative: attempt booking without the required visit date

**File:** `tests/functional/cura-negative-appointment.spec.ts`

**Steps:**
  1. Start from a fresh browser state and sign in using the published demo credentials.
    - expect: The Make Appointment form is displayed.
  2. Leave Visit Date (Required) empty and select Book Appointment.
    - expect: The appointment is not submitted and Appointment Confirmation is not displayed.
    - expect: The appointment form remains available and the visit date is still empty.
    - expect: If the browser displays native required-field validation, it identifies the Visit Date field.

#### 2.3. Negative: reject a malformed visit date

**File:** `tests/functional/cura-negative-invalid-date.spec.ts`

**Steps:**
  1. Start from a fresh browser state, sign in with the published demo credentials, and open the appointment form.
    - expect: The Visit Date (Required) field is available.
  2. Enter a malformed date value (for example, 99/99/9999) and attempt to book.
    - expect: The malformed date is not accepted as a valid appointment date.
    - expect: The app does not show a successful Appointment Confirmation for the invalid date; validation keeps the user on the form or prevents submission.

#### 2.4. Positive: newly booked appointment appears in History

**File:** `tests/functional/cura-positive-appointment-history.spec.ts`

**Steps:**
  1. Start from a fresh browser state, authenticate, and book a future appointment with a distinct comment such as History verification run.
    - expect: Appointment Confirmation shows the newly submitted details.
  2. Use the authenticated History navigation.
    - expect: History lists the appointment created in this test, including its selected facility and visit date.
    - expect: History does not rely on records from any other test run.

### 3. Authenticated navigation and session

**Seed:** `tests/seed.spec.ts`

#### 3.1. Positive: fresh account History displays the empty state

**File:** `tests/functional/cura-positive-history-empty.spec.ts`

**Steps:**
  1. Start from a fresh browser state and authenticate using the published demo credentials without booking an appointment.
    - expect: History navigation is available after login.
  2. Open History.
    - expect: The History heading is visible.
    - expect: No appointment. is displayed when there are no appointments in the fresh account state.

#### 3.2. Positive: inspect Profile and log out

**File:** `tests/functional/cura-profile-logout.spec.ts`

**Steps:**
  1. Start from a fresh browser state and authenticate using the published demo credentials.
    - expect: Authenticated navigation includes Profile and Logout.
  2. Open Profile.
    - expect: The Profile heading and Under construction. message are displayed.
    - expect: A Logout link is available.
  3. Select Logout.
    - expect: The user is logged out and authenticated navigation is removed.
    - expect: A subsequent attempt to access a protected page prompts for login or redirects to the login page.

#### 3.3. Negative: unauthenticated user cannot access History

**File:** `tests/functional/cura-negative-protected-history.spec.ts`

**Steps:**
  1. Start from a fresh browser state without logging in and navigate directly to https://katalon-demo-cura.herokuapp.com/history.php#history.
    - expect: The user is not shown authenticated appointment history.
    - expect: The app redirects to Login or displays an access/login prompt.
