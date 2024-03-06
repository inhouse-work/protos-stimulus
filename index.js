// Load and export all of the stimulus controllers
import { application } from "./controllers/application"

// Import all controller files
import ModalController from "./controllers/modal_controller"
import CommandController from "./controllers/command_controller"
import PopoverController from "./controllers/popover_controller"

// Register all controllers
application.register("protos--modal", ModalController)
application.register("protos--command", CommandController)
application.register("protos--popover", PopoverController)


// Export all controllers so user of npm package can lazy load controllers
export { default as ModalController } from "./controllers/modal_controller"
export { default as CommandController } from "./controllers/command_controller"
export { default as PopoverController } from "./controllers/popover_controller"

// Export application
export { application }
