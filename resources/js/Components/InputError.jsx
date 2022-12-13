export default function InputError({ message, className = '' }) {
    console.log(message)
    return message ? <div className="invalid-feedback">{message}</div> : null;
}
