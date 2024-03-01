// Load and export all of the stimulus controllers
import { application } from "./controllers/application"

// Import all controller files
import ModalController from "./controllers/modal_controller"
import CommandController from "./controllers/command_controller"

// Register all controllers
application.register("protos--modal", ModalController)
application.register("protos--command", CommandController)

// Export all controllers so user of npm package can lazy load controllers
export { default as ModalController } from "./controllers/modal_controller"
export { default as CommandController } from "./controllers/command_controller"

// Export application
export { application }
