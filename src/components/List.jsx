import Note from "./Note.jsx";
import SinNotes from "./SinNotes.jsx";

export default function List({ notes, setNotes, filterStatus, filteredNotes }) {
    return (
        <div className="w-3/5">
            {filteredNotes.length === 0 || notes.length === 0 ? (
                <SinNotes />
            ) : (
                notes &&
                notes.map(({ title, id, complete }) => {
                    if (complete == filterStatus || filterStatus === "") {
                        return (
                            <Note
                                title={title}
                                key={id}
                                id={id}
                                complete={complete}
                                notes={notes}
                                setNotes={setNotes}
                            />
                        );
                    }
                })
            )}
        </div>
    );
}
