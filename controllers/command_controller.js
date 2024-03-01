import { Controller } from "@hotwired/stimulus"
import Fuse from "fuse.js"

export default class extends Controller {
  static targets = [ "item", "empty" ]

  connect() {
    this.search = new Fuse(this.itemTargets, {
      keys: ["textContent"],
      threshold: 0.2,
      includeMatches: true
    })
  }

  filter(event) {
    const query = event.target.value

    if (query.length === 0) {
      this._reset()
      return
    }

    this._toggleVisibility(this.itemTargets, false)

    const results = this.search.search(query)
    results.forEach((result) => {
      this._toggleVisibility([result.item], true)
    })

    if (this.hasEmptyTarget) {
      this._toggleVisibility(this.emptyTargets, results.length === 0)
    }
  }

  _reset() {
    this._toggleVisibility(this.itemTargets, true)
    this._toggleVisibility(this.emptyTargets, false)
  }

  _toggleVisibility(elements, visible) {
    elements.forEach(element => element.classList.toggle("hidden", !visible))
  }
}
