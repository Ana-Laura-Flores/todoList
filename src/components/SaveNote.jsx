export default function SaveNote({ addNote, isDisabled }) {
    return (
        <div className="flex flex-col items-center">
            <button
                type="submit"
                className={`m-5 w-28 border-none  ${
                    isDisabled
                        ? "bg-slate-200 hover:bg-slate-200 hover:text-black"
                        : "bg-violet-200 hover:bg-violet-500 hover:text-white"
                } `}
                onClick={addNote}
                disabled={isDisabled}
            >
                Send
            </button>
        </div>
    );
}
