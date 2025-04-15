type ToDoFormProps = {
    isOpen: boolean;
    onClose: () => void;
}

export function ToDoForm({ isOpen, onClose }: ToDoFormProps) {

    if (!isOpen) return null;

    return (
        <div className="inset-0 z-90 bg-black/50 w-screen h-screen">
            <div className="bg-white rounded-xl w-1/3 h-fit">
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
}