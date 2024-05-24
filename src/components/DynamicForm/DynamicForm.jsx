import React, { useState } from 'react';
import { Input } from "../Input/Input";
import Button from "../Button/Button";
import { FormContainer, Form } from './style';
import { TextArea } from '../TextArea/TextArea';

function DynamicForm({ fields, buttons, form, setForm}) {

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <FormContainer>
            <Form>
                {fields.map(field => (
                    field.tag === 'input' ? (
                        <Input className='title'
                            key={field.name}
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            onChange={handleChange}
                        />
                    ) : (
                        <TextArea className='text'
                            key={field.name}
                            name={field.name}
                            placeholder={field.placeholder}
                            onChange={handleChange}
                        />
                    )
                ))}

                {buttons.map(button => (
                    <Button key={button.text} onClick={(event) => button.function(event)} id={button.text}>
                        {button.text}
                    </Button>
                ))}
                
            </Form>
        </FormContainer>
    );
}

export default DynamicForm;