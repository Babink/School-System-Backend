import * as functions from "firebase-functions";
import { Helper } from "../Helper/helper";

const cors = require("cors")({ origin: true })

export class Events {
    addEvent(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const {
                    event_type,
                    event_date,
                    event_name,
                    event_title,
                    total_participant,
                    event_description,
                    event_venue,
                    start_time,
                    end_time,
                    img_url
                } = req.body;

                const content: Object = {
                    event_type,
                    event_date,
                    event_name,
                    event_title,
                    total_participant,
                    event_description,
                    event_venue,
                    start_time,
                    end_time,
                    img_url
                }

                new Helper().mAddHelper("events", content).then((docs) => {
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

    deleteEvent(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const { id } = req.body;

                new Helper().mDeleteHelper("events", id).then((docs) => {
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
        })
    }

    updateEvent(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const { id,
                    event_type,
                    event_date,
                    event_name,
                    event_title,
                    total_participant,
                    event_description,
                    event_venue,
                    start_time,
                    end_time,
                    img_url
                } = req.body;

                const content: Object = {
                    event_type,
                    event_date,
                    event_name,
                    event_title,
                    total_participant,
                    event_description,
                    event_venue,
                    start_time,
                    end_time,
                    img_url
                }

                new Helper().mUpdateHelper("events", id, content).then((docs) => {
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
        })
    }

    getSingleEvent(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const id = req.body.id;

                const result: Promise<FirebaseFirestore.DocumentSnapshot> = new Helper().mGetData("events", id);


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
        })
    }

    getAllEvent(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const result: Promise<Array<Object>> = new Helper().mGetData("events");

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
        })
    }
}