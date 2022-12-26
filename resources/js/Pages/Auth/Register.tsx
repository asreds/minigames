import React from 'react';
import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });
    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);
    const onHandleChange = event => {
        setData(event.target.name, event.target.type === "checkbox" ? event.target.checked : event.target.value);
    };
    const submit = e => {
        e.preventDefault();
        //@ts-ignore
        post(route("register"));
    };
    return (
        <GuestLayout title="Register">
            <Head title="Register" />

            <form onSubmit={submit} className={Object.keys(errors).length > 0 ? "was-validated" : ""}>
                <div className="input-group input-group-outline my-3">
                    <label className="form-label">Name</label>

                    <TextInput id="name" name="name" value={data.name} className="form-control" autoComplete="name" isFocused={true} handleChange={onHandleChange} />

                    <InputError message={errors.name} />
                </div>

                <div className="input-group input-group-outline my-3">
                    <label className="form-label">Email</label>

                    <TextInput id="email" name="email" value={data.email} className="form-control" autoComplete="email" isFocused={true} handleChange={onHandleChange} />

                    <InputError message={errors.email} />
                </div>

                <div className="input-group input-group-outline my-3">
                    <label className="form-label">Password</label>

                    <TextInput
                        id="password"
                        name="password"
                        value={data.password}
                        className="form-control"
                        autoComplete="password"
                        isFocused={true}
                        handleChange={onHandleChange}
                        type="password"
                    />

                    <InputError message={errors.password} />
                </div>

                <div className="input-group input-group-outline my-3">
                    <label className="form-label">Confirm Password</label>

                    <TextInput
                        id="password_confirmation"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="form-control"
                        autoComplete="password_confirmation"
                        isFocused={true}
                        handleChange={onHandleChange}
                        type="password"
                    />

                    <InputError message={errors.password_confirmation} />
                </div>

                <div className="text-center">
                    <PrimaryButton className="w-100 my-4 mb-2" processing={processing}>
                        Register
                    </PrimaryButton>
                </div>

                <div className="flex items-center justify-end mt-4">
                    Already registered?{" "}
                    <Link
                        /* @ts-ignore */
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Login
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
