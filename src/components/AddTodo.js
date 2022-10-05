import React from "react";

export default function FormTodo ({addTodo}) {
    const [value, setValue] = React.useState("");

    const submit = e => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={submit}>
            <input value={value} onChange={e => setValue(e.target.value)} type="text" size="1" placeholder="New todo..."></input>
            <button type="submit">Create</button>
        </form>
    )
}