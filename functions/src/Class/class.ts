import * as functions from "firebase-functions";
import { Helper } from "../Helper/helper";

const cors = require("cors")({ origin: true })

export class Classe {
    addClasses(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const {
                    class_no,
                    section,
                    class_teacher,
                    total_period,
                    first_period,
                    second_period,
                    third_period,
                    fourth_period,
                    fifth_period,
                    sixth_period,
                    seventh_period,
                    eighth_period,
                } = req.body;

                const obj = {
                    class_no,
                    section,
                    class_teacher,
                    total_period,
                    first_period,
                    second_period,
                    third_period,
                    fourth_period,
                    fifth_period,
                    sixth_period,
                    seventh_period,
                    eighth_period,
                }

                new Helper().mAddHelper("class", obj).then((docs) => {
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
                    message: "Error while connecting to firestore database",
                    error: e,
                    status: "BAD"
                })
            }
        })
    }

    deleteClasses(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const id = req.body.id;

                new Helper().mDeleteHelper("class", id).then((docs) => {
                    res.send({
                        "data": docs,
                        "message": `Successfully delete class ${id}`
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
                    message: "Error while connecting to firestore database",
                    error: e,
                    status: "BAD"
                })
            }
        })
    }

    updateClasses(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const {
                    id,
                    class_no,
                    section,
                    class_teacher,
                    total_period,
                    first_period,
                    second_period,
                    third_period,
                    fourth_period,
                    fifth_period,
                    sixth_period,
                    seventh_period,
                    eighth_period,
                } = req.body;

                const obj = {
                    class_no,
                    section,
                    class_teacher,
                    total_period,
                    first_period,
                    second_period,
                    third_period,
                    fourth_period,
                    fifth_period,
                    sixth_period,
                    seventh_period,
                    eighth_period,
                }

                new Helper().mUpdateHelper("class", id, obj).then((docs) => {
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
                    message: "Error while connecting to firestore database",
                    error: e,
                    status: "BAD"
                })
            }
        })
    }

    getAllClasses(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                new Helper().mGetData("class").then((docs) => {
                    res.send({
                        "status": "success",
                        "message_from": "controller",
                        "message": `successfully Get all class`,
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
                    message: "Error while connecting to firestore database",
                    error: e,
                    status: "BAD"
                })
            }
        })
    }

    getClass(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const id = req.body.id;

                new Helper().mGetData("class", id).then((docs) => {
                    res.send({
                        "status": "success",
                        "message_from": "controller",
                        "message": `successfully get class of id => ${id}`,
                        "data": docs,
                    })
                })
                    .catch((e) => {
                        res.send({
                            "status": `Failed to retrive class of => ${id}`,
                            "message_from": "controller",
                            "error": e
                        })
                    })
            }
            catch (e) {
                res.send({
                    message: "Error while connecting to firestore database",
                    error: e,
                    status: "BAD"
                })
            }
        })
    }
}