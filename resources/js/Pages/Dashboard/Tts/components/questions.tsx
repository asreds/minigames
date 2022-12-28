import * as React from "react";
import { FormikProps } from "formik";
import { FormQuestions } from "./FormQuestions";

interface IValues {
    title?: string;
}

type Props = {
    formik: FormikProps<IValues>;
};

export default function Questions({formik}: Props) {
    return (
        <div className="container-fluid py-4">
            <div className="row mb-4">
                <div className="col-lg-12 col-md-12 mb-md-0 mb-12">
                    <div className="card">
                        <div className="card-header pb-0">
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <h6>Pertanyaan</h6>
                                    <hr className="line-1" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <div className="container-fluid py-4 container-fluid__question">
                                <div className="row row__question">
                                    <div className="col col-horizontal__line">
                                        <h1 className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                                            {" "}
                                            Mendatar
                                        </h1>
                                        <FormQuestions formik={formik} type="mendatar" />
                                    </div>
                                    <div className="col">
                                        {" "}
                                        <h1 className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                                            {" "}
                                            Menurun
                                        </h1>
                                        <FormQuestions formik={formik} type="menurun" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
