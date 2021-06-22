import React from 'react'

const Form = ({ handleForm, handleTagChange, newTag }) => (
    <form className="field has-addons" onSubmit={handleForm}>
        <p className="control is-expanded">
            <input className="input is-rounded" type="text" value={newTag} onChange={handleTagChange} placeholder="List Item" required="required"></input>
        </p>
        <p className="control">
            <button className="button is-outlined is-rounded" type="submit">
                Add to list!
            </button>
        </p>
    </form>
)

export default Form
