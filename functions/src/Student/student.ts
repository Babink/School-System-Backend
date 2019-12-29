import * as functions from "firebase-functions";
import { Helper } from "../Helper/helper"

const cors = require('cors')({ origin: true });

export class Student {
    addStudent(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const {
                    first_name,
                    middle_name,
                    last_name,

                    address,
                    permanent_address,
                    date_of_birth,

                    grade,
                    roll_no
                } = req.body;

                const content = {
                    first_name,
                    middle_name,
                    last_name,

                    address,
                    permanent_address,
                    date_of_birth,

                    grade,
                    roll_no
                }

                new Helper().mAddHelper("student", content).then((docs) => {
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

    deleteStudent(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const id = req.body.id;

                new Helper().mDeleteHelper("student", id).then((docs) => {
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

    updateStudent(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const {
                    id,
                    first_name,
                    middle_name,
                    last_name,

                    address,
                    permanent_address,
                    date_of_birth,

                    grade,
                    roll_no
                } = req.body;

                const content = {
                    first_name,
                    middle_name,
                    last_name,

                    address,
                    permanent_address,
                    date_of_birth,

                    grade,
                    roll_no
                }

                new Helper().mUpdateHelper("student", id, content).then((docs) => {
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

    getAllStudent(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                new Helper().mGetData("student").then((docs) => {
                    res.send({
                        "data": docs,
                        "message": `Successfully read all data from  firestore`,
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

    getSingleStudent(req: functions.Request, res: functions.Response) {
        try {
            const id = req.body.id;

            new Helper().mGetData("student", id).then((docs) => {
                res.send({
                    "data": docs,
                    "message": `Successfully Read single student ${id} in firestore`,
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