import React, {useEffect} from "react";
import {api} from "../api";
import {useState} from "react";
import {useHistory, useParams} from "react-router-dom";

const PostForm = (props) => {
    const params = useParams();
    const history = useHistory();
    const [post, setPost] = useState({
        title: "",
        content: "",
    });
    const [hata, setHata] = useState("");
    const onInputChange = (event) => {
        setPost({...post, [event.target.name]: event.target.value});
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setHata("");

        if (props.post?.title) {
            api()
                .put(`/posts/${params.id}`, post)
                .then((response) => {
                    console.log(response);
                    history.push(`/post/${params.id}`);
                });
        } else {
            api()
                .post("/posts", post)
                .then((response) => {
                    history.push("/");
                })
                .catch((err) => {
                    setHata("Hata oluştu.");
                });
        }
    };

    useEffect(() => {
        if (props.post?.title && props.post?.content) setPost(props.post);
    }, [props.post]);

    return (
        <React.Fragment>
            {hata && (
                <div className="ui error message">
                    <div className="content">
                        <div className="header">Hata</div>
                        <p>{hata}</p>
                    </div>
                </div>
            )}
            <div className="ui form">
                <div className="field">
                    <input
                        value={post.title}
                        onChange={onInputChange}
                        name="title"
                        placeholder="Başlık"
                    />
                </div>
                <div className="field">
          <textarea
              value={post.content}
              onChange={onInputChange}
              name="content"
              placeholder="Yazı içeriği"
              rows="3"
          ></textarea>
                </div>
                <button
                    onClick={onFormSubmit}
                    type="submit"
                    className="ui primary button"
                >
                    Submit
                </button>
                <button onClick={()=>history.push(`/post/${params.id}`)} type="submit" className="ui button">
                    Reset
                </button>
            </div>
        </React.Fragment>
    );
};
export default PostForm;
