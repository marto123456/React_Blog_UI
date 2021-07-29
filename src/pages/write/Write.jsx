import "./Write.css"

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src={process.env.PUBLIC_URL + "/assets/img/accountbgc.jpg"}
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">Add Image</label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            cols="50"
            rows="100"
            placeholder="write post"
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
