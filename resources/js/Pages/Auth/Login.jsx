import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: '',
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route('login'));
  };
  return (
    <GuestLayout title="Sign In">
      <Head title="Log in" />

      {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

      <form onSubmit={submit} className={Object.keys(errors).length > 0 ? 'was-validated' : ''}>
        <div className="input-group input-group-outline my-3">
          <label className="form-label">Email</label>

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="form-control"
            autoComplete="username"
            isFocused={true}
            handleChange={onHandleChange}
          />

          <InputError message={errors.email} />
        </div>

        <div className="input-group input-group-outline my-3">
          <label className="form-label">Password</label>

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="form-control"
            autoComplete="current-password"
            handleChange={onHandleChange}
          />
          <InputError message={errors.password} />
        </div>


        <div className="form-check form-switch d-flex align-items-center mb-3">
          <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />
          <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe">Remember me</label>
        </div>


        <div className="flex items-center justify-end mt-4">
          {canResetPassword && (
            <Link
              href={route('password.request')}
              className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Forgot your password?
            </Link>
          )}

          <div className="text-center">
            <PrimaryButton className="w-100 my-4 mb-2" processing={processing}>
              Log in
            </PrimaryButton>
          </div>
        </div>
        <div className="flex items-center justify-end mt-4">
          Don't have account? {' '} 
          <Link
            href={route('register')}
            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </Link>
        </div>
      </form>

    </GuestLayout>
  );
}
