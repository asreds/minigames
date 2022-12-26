import React from "react";
import TextInput from "@/Components/TextInput";

export interface IFormQuestionsProps {}

export function FormQuestions(props: IFormQuestionsProps) {
    const [questionForm, setQuestionForm] = React.useState([]);

    const handleAdd = () => {
        questionForm.push({
            name: `question_${questionForm.length + 1}`,
        });
        setQuestionForm([...questionForm]);
    };

    const handleChange = (e) => {
        console.log(e);
    };

    const generateInput = () => {
        return questionForm.map((x, y) => {
            return (
                <div className="input-group input-group-outline my-3" key={x.name}>
                    <label className="form-label">Pertanyaan {y + 1}</label>
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value=""
                        className="form-control"
                        autoComplete="current-password"
                        handleChange={handleChange}
                    />
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
