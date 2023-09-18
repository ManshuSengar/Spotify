import { GraphQLError } from 'graphql'
import UserModel from '../Models/UserModel.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const login = async (_, args) => {
    try {
        const { email, password } = args
        const isThere = await UserModel.findOne({ email });
        if (!isThere) {
            throw new GraphQLError("User is not exists")
        }
        console.log(isThere)
        const isPasswordCorrect = bcrypt.compareSync(password, isThere.password)
        if (!isPasswordCorrect) {
            throw new GraphQLError("Wrong Credentials")
        }
        const token = jwt.sign({
            email: isThere.email,
            firstName: isThere.firstName
        }, process.env.JWT_SECRET)
        return {
            token
        }
    } catch (error) {
        console.log(error)
        throw new GraphQLError(error.message)
    }
}

export const register = async (_, args) => {
    try {
        const isThere = UserModel.findOne({ email: args.email });
        console.log(isThere)
        if (isThere) {
            throw new GraphQLError("User Already exists")
        }
        const { password } = args
        const signedPass = await encrypt(password);
        const user = new UserModel({
            ...args,
            password: signedPass
        });
        await user.save();
        const token = jwt.sign({
            email: args.email,
            firstName: args.firstName
        }, process.env.JWT_SECRET)
        return {
            token
        }
    } catch (error) {
        throw new GraphQLError(error.message);
    }
}


const encrypt = async (password) => {
    const hashSalt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, hashSalt)
}