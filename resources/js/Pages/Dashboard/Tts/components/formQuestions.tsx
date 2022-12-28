import React from "react";
import { FormikProps } from "formik";
import TextInput from "@/Components/TextInput";

type Props = {
    formik: FormikProps<any>;
    type: string,
};


export function FormQuestions({formik, type}: Props) {
    const [questionForm, setQuestionForm] = React.useState([]);

    const handleAdd = () => {
        questionForm.push({
            name: `question_${questionForm.length + 1}`,
        });
        setQuestionForm([...questionForm]);
    };

    const setQuestion = (type: string, name: string, values: string) => {
        const tempAnswer = formik.values[name] ? JSON.parse(formik.values[name]) : {}
        tempAnswer[type] = values;
        formik.setFieldValue(name, JSON.stringify(tempAnswer));
    };

    const generateInput = () => {
        return questionForm.map((x, y) => {
            return (
                <div className="container" key={x.name}>
                    <div className="row">
                        <div className="col-lg-2">
                            <div
                                className="input-group input-group-outline my-3"
                                key={x.name}
                            >
                                <label className="form-label">
                                    Number {y + 1}
                                </label>
                                <TextInput
                                    id="number"
                                    type="number"
                                    name="number"
                                    value=""
                                    className="form-control"
                                    autoComplete="current-password"
                                    handleChange={(e) => setQuestion("number", `${x.name}_${type}`, e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div
                                className="input-group input-group-outline my-3 col-lg-10∏"
                                key={x.name}
                            >
                                <label className="form-label">
                                    Pertanyaan {y + 1}
                                </label>
                                <TextInput
                                    id="question"
                                    type="text"
                                    name="question"
                                    value=""
                                    className="form-control"
                                    autoComplete="current-password"
                                    handleChange={(e) => setQuestion("question", `${x.name}_${type}`, e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <>
            {generateInput()}
            <button
                type="button"
                className="btn btn-info"
                onClick={() => handleAdd()}
            >
                +
            </button>
        </>
    );
}
