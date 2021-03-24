// Import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Customer from "./customer";

let firstCustomer = new Customer("Gary");

let announcement: string = firstCustomer.announce();

let heading = document.querySelector("h1");

heading!.textContent = announcement;
