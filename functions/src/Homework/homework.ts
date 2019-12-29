import * as functions from "firebase-functions";

import { Helper } from "../Helper/helper"

export class Homework {
    addHomework(req: functions.Request, res: functions.Response) {
        try {
            const {
                title,
                description,
                subject,
                class_no,
                assigned_by
            } = req.body;

            const content: Object = {
                title,
                description,
                subject,
                class_no,
                assigned_by,
            }

            new Helper().mAddHelper("homework", content).then((docs) => {
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
                "message": "Error while Connecting to database"
            })
        }
    }

    deleteHomework(req: functions.Request, res: functions.Response) {
        try {
            const id = req.body.id;

            new Helper().mDeleteHelper("homework", id).then((docs) => {
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
                "message": "Error while Connecting to database"
            })
        }
    }

    updateHomework(req: functions.Request, res: functions.Response) {
        try {
            const {
                id,
                title,
                description,
                subject,
                class_no,
                assigned_by
            } = req.body;

            const content: Object = {
                title,
                description,
                subject,
                class_no,
                assigned_by,
            }

            new Helper().mUpdateHelper("homework", id, content).then((docs) => {
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
                "message": "Error while Connecting to database"
            })
        }
    }

    async mGetAllHomework(req: functions.Request, res: functions.Response) {
        try {
            const result: Promise<Array<Object>> = new Helper().mGetData("homework");

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

    async mGetSingleHomework(req: functions.Request, res: functions.Response) {
        try {
            const id = req.body.id;

            const result: Promise<FirebaseFirestore.DocumentSnapshot> = new Helper().mGetData("homework", id);


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