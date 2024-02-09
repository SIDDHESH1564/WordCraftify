import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    };
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    };
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!", "success");
    };
    const handleCopy = () => {
        // var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!","success")
    };
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success")
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState("");
    return (
        <>
            <div
                className="container mt-4"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
                <h4>{props.heading} </h4>
                <div className="mb-3">
                    <textarea
                        className="form-control "
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="8"
                        style={{
                            backgroundColor: props.mode === "dark" ? "grey" : "white",
                            color: props.mode === "dark" ? "white" : "black",
                        }}
                    ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
                    Clear Text
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
                    Copy Text
                </button>
            </div>
            <div
                className="container mt-4"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
                <h4>Your text summary </h4>
                <p className="mx-2 mb-0">
                    {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
                </p>
                <p className="mx-2">{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h4>Preview</h4>
                <p className="mx-2">
                    {text.length > 0 ? text : "Nothing to preview!"}
                </p>
            </div>
        </>
    );
}
