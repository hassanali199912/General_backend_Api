const ResponseHandler = require("../../utils/ResponseHandler");
const BaseController = require("../Base-Controller");

class UserMoreController extends BaseController {
    constructor(service) {
        super(service);
        this.service = service;
        

    }
    async login(req, res) {
        const responseHandler = new ResponseHandler(res);
        try {
            const { email, password } = req.body;
            const user = await this.service.filterBy({ email });
            if (user.length === 0) {

                return responseHandler.error("User not found", 404);
            }
            const userData = await this.service.getById(user[0]._id);
            const isMatch = await userData.comparePassword(password);
            if (!isMatch) {
                return responseHandler.error("Invalid credentials", 401);
            }
            const token = await userData.generateToken();
            return responseHandler.success({ token }, "Login successful", 200);
        } catch (error) {
            return responseHandler.error(error.message, 500, error);
        }
    }

    async register(req, res) {
        const responseHandler = new ResponseHandler(res);
        try {
            const { email } = req.body;
            const user = await this.service.filterBy({ email });
            if (user.length > 0) {
                return responseHandler.error("User already exists", 400);
            }
            const newUser = await this.service.create(req.body);
            const token = await newUser.generateToken();
            return responseHandler.success({ token }, "Registration successful", 201);
        } catch (error) {
            return responseHandler.error(error.message, 500, error);
        }
    }

}


module.exports = UserMoreController