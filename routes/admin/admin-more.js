const BaseRouters = require("../Base-Routes");

class AdminRoutes extends BaseRouters {

    constructor(controller) {
        super(controller);
        this.addCustomRoutes();
    }

    addCustomRoutes() {
        this.router.post("/login", (req, res) => this.controller.login(req, res));
    }

}

module.exports = AdminRoutes