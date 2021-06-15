import React, {useState} from "react";

const COMMENT_BODY_INITIAL = {
    display_name: "",
    body: "",
};

const CommentForm = (props) => {
    const [postCommentBody, setPostCommentBody] = useState(COMMENT_BODY_INITIAL);

    const handleOnChange = (event) => {
        setPostCommentBody({
            ...postCommentBody,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <React.Fragment>
            <h3>Yorum Yaz</h3>

            <form
                onSubmit={(event) => {
                    //   event.preventDefault();
                    props.handlePostCommentSubmit(event, postCommentBody);
                    setPostCommentBody(COMMENT_BODY_INITIAL);
                }}
                className="ui form"
            >
                <div className="field">
                    <input
                        name="display_name"
                        value={postCommentBody.display_name}
                        onChange={handleOnChange}
                        placeholder="Adınız"
                    />
                </div>
                <div className="field">
          <textarea
              name="body"
              value={postCommentBody.body}
              onChange={handleOnChange}
              placeholder="Yorumu yaz"
              rows="3"
          ></textarea>
                </div>
                <button type="submit" className="ui button">
                    Submit
                </button>
            </form>
        </React.Fragment>
    );
};

export default CommentForm;
