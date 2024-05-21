import React, { useState } from 'react';

function DynamicForm({ fields, buttons, form, setForm, idForm}) {

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form id={idForm}>
            {fields.map(field => (
                field.tag === 'input' ? (
                    <input className='title'
                        key={field.name}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                    />
                ) : (
                    <textarea className='text'
                        key={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                    />
                )
            ))}

            {buttons.map(button => (
                <button key={button.text} onClick={(event) => button.function(event)} value={button.text}>
                    {button.text}
                </button>
            ))}
            
        </form>
    );
}

export default DynamicForm;