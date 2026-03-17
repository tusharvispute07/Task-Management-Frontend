export default function Modal({ children }) {
    return (
        <div className="backdrop-blur-md bg-gray-900/20 fixed inset-0 z-50">
            <div className="max-w-3xl w-full h-auto max-h-[85vh] bg-white rounded-2xl m-auto fixed inset-0 p-6">
                {children}
            </div>
        </div>

    )
}