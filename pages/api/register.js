import { useContext } from "react";
import AppContext from "../../component/AppContext";
import connect from "../../lib/mongodb";
import User from "../../model/schema";

connect();

export default async function handler(req, res) {
    const { context } = useContext(AppContext);
    try {
        const user = await User.create(req.body);
        res.redirect("/");
        if (!user) {
            return res.json({ status: false, code: "User not created" });
        }
    } catch (error) {
        // res.status(400).json({ status: false, status: "Exception: Not able to create a new user." });
        if (res.status(400)) {
            res.redirect("/signup");
            context.setGlobalData(true);
        }
    }
}
