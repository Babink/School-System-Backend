import * as functions from "firebase-functions";
import { Helper } from "../Helper/helper"

const cors = require('cors')({ origin: true });

export class Subject {
    addSubject(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const {
                    name,
                    title,
                    class_no
                } = req.body;

                const content = {
                    name,
                    title,
                    class_no
                }

                new Helper().mAddHelper("subject", content).then((docs) => {
                    res.send({
                        "data": docs,
                        "message": "Successfully stored data in firestore",
                        "status": "Success"
                    })
                }).catch((e) => {
                    res.send({
                        error: e,
                        "message": "Error while storing data in firestore"
                    })
                })
            } catch (e) {
                res.send({
                    "mmessage": "Error while connecitng to database",
                    "status": "ERROR"
                })
            }
        })
    }

    deleteSubject(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const id = req.body.id;

                new Helper().mDeleteHelper("subject", id).then((docs) => {
                    res.send({
                        "data": docs,
                        "message": "Successfully Delete data in firestore",
                        "status": "Success"
                    })
                }).catch((e) => {
                    res.send({
                        error: e,
                        "message": "Error while storing data in firestore"
                    })
                })
            } catch (e) {
                res.send({
                    "mmessage": "Error while connecitng to database",
                    "status": "ERROR"
                })
            }
        })
    }

    updateSubject(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const {
                    id,
                    name,
                    title,
                    class_no
                } = req.body;

                const content = {
                    name,
                    title,
                    class_no
                }

                new Helper().mUpdateHelper("subject", id, content).then((docs) => {
                    res.send({
                        "data": docs,
                        "message": `Successfully Updated book ${id} in firestore`,
                        "status": "Success"
                    })
                }).catch((e) => {
                    res.send({
                        error: e,
                        "message": "Error while storing data in firestore"
                    })
                })

            } catch (e) {
                res.send({
                    "mmessage": "Error while connecitng to database",
                    "status": "ERROR"
                })
            }
        })
    }

    getAllSubject(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                new Helper().mGetData("subject").then((docs) => {
                    res.send({
                        "data": docs,
                        "message": `Successfully get all data from firestore`,
                        "status": "Success"
                    })
                }).catch((e) => {
                    res.send({
                        error: e,
                        "message": "Error while storing data in firestore"
                    })
                })
            } catch (e) {
                res.send({
                    "mmessage": "Error while connecitng to database",
                    "status": "ERROR"
                })
            }
        })
    }

    getSingleSubject(req: functions.Request, res: functions.Response) {
        try {
            const id = req.body.id;

            new Helper().mGetData("subject", id).then((docs) => {
                res.send({
                    "data": docs,
                    "message": `Successfully get data of  ${id} from firestore`,
                    "status": "Success"
                })
            }).catch((e) => {
                res.send({
                    error: e,
                    "message": "Error while storing data in firestore"
                })
            })
        } catch (e) {
            res.send({
                "mmessage": "Error while connecitng to database",
                "status": "ERROR"
            })
        }
    }
}