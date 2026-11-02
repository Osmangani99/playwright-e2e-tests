export default class TestData {
  /**
   *
   * Test data combanation
   *
   * 1 -- Drop down
   * - Tokyo CURA Healthcare Center
   * - Hongkong CURA Healthcare Center
   * - Seoul CURA Healthcare Center
   *
   * 2 -- Healthcare Program
   * - Medicare
   * - Medicaid
   * - None
   *
   * 3 -- Different Dates
   * - 05/10/2025
   * - 05/11/2025
   * - 05/12/2025
   *
   */

  // This test data is used for the make appointment test in the CURA Healthcare demo app
  static makeAppoinmentTestData() {
    return [
      {
        testId: "TC001",
        facility: "Tokyo CURA Healthcare Center",
        hcp: "Medicare",
        visitDt: "05/10/2025",
      },
      {
        testId: "TC002",
        facility: "Hongkong CURA Healthcare Center",
        hcp: "Medicaid",
        visitDt: "05/11/2025",
      },
      {
        testId: "TC003",
        facility: "Seoul CURA Healthcare Center",
        hcp: "None",
        visitDt: "05/12/2025",
      },
    ];
  }

  // This test data is uded for the POST call to create a user in the reqres.in API
  static apiUserCreation() {
    return [
      {
        name: "Osman Gani",
        job: "leader",
      },
    ];
  }
}
