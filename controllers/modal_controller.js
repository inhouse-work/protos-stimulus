import { hideOthers } from "aria-hidden"
import Dialog from "@stimulus-components/dialog"
import hotkeys from "hotkeys-js";

export default class extends Dialog {
  connect() {
    hotkeys("esc", () => this.close());

    this.undo = () => {}

    if (this.openValue) {
      this.open()
    }

    super.connect()
  }

  disconnect() {
    hotkeys.unbind("esc")
    super.disconnect()
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
