import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {Modal, Button} from "semantic-ui-react";
import {api} from "../api";

const DeleteModal = (props) => {
    const [open, setOpen] = useState(false);
    const [hata, setHata] = useState("");
    const show = () => setOpen(true);
    const close = () => setOpen(false);
    const history = useHistory();

    const handleDelete = (id) => {
        api()
            .delete(`/posts/${id}`)
            .then(() => {
                setHata("");
                close();
                history.push("/");
            })
            .catch(() => {
                setHata("Silme esnasında hata oluştu!");
            });
    };

    return (
        <React.Fragment>
            <Button color="red" onClick={show}>
                Delete
            </Button>
            <Modal size="mini" open={open} onClose={close}>
                <Modal.Header>Post Delete</Modal.Header>
                <Modal.Content>
                    <p>Bu yazıyı silmek istediğinizden eminmisiniz?</p>
                    {hata && <p>{hata}</p>}
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={close}>
                        No
                    </Button>
                    <Button
                        positive
                        onClick={() => handleDelete(props.post.id)}
                        icon="delete"
                        labelPosition="right"
                        content="Yes"
                    />
                </Modal.Actions>
            </Modal>
        </React.Fragment>
    );
};
export default DeleteModal;
