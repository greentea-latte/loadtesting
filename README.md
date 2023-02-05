# Load Testing tool
A tool for using K6 to load test applications with parallel users. K6 will execute the specified script which includes a POST request to the LL Services microservices application. The request is sent to the endpoint http://localhost:8080/api/v1/patients with parameters to create a patient account.

## Setup
Install K6 (https://k6.io/docs/get-started/installation/)

## Running the tool
1. Ensure you are in the root of the Loadtesting repository
2. Run the following command:
```
k6 run loadTest.js      
```
3. You should see output from K6 showing load test metrics:
e.g.
```
          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: loadTest.js
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 40s max duration (incl. graceful stop):
           * default: 10 looping VUs for 10s (gracefulStop: 30s)


running (10.4s), 00/10 VUs, 80 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  10s

     data_received..................: 5.8 kB 564 B/s
     data_sent......................: 16 kB  1.5 kB/s
     http_req_blocked...............: avg=440.91µs min=1µs     med=4µs    max=3.62ms p(90)=3.33ms  p(95)=3.55ms  
     http_req_connecting............: avg=59.87µs  min=0s      med=0s     max=701µs  p(90)=251.1µs p(95)=525.15µs
```


