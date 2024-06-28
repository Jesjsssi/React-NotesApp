import React from 'react';

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    // initialize state
    this.state = {
      title: '',
      body: '',
      charLimit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const title = event.target.value;
    if (title.length <= this.state.charLimit) {
      this.setState({ title });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState({ body: event.target.value });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
    this.setState({ title: '', body: '' });
  }

  render() {
    return (
      <div className="note-input-container">
        <div className="note-input-image">
          <img src="/React-NotesApp/notes.png" alt="Illustration" />
        </div>
        <form className="note-input" onSubmit={this.onSubmitEventHandler}>
          <div className="note-input__title">
            <input
              type="text"
              placeholder="Judul"
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
            />
            <p className="note-input__title__char-limit">
              Remaining characters: {this.state.charLimit - this.state.title.length}
            </p>
          </div>
          <input
            type="text"
            placeholder="Tulis catatan disini..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <button type="submit">Tambah</button>
        </form>
      </div>
    );
  }
}

export default NotesInput;
