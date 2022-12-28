import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Questions from "./components/Questions";
import FormNumber from "./components/FormNumber";
import Box from "./components/Box";

type CountData = {
    x: number;
    y: number;
};

const TTSAdd = ({ auth }) => {
    const [countBox, setCountBox] = React.useState<CountData>({ x: 0, y: 0 });
    const TtsSchema =  yup.object().shape({
        title: yup.string().required("Judul wajib di isi")
    });

    const formik = useFormik({
        validationSchema: TtsSchema,
        initialValues: {
            title: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <AuthenticatedLayout
            auth={auth}
            title="Teka-Teki Singkat"
            breadcrumbTitle="Teka-Teki Singkat"
        >
            <div className="container-fluid py-4">
                <div className="row mb-4">
                    <div className="col-lg-12 col-md-12 mb-md-0 mb-12">
                        <div className="card">
                            <div className="card-header pb-0">
                                <div className="row">
                                    <div className="col-lg-6 col-7" />
                                    <div className="col-lg-6 col-5 my-auto text-end">
                                        <div className="dropdown float-lg-end pe-4">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                // @ts-ignore
                                                onClick={() => formik.handleSubmit()}
                                            >
                                                Simpan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <FormNumber setCount={setCountBox} />
                            <Box count={countBox} formik={formik} />
                            <Questions formik={formik}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default TTSAdd;
