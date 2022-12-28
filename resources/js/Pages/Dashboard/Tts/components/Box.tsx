import React from "react";
import { FormikProps } from "formik";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

interface IValues {
    title?: string;
}

type Props = {
    count: any;
    formik: FormikProps<IValues>;
};

function Box({ count, formik }: Props) {
    console.log(formik.errors)
    const [answerData, setAnswerData] = React.useState({});
    const handleSelectBox = (x: number, y: number) => {
        const tempData = answerData;
        tempData[`${x}_${y}`] = {
            number: 0,
            value: "",
        };
        setAnswerData({ ...tempData });
    };

    const setAnswer = (type: string, name: string, values: string) => {
        const tempAnswer = formik.values[name] ? JSON.parse(formik.values[name]) : {}
        tempAnswer[type] = values;
        formik.setFieldValue(name, JSON.stringify(tempAnswer));
    };

    const generateBoxX = (y: number) => {
        return [...Array(count.x)].map((x, idx) => {
            return (
                <td key={`x-${idx}`} className="answer-container">
                    {answerData[`${idx}_${y}`] ? (
                        <>
                            <input
                                className="form-control answer-container__form-answer text-center"
                                onChange={(e) =>
                                    setAnswer('answer', `${idx}_${y}`, e.target.value)
                                }
                            />
                            <input
                                className="form-control answer-container__form-number text-center"
                                onChange={(e) =>
                                    setAnswer('number', `${idx}_${y}`, e.target.value)
                                }
                            />
                        </>
                    ) : (
                        <button
                            type="button"
                            className="btn btn-light btn__answer"
                            onClick={() => handleSelectBox(idx, y)}
                        ></button>
                    )}
                </td>
            );
        });
    };
    const generateBox = () => {
        return [...Array(count.y)].map((y, idx) => {
            return <tr key={`y-${idx}`}>{generateBoxX(idx)}</tr>;
        });
    };

    return (
        <div className={Object.keys(formik.errors).length > 0 ? "was-validated" : ""}>
            <div className="input-group input-group-outline my-3">
                <label className="form-label">Title / Tema</label>
                <TextInput
                    id="title"
                    type="next"
                    name="title"
                    value={formik.values.title}
                    className="form-control"
                    autoComplete="current-password"
                    handleChange={(e) => {
                        formik.setFieldValue("title", e.target.value);
                    }}
                />
                <InputError message={formik.errors.title} />
            </div>
            <table className="table-answer">
                <tbody>{generateBox()}</tbody>
            </table>
        </div>
    );
}

export default Box;
