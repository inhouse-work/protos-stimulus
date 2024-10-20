import { Controller } from "@hotwired/stimulus"
import { hideOthers } from "aria-hidden"

export default class extends Controller {
  static targets = [ "modal" ]
  static values = {
    open: { type: Boolean, default: false }
  }

  connect() {
    this.undo = () => {}

    if (this.openValue) {
      this.open()
    }
  }

  close() {
    this.modalTarget.classList.remove("modal-open")
    this.modalTarget.close()
    this.undo()
  }

  open() {
    this.modalTarget.classList.add("modal-open")
    this.modalTarget.showModal()
    this.undo = hideOthers(this.modalTarget)
  }

  handleFormSubmit(event) {
    if (event.detail.success) {
      this.close()
    }
  }
}
