import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "modal" ]

  close() {
    this.modalTarget.close()
  }

  open() {
    this.modalTarget.showModal()
  }

  handleFormSubmit(event) {
    if (event.detail.success) {
      this.close()
    }
  }
}
