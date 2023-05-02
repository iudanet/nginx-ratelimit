import http from "k6/http";
import { sleep } from "k6";

export default function() {
let headers = { "device_id": "bla-bla" };
  http.get("http://127.0.0.1:8080/sdfga", { headers: headers });
  sleep(3); // sleep for the required interval between requests
}
export let options = {
    iterations: 25
  };