import React from "react";
import Toast from "react-bootstrap/Toast";

function Theatres() {

    return(
        <Toast>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Theatres</strong>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
    )
}
export default Theatres;