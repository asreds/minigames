import React, { useRef } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/inertia-react";
import { Transition } from "@headlessui/react";
export default function UpdatePasswordForm({ className }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();
    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: "",
        password: "",
        password_confirmation: ""
    });
    const updatePassword = e => {
        e.preventDefault();
        // @ts-ignore
        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current.focus();
                }
                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current.focus();
                }
            }
        });
    };
    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Update Password</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Ensure your account is using a long, random password to stay secure.
                </p>
            </header>
            <div className="row">
                <div className="col-4">
                    <form onSubmit={updatePassword}>
                        <div className="input-group input-group-outline  my-3">
                            <label className="form-label">Current Password</label>

                            <TextInput
                                id="current_password"
                                ref={currentPasswordInput}
                                type="password"
                                name="current_password"
                                className="form-control"
                                autoComplete="name"
                                handleChange={e => setData("current_password", e.target.value)}
                                autofocus
                            />

                            <InputError message={errors.current_password} />
                        </div>

                        <div className="input-group input-group-outline  my-3">
                            <label className="form-label">New Password</label>

                            <TextInput
                                id="password"
                                ref={passwordInput}
                                type="password"
                                name="password"
                                className="form-control"
                                autoComplete="password"
                                handleChange={e => setData("password", e.target.value)}
                                autofocus
                            />

                            <InputError message={errors.password} />
                        </div>

                        <div className="input-group input-group-outline  my-3">
                            <label className="form-label">Confirm Password</label>

                            <TextInput
                                id="password_confirmation"
                                ref={passwordInput}
                                type="password"
                                name="password_confirmation"
                                className="form-control"
                                autoComplete="password_confirmation"
                                handleChange={e => setData("password_confirmation", e.target.value)}
                                autofocus
                            />

                            <InputError message={errors.password_confirmation} />
                        </div>

                        <div className="flex items-center gap-4">
                            <PrimaryButton processing={processing}>Save</PrimaryButton>

                            <Transition
                                show={recentlySuccessful}
                                enterFrom="opacity-0"
                                leaveTo="opacity-0"
                                className="transition ease-in-out"
                            >
                                <p className="text-sm text-gray-600">Saved.</p>
                            </Transition>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
