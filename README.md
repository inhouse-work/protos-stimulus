# Protos Stimulus

This is a supporting library for [protos](https://github.com/inhouse-work/protos).

# Controllers

The goal of this library is to extend accessibility primitives into DaisyUI
styles using stimulus controllers.

## Modal

- Uses [`aria-hidden`](https://www.npmjs.com/package/aria-hidden) to hide
  everything outside the modal until it closes
- Uses [`@stimulus-components/dialog`](https://www.stimulus-components.com/docs/stimulus-dialog) for the core functionality
- Uses [`hotkeys-js`](https://github.com/jaywcjlove/hotkeys-js) for closing modal
  on escape

## Command

- Uses [fuse.js](https://www.fusejs.io/) to do inline searching

## Popover

- Uses [tippy.js](https://atomiks.github.io/tippyjs/)
