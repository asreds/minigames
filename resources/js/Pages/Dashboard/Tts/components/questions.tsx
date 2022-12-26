import * as React from "react";
import { FormQuestions } from "./formQuestions";

export interface IAppProps {}

export default function Questions(props: IAppProps) {
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
                            <div class="container-fluid py-4 container-fluid__question">
                                <div class="row">
                                    <div class="col col-horizontal__line">
                                        <h1 className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                                            {" "}
                                            Mendatar
                                        </h1>
                                        <FormQuestions />
                                    </div>
                                    <div class="col">
                                        {" "}
                                        <h1 className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">
                                            {" "}
                                            Menurun
                                        </h1>
                                        <FormQuestions />
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
