import { Controller, Get } from "@nestjs/common";

@Controller("/root") // decorator it tells nestJs that AppController is the controller for this app
class AppController {
  @Get()
  getRootRoute() {
    return "hi there!";
  }
  @Get("/aman")
  getAmanRoute() {
    return "hi Aman!";
  }
}

export default AppController;
