const User = require("../../models/users");
const ResponseHandler = require("../../utils/ResponseHandler");
const IndexCrud = require("../../services/index-crud");


/*
    The Basic Crud Oprations  
*/
const createUsers = async (req, res) => {
    const responseHandler = new ResponseHandler(res);
    const UserModule = new IndexCrud(User);
    try {
        const isExist = UserModule.filter(req.body.email);
        if (isExist) {
            return responseHandler.error("User already exists", 400);

        }
        const user = await UserModule.create(req.body);
        if (!user) {
            return responseHandler.error("User not found", 404);
        }

        return responseHandler.success(user, "User Created Successfully", 201);


    } catch (error) {
        return responseHandler.error(error.message, 500, error);
    }
}
const updateUsers = async (req, res) => {
    const responseHandler = new ResponseHandler(res);
    const UserModule = new IndexCrud(User);
    try {
        const userID = req.params.id
        const isExist = UserModule.getById(userID);
        if (!isExist) {
            return responseHandler.error("User Not Found", 404);

        }
        const updatedUser = await UserModule.update(userID, req.body);
        return responseHandler.success(updatedUser, "User Updated Successfully", 201);

    } catch (error) {
        return responseHandler.error(error.message, 500, error);
    }
}
const getOneUser = async (req, res) => {
    const responseHandler = new ResponseHandler(res);
    const UserModule = new IndexCrud(User);
    try {
        const userID = req.params.id
        const isExist = UserModule.getById(userID);
        if (!isExist) {
            return responseHandler.error("User Not Found", 404);

        }
        return responseHandler.success(isExist, "User Feched Successfully", 201);

    } catch (error) {
        return responseHandler.error(error.message, 500, error);
    }
}
const getAllUser = async (req, res) => {
    const responseHandler = new ResponseHandler(res);
    const UserModule = new IndexCrud(User);
    try {
        const isExist = UserModule.getAll();
        return responseHandler.success(isExist, "Users Feched Successfully", 201);

    } catch (error) {
        return responseHandler.error(error.message, 500, error);
    }
}
const deleteUser = async (req, res) => {
    const responseHandler = new ResponseHandler(res);
    const UserModule = new IndexCrud(User);
    try {
        const userID = req.params.id
        const isExist = UserModule.getById(userID);
        if (!isExist) {
            return responseHandler.error("User Not Found", 404);

        }
        const deletedUser = await UserModule.delete(userID);
        return responseHandler.success(deletedUser, "User Deleted Successfully", 201);

    } catch (error) {
        return responseHandler.error(error.message, 500, error);
    }
}

/*
    The Auth Oprations For The Admin
*/

const login = async (req, res) => {
    const responseHandler = new ResponseHandler(res);
    const UserModule = new IndexCrud(User);
    try {
        const { email, password } = req.body;
        const user = await UserModule.filterBy({ email });
        if (!user) {
            return responseHandler.error("User not found", 404);
        }
        if (user.role === "CODEMODE") {
            return responseHandler.error("Unauthorized", 401);
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return responseHandler.error("Invalid credentials", 401);
        }
        const token = await user.generateToken();
        return responseHandler.success({ user, token }, "Login successful", 200);
    } catch (error) {
        return responseHandler.error(error.message, 500, error);
    }
}




module.exports = {
    createUsers,
    updateUsers,
    getOneUser,
    getAllUser,
    deleteUser,

    // admin Auth
    login
}