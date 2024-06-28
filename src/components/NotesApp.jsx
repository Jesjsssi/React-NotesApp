import React from 'react';
import NotesList from './NotesList';
import { getInitialData, showFormattedDate } from "../utils/index";
import NotesInput from './NotesInput';
import AchieveList from './AchieveList';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchQuery: '',
      filteredNotes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAchieveHandler = this.onAchieveHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes, filteredNotes: notes });
  }

  onAchieveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          achieved: !note.achieved,
        };
      }
      return note;
    });
    this.setState({ notes, filteredNotes: notes });
  }

  onAddContactHandler({ title, body }) {
    this.setState((prevState) => {
      const newNote = {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: showFormattedDate(new Date()),
      };
      const newNotes = [...prevState.notes, newNote];
      return {
        notes: newNotes,
        filteredNotes: newNotes,
      };
    });
  }

  onSearchChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  onSearchHandler() {
    const filteredNotes = this.state.notes.filter(note =>
      note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );
    this.setState({ filteredNotes });
  }

  render() {
    const { filteredNotes } = this.state;

    return (
      <div className="note-appbody">
        <div className="note-app__header">
          <h1>Buat Catatan</h1>
          <div className="note-search">
            <input
              type="text"
              placeholder="Cari judul..."
              value={this.state.searchQuery}
              onChange={this.onSearchChange}
            />
            <button onClick={this.onSearchHandler}>Search</button>
          </div>
        </div>

        <NotesInput addContact={this.onAddContactHandler} />

        <h2>Catatan Aktif</h2>
        <NotesList notes={filteredNotes.filter((note) => !note.achieved)} onDelete={this.onDeleteHandler} onAchieve={this.onAchieveHandler} />

        <h2>Arsip</h2>
        <AchieveList notes={filteredNotes.filter((note) => note.achieved)} onDelete={this.onDeleteHandler} onAchieve={this.onAchieveHandler} />
      </div>
    );
  }
}

export default NotesApp;
