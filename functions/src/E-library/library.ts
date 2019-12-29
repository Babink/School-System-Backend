import * as functions from "firebase-functions";
import { Helper } from "../Helper/helper"

const cors = require("cors")({ origin: true })

export class Librarys {
    addBookToLibrary(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const {
                    book_name,
                    book_title,
                    book_description,
                    book_url,
                    book_img_url,
                    category
                } = req.body;

                const mContent = {
                    book_name,
                    book_title,
                    book_description,
                    book_url,
                    book_img_url,
                    category
                }


                new Helper().mAddHelper("e-library", mContent).then((docs) => {
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
                    "error": e,
                    "message": "While connecting to firestore",
                })
            }
        })
    }

    deleteBook(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const { id } = req.body;
                new Helper().mDeleteHelper("e-library", id).then((docs) => {
                    res.send({
                        "data": docs,
                        "message": `Successfully deleted book ${id} in firestore`,
                        "status": "Success"
                    })
                }).catch((e) => {
                    res.send({
                        error: e,
                        "message": "Error while storing data in firestore"
                    })
                })
            }
            catch (e) {
                res.send({
                    "error": e,
                    "message": "While connecting to firestore",
                })
            }
        })
    }

    updateBook(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const {
                    id,
                    book_name,
                    book_title,
                    book_description,
                    book_url,
                    book_img_url,
                    category
                } = req.body;


                const content = {
                    book_name,
                    book_title,
                    book_description,
                    book_url,
                    book_img_url,
                    category
                }
                new Helper().mUpdateHelper("e-library", id, content).then((docs) => {
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
            }
            catch (e) {
                res.send({
                    "error": e,
                    "message": "While connecting to firestore",
                })
            }
        })
    }

    getAllBook(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                new Helper().mGetData("e-library").then((docs) => {
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
            }
            catch (e) {
                res.send({
                    "error": e,
                    "message": "While connecting to firestore",
                })
            }
        })
    }

    getSingleBook(req: functions.Request, res: functions.Response) {
        cors(req, res, () => {
            try {
                const id = req.body.id;

                new Helper().mGetData("e-library", id).then((docs) => {
                    res.send({
                        "data": docs,
                        "message": `Successfully Read book of  ${id} in firestore`,
                        "status": "Success"
                    })
                }).catch((e) => {
                    res.send({
                        error: e,
                        "message": "Error while storing data in firestore"
                    })
                })
            }
            catch (e) {
                res.send({
                    "error": e,
                    "message": "While connecting to firestore",
                })
            }
        })
    }
}