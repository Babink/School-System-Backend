// import * as functions from "firebase-functions";
import * as admin from "firebase-admin";


export class Helper {
    async mAddHelper(collection_name: string, content: Object): Promise<Object> {
        const db: FirebaseFirestore.Firestore = admin.firestore();

        await db.collection(collection_name).add(content);

        const mResult: Object = {
            "message_from": "Helper",
            "message": "Successfully added to firestore",
            "status": "OK"
        }

        return mResult;
    }

    async mDeleteHelper(collection_name: string, id: string): Promise<Object> {
        const db: FirebaseFirestore.Firestore = admin.firestore();

        await db.collection(collection_name).doc(id).delete();

        const mResult: Object = {
            "message_from": "Helper",
            "message": `Successfull delete item ${id} `
        }

        return mResult;
    }

    async mUpdateHelper(collection_name: string, id: string, content: Object): Promise<Object> {
        const db: FirebaseFirestore.Firestore = admin.firestore();

        await db.collection(collection_name).doc(id).set(content, { merge: true })

        const mResult: Object = {
            "message_from": "Helper",
            "message": `Successfull Updated item ${id} `
        }

        return mResult;
    }

    async mGetData(collection_name: string, id: string = ""): Promise<any> {
        const db: FirebaseFirestore.Firestore = admin.firestore()

        if (id.length > 1) {
            const data: FirebaseFirestore.DocumentSnapshot = await db.collection(collection_name).doc(id).get();

            if (!data.exists) {
                return "Data not available"
            }

            return data
        }

        const mAllData: FirebaseFirestore.QuerySnapshot = await db.collection(collection_name).get();
        const mList: Array<Object> = [];

        mAllData.forEach((mDocs: FirebaseFirestore.QueryDocumentSnapshot) => {
            mList.push({
                id: mDocs.id,
                data: mDocs.data()
            })
        })

        return mList;
    }
}