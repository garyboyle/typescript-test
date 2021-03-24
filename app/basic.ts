import Customer from "./customer";

let firstCustomer = new Customer("Alice");

let announcement: string = firstCustomer.announce();

let heading = document.querySelector("h1");

heading!.textContent = announcement;
