import React from "react";
import { useFormik } from "formik";
import yup from yup

const AddMenuForm = () => {

    const validationSchema = yup.object({
        reason: yup.string().required("Reason is required")
    });

    const formik = useFormik({
        initialValues: {
            reason: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setIsSubmitting(true);
            const data = new FormData();
            data.append("status", type);
            data.append("decline_reason", values.reason);
            dispatch(toggleFundrequestStatus(id, data, onSuccess, onError))
        },
    });
    return (
        <div className="add from">
            <form></form>
        </div>
    );
};

export default AddMenuForm;
