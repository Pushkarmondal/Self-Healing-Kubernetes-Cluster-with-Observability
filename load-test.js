import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 50, // 50 Virtual Users
  duration: "60s", // Run for 60 seconds
};

export default function () {
  let res = http.get(
    "http://a95fe9827905d4c98814abbf6b42a760-1302737764.us-east-1.elb.amazonaws.com"
  );

  check(res, {
    "status is 200": (r) => r.status === 200,
    "response time < 500ms": (r) => r.timings.duration < 500,
  });

  sleep(1); // 1-second delay between requests
}
