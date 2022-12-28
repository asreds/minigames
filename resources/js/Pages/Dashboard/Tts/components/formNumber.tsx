import React from "react";
import TextInput from "@/Components/TextInput";

type NumberProps = {
    setCount: Function;
};

type CountData = {
    x: number;
    y: number;
};

function FormNumber({ setCount }: NumberProps) {
    const [count, setCountNumber] = React.useState<CountData>({ x: 0, y: 0 });

    const handleChange = (
        type: string,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        let tempCount: any = count;
        tempCount[type] = Number(e.target.value);
        setCountNumber({ ...tempCount });
    };

    return (
        <form className="row row-cols-lg-auto g-3 align-items-center">
            <div className="col-12">
                <div className="input-group input-group-outline my-3">
                    <label className="form-label">X</label>
                    <TextInput
                        id="number_x"
                        type="number"
                        name="number_x"
                        value={count.x}
                        className="form-control"
                        autoComplete="current-password"
                        handleChange={(e) => {
                            handleChange("x", e);
                        }}
                    />
                </div>
            </div>
            <div className="col-12">
                <div className="input-group input-group-outline my-3">
                    <label className="form-label">Y</label>
                    <TextInput
                        id="number_y"
                        type="number"
                        name="number_y"
                        value={count.y}
                        className="form-control"
                        autoComplete="current-password"
                        handleChange={(e) => {
                            handleChange("y", e);
                        }}
                    />
                </div>
            </div>
            <div className="col-12 col__btn-submit--number">
                <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => setCount(count)}
                >
                    Proses
                </button>
            </div>
        </form>
    );
}

export default FormNumber;
