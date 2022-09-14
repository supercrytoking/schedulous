import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["admin"];

  open() {
    this.adminTarget.classList.add("drawer");
  }

  close() {
    this.adminTarget.classList.remove("drawer");
  }
}
