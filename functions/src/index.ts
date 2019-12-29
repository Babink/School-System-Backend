import * as functions from 'firebase-functions';
const admin = require("firebase-admin");
const service = require("../service/service.json");

import { Routine } from "./Routine/routine"
import { Homework } from "./Homework/homework"
import { Events } from "./Event/event";
import { Librarys } from "./E-library/library";
import { Teacher } from "./Teacher/teacher"
import { Subject } from "./Subject/subject"
import { Student } from "./Student/student";
import { Classe } from "./Class/class"

admin.initializeApp({
    credientials: admin.credential.cert(service),
    databaseURL: "https://school-aec46.firebaseio.com"
})

// Routine
export const addRoutine = functions.https.onRequest(new Routine().mAddRoutine);
export const deleteRoutine = functions.https.onRequest(new Routine().mDeleteRoutine);
export const updateRoutine = functions.https.onRequest(new Routine().mUpdateRoutine);
export const getRoutine = functions.https.onRequest(new Routine().mGetSingleRoutine);
export const getAllRoutine = functions.https.onRequest(new Routine().mGetAllRoutine);

// Homework
export const addHomework = functions.https.onRequest(new Homework().addHomework);
export const deleteHomework = functions.https.onRequest(new Homework().deleteHomework);
export const getHomework = functions.https.onRequest(new Homework().mGetSingleHomework);
export const getAllHomework = functions.https.onRequest(new Homework().mGetAllHomework);

// event
export const addEvent = functions.https.onRequest(new Events().addEvent);
export const deleteEvent = functions.https.onRequest(new Events().deleteEvent);
export const updateEvents = functions.https.onRequest(new Events().updateEvent);
export const getEvent = functions.https.onRequest(new Events().getSingleEvent);
export const getAllEvents = functions.https.onRequest(new Events().getAllEvent);

// E-Library
export const addBook = functions.https.onRequest(new Librarys().addBookToLibrary)
export const deleteBook = functions.https.onRequest(new Librarys().deleteBook)
export const updateBook = functions.https.onRequest(new Librarys().updateBook)
export const readAllBook = functions.https.onRequest(new Librarys().getAllBook)
export const readBook = functions.https.onRequest(new Librarys().getSingleBook)

// Teacher
export const addTeacher = functions.https.onRequest(new Teacher().addTeacher);
export const deleteTeacher = functions.https.onRequest(new Teacher().deleteTeacher);
export const updateTeacher = functions.https.onRequest(new Teacher().updateTeacher);
export const getAllTeacher = functions.https.onRequest(new Teacher().getAllTeacher);
export const getTeacher = functions.https.onRequest(new Teacher().getSingleTeacher);

// Subject
export const addSubject = functions.https.onRequest(new Subject().addSubject);
export const deleteSubject = functions.https.onRequest(new Subject().deleteSubject);
export const updateSubject = functions.https.onRequest(new Subject().updateSubject);
export const getAllSubject = functions.https.onRequest(new Subject().getAllSubject);
export const getSubject = functions.https.onRequest(new Subject().getSingleSubject);

// Student
export const addStudent = functions.https.onRequest(new Student().addStudent)
export const deleteStudent = functions.https.onRequest(new Student().deleteStudent);
export const updateStudent = functions.https.onRequest(new Student().updateStudent);
export const getAllStudent = functions.https.onRequest(new Student().getAllStudent);
export const getStudent = functions.https.onRequest(new Student().getSingleStudent);

// Class
export const addClass = functions.https.onRequest(new Classe().addClasses);
export const deleteClass = functions.https.onRequest(new Classe().deleteClasses);
export const updateClass = functions.https.onRequest(new Classe().updateClasses);
export const getAllClass = functions.https.onRequest(new Classe().getAllClasses);
export const getClass = functions.https.onRequest(new Classe().getClass);