import TestData from "../data/test-data"

const makeApptTestData = TestData.makeAppoinmentTestData();

// Access the data
for(const apptData of makeApptTestData){
    console.log(`>> Test data: ${JSON.stringify(apptData)}`)
}