import http from 'k6/http';
import { sleep } from 'k6';
// This constant defines how many virtual users will be run
// The number of virtual users is modified during testing
export const options = {
  vus: 10,
  duration: '10s',
};
// This function contains the script that K6 runs for each virtual user
// It sends a POST request to a microservices endpoint
export default function () {
  const url = 'http://localhost:8080/api/v1/patients';
  const payload = JSON.stringify({
    fullName: 'Test User',
    email: 'user@test.org',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
  sleep(1);
}
