export default function PrimaryButton({ type = 'submit', className = '', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn bg-gradient-primary ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
