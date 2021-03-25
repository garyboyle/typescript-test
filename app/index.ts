import "../styles/main.scss";
import _ from "lodash";

import Customer from "./customer";

let firstCustomer = new Customer("Gary");

let announcement: string = firstCustomer.announce();

let heading = document.querySelector("h1");

heading!.textContent = _.upperCase(announcement);
