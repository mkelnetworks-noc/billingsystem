const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null; // Ensure modal only renders when open

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-2/3">
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button onClick={onClose} className="text-red-500">X</button>
                </div>
                <div className="mt-4">{children}</div>
            </div>
        </div>
    );
};

export default Modal;