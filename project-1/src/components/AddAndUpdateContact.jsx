import { ErrorMessage, Field, Formik, Form } from "formik";
import Model from "./Model";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactsSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name Is Required"),
  email: Yup.string().email("Invalid Email").required("Email Is Required"),
});

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Succesfully 😎");
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Update Contact Added Succesfully 😎");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactsSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4 ">
            <div className="flex felx-col gap-1 rounded-lg font-bold">
              <label htmlFor="name">Name</label>
              <Field
                name="name"
                className=" h-10 border rounded-lg font-semibold "
              />
              <div className="text-red-600 text-xs">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex felx-col gap-1 rounded-lg font-bold">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                className=" h-10 border rounded-lg font-semibold"
              />
              <div className="text-red-600 text-xs">
                <ErrorMessage name="email" />
              </div>
            </div>

            <button className="bg-lime-500 hover:bg-lime-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Model>
    </div>
  );
};

export default AddAndUpdateContact;
