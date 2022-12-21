import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/inertia-react';
import { Transition } from '@headlessui/react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(e)
        patch(route('profile.update'));
    };
    console.log(errors)
    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>
            <div class="row">
                <div className='col-4'>
                    <form onSubmit={submit} className={Object.keys(errors).length > 0 ? 'was-validated' : ''} >

                        <div className="input-group input-group-outline is-filled my-3">
                            <label className="form-label">Name</label>

                            <TextInput
                                id="name"
                                type="name"
                                name="name"
                                value={data.name}
                                className="form-control"
                                autoComplete="name"
                                handleChange={(e) => setData('name', e.target.value)}
                                autofocus
                            />

                            <InputError message={errors.name} />
                        </div>
                        <div className="input-group input-group-outline is-filled my-3">
                            <label className="form-label">Email</label>

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="form-control"
                                autoComplete="name"
                                handleChange={(e) => setData('email', e.target.value)}
                            />

                            <InputError message={errors.name} />
                        </div>

                        {mustVerifyEmail && user.email_verified_at === null && (
                            <div>
                                <p className="text-sm mt-2 text-gray-800">
                                    Your email address is unverified.
                                    <Link
                                        href={route('verification.send')}
                                        method="post"
                                        as="button"
                                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Click here to re-send the verification email.
                                    </Link>
                                </p>

                                {status === 'verification-link-sent' && (
                                    <div className="mt-2 font-medium text-sm text-green-600">
                                        A new verification link has been sent to your email address.
                                    </div>
                                )}
                            </div>
                        )}

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
