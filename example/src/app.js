import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";

@inject(HttpClient)
export class App {
  firstName = "John";
  lastName = "Doe";

  constructor(http) {
    this.http = http;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getData() {
    this.http.fetch("data.json")
      .then(res => res.json())
      .then(data => alert(data.message));
  }
}
