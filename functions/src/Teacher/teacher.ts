import * as functions from "firebase-functions";
import { Helper } from "../Helper/helper"

const cors = require('cors')({ origin: true });


export class Teacher {
    addTeacher(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const { first_name,
                    middle_name,
                    last_name,

                    date_of_birth,
                    address,
                    permanent_address,

                    contact_number,
                    email_address,

                    expertise
                } = req.body;

                const content = {
                    first_name,
                    middle_name,
                    last_name,

                    date_of_birth,
                    address,
                    permanent_address,

                    contact_number,
                    email_address,

                    expertise
                }

                new Helper().mAddHelper("teacher", content).then((docs) => {
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

    deleteTeacher(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {

                const id = req.body.id;

                new Helper().mDeleteHelper("teacher", id).then((docs) => {
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

    updateTeacher(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const {
                    id,
                    first_name,
                    middle_name,
                    last_name,

                    date_of_birth,
                    address,
                    permanent_address,

                    contact_number,
                    email_address,

                    expertise
                } = req.body;

                const content = {
                    first_name,
                    middle_name,
                    last_name,

                    date_of_birth,
                    address,
                    permanent_address,

                    contact_number,
                    email_address,

                    expertise
                }

                new Helper().mUpdateHelper("teacher", id, content).then((docs) => {
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

    getAllTeacher(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                new Helper().mGetData("teacher").then((docs) => {
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


    getSingleTeacher(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const id = req.body.id;

                new Helper().mGetData("teacher", id).then((docs) => {
                    res.send({
                        "data": docs,
                        "message": `Successfully get ${id} from firestore`,
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
}
