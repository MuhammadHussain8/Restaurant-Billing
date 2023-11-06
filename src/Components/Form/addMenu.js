import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./form.css"

const AddMenuForm = () => {

    const validationSchema = Yup.object({
        reason: Yup.string().required("Reason is required")
    });

    const formik = useFormik({
        initialValues: {
            title: "",
            desc: "",
            image: "",
            price: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {

        },
    });
    return (
        <div className="add-from">
            <div className="form-header">
                <p>Add New Dish Form</p>
                <span>X</span>
            </div>
            <form>
                <input type="text" name="title" value={formik?.values?.title} placeholder="Name of the Dish" />
                <input type="file" name="image" value={formik?.values?.image} placeholder="image" />
                <input type="text" name="desc" value={formik?.values?.desc} placeholder="Desc Full/Half" />
                <input type="number" name="Price" value={formik?.values?.price} placeholder="Price of the Dish" />
                <div className="form-btns">
                    <button type="reset"> Reset </button>
                    <button type="submit"> Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddMenuForm;
