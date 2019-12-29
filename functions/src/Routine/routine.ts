import * as functions from "firebase-functions";
import { Helper } from "../Helper/helper"
const cors = require("cors")({ origin: true })

export class Routine {
    mAddRoutine(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const {
                    class_no,
                    date_day,
                    first_period,
                    second_period,
                    third_period,
                    fourth_period,
                    // fifth_period,
                    // sixth_period,
                    // seventh_period,
                    // eighth_period
                } = req.body;

                const content: Object = {
                    class_no,
                    date_day,
                    first_period,
                    second_period,
                    third_period,
                    fourth_period
                    // fifth_period,
                    // sixth_period,
                    // seventh_period,
                    // eighth_period
                }

                new Helper().mAddHelper("routine", content).then((docs) => {
                    res.send({
                        "data": docs,
                        "message": "Success 100% oK"
                    })
                }).catch((e) => {
                    res.send({
                        "message": "Error while saving data to database",
                        "data": "No data available",
                        "error": e
                    })
                })
            }
            catch (e) {
                res.send({
                    "error": e,
                    "message": "Unable to connect with Database (Firestore)"
                })
            }
        })
    }

    mUpdateRoutine(req: functions.Request, res: functions.Response) {
        try {
            const { class_no,
                date_day,
                first_period,
                second_period,
                third_period,
                fourth_period,
                id
            } = req.body;

            const content: Object = {
                class_no,
                date_day,
                first_period,
                second_period,
                third_period,
                fourth_period
            }

            new Helper().mUpdateHelper("routine", id, content).then((docs) => {
                res.send({
                    "status": "success",
                    "message_from": "controller",
                    "message": `successfully updated item of id => ${id}`,
                    "data": docs,
                })
            })
                .catch((e) => {
                    res.send({
                        "status": "Failed to delete data",
                        "message_from": "controller",
                        "error": e
                    })
                })
        }
        catch (e) {
            res.send({
                "error": e,
                "message": "Unable to connect with Database (Firestore)"
            })
        }
    }

    mDeleteRoutine(req: functions.Request, res: functions.Response) {
        try {
            const id = req.body.id;

            new Helper().mDeleteHelper("routine", id).then((docs) => {
                res.send({
                    "status": "success",
                    "message_from": "controller",
                    "data": docs,
                })
            })
                .catch((e) => {
                    res.send({
                        "status": "Failed to delete data",
                        "message_from": "controller",
                        "error": e
                    })
                })

        }
        catch (e) {
            res.send({
                "error": e,
                "message": "Unable to connect with Database (Firestore)"
            })
        }
    }

    async mGetAllRoutine(req: functions.Request, res: functions.Response) {
        try {
            const result: Promise<Array<Object>> = new Helper().mGetData("routine");

            result.then((docs: Object) => {
                res.send({
                    "data": docs,
                    "message": "JUST WOWW"
                })
            }).catch((e) => {
                res.send({
                    "data": e,
                    "error": "Error while loading data",
                    "message": "JUST WOWW"
                })
            })
        }
        catch (e) {
            res.send({
                "error": e,
                "message": "Unable to connect with Database (Firestore)"
            })
        }
    }

    async mGetSingleRoutine(req: functions.Request, res: functions.Response) {
        try {
            const id = req.body.id;

            const result: Promise<FirebaseFirestore.DocumentSnapshot> = new Helper().mGetData("routine", id);


            result.then((docs: FirebaseFirestore.DocumentSnapshot) => {
                res.send({
                    "data": docs.data(),
                    "message": "JUST WOWW From Single"
                })
            }).catch((e) => {
                res.send({
                    "error": e,
                    "message": "Error while getting data from database",
                    "from": "Controller"
                })
            })
        }
        catch (e) {
            res.send({
                "error": e,
                "message": "Unable to connect with Database (Firestore)"
            })
        }
    }
}