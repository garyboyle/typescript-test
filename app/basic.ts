import Customer from "./customer";

let firstCustomer = new Customer("Gary");

let announcement: string = firstCustomer.announce();

let heading = document.querySelector("h1");

heading!.textContent = announcement;
