import { Controller } from "@hotwired/stimulus";
import tippy from "tippy.js";

export default class extends Controller {
  static targets = ["template", "trigger"];
  static values = {
    options: {
      type: Object,
      default: {},
    },
  };

  connect() {
    const options = {
      content: this.templateTarget.innerHTML,
      allowHTML: true,
      interactive: true,
      onTrigger: () => {
        // Allow updating the content of the popover dynamically by updating the
        // template target's innerHTML. This re-reads it when summoned
        this.tippy.setContent(this.templateTarget.innerHTML)
      }
    };

    const merged = { ...options, ...this.optionsValue };

    this.tippy = tippy(this.triggerTarget, merged);
  }

  disconnect() {
    if (this.tippy) {
      this.tippy.destroy();
    }
  }

  open() {
    this.tippy.show();
  }

  close() {
    this.tippy.hide();
  }
}
