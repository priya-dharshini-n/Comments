import "./styles.css";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [emails, setEmails] = useState([]);
  const [comments, setComments] = useState([]);
  const [viewList, setViewList] = useState(false);

  //  useEffect(() => {}); //mount

  return (
    <div className="App">
      <div
        className="circle"
        // styles={{
        //   background: "220000",
        //   height: "auto",
        //   width: "100%",
        //   borderRadius: "25%",
        //   border: "2px solid",
        //   display: "flex",
        // }}
      >
        Message Forum
      </div>
      <h2>Email</h2>

      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <h2>Comments</h2>
      <input
        id="comments"
        type="email"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <br />

      <button
        type="submit"
        onClick={() => {
          setViewList(true);
          setComments([...comments, comment]);
          setEmails([...emails, email]);
        }}
      >
        Submit
      </button>
      {viewList ? (
        <>
          <h4>Email</h4>
          <li title="Email">{emails}</li>
          <h4>Comments</h4>
          <li title="Comments">{comments}</li>
        </>
      ) : null}
    </div>
  );
}
