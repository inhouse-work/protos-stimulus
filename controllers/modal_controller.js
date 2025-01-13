import { hideOthers } from "aria-hidden"
import Dialog from "@stimulus-components/dialog"

export default class extends Dialog {
  connect() {
    this.undo = () => {}

    if (this.openValue) {
      this.open()
    }

    super.connect()
  }

  close() {
    this.dialogTarget.classList.remove("modal-open")
    this.undo()
    super.close()
  }

  open() {
    this.dialogTarget.classList.add("modal-open")
    this.undo = hideOthers(this.dialogTarget)
    super.open()
  }

  handleFormSubmit(event) {
    if (event.detail.success) {
      this.close()
    }
  }
}
