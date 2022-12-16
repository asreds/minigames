export default function InputError({ message, className = '' }) {
    return message ? <div className="invalid-feedback">{message}</div> : null;
}
