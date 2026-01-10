async function testAPI() {
  console.log('🧪 Testing duplicate report API...\n');

  const testData = {
    eventId: 'thai-cave-rescue',
    suspectedDuplicateId: 'confederation-of-canada',
    reporterId: 'test_reporter_123',
    reason: 'Test reason for duplicate report'
  };

  console.log('Sending POST request to http://localhost:3003/api/report-duplicate');
  console.log('Data:', JSON.stringify(testData, null, 2), '\n');

  try {
    const response = await fetch('http://localhost:3003/api/report-duplicate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('Response status:', response.status);

    const result = await response.json();
    console.log('Response body:', JSON.stringify(result, null, 2));

    if (!response.ok) {
      console.log('\n❌ API returned an error');
    } else {
      console.log('\n✅ API call successful!');
    }
  } catch (error) {
    console.error('❌ Error calling API:', error.message);
    console.error(error);
  }
}

testAPI();
