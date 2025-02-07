const BaseRouters = require("../Base-Routes");

class UserRoutes extends BaseRouters {

    constructor(controller) {
        super(controller);
        this.addCustomRoutes();
    }

    addCustomRoutes() {
        this.router.post("/login", (req, res) => this.controller.login(req, res));
        this.router.post("/register", (req, res) => this.controller.register(req, res));
    }

}

module.exports = UserRoutes