import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "modal" ]
  static values = {
    open: { type: Boolean, default: false }
  }

  connect() {
    if (this.openValue) {
      this.open()
    }
  }

  close() {
    this.modalTarget.classList.remove("modal-open")
    this.modalTarget.close()
  }

  open() {
    this.modalTarget.classList.add("modal-open")
    this.modalTarget.showModal()
  }

  handleFormSubmit(event) {
    if (event.detail.success) {
      this.close()
    }
  }
}
