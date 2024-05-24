import React, { useState } from 'react';
import Button from "../Button/Button";
import { FormContainer, Form } from './style';

function ConfirmDelete({ text, buttons}) {

    return (
        <FormContainer>
            <Form>
                <h1 className='title'>{text}</h1>
                <div>
                    {buttons.map(button => (
                        <Button className="text" key={button.text} onClick={(event) => button.function(event)} id={button.text}>
                            {button.text}
                        </Button>
                    ))}
                </div>
            </Form>
        </FormContainer>
    );
}

export default ConfirmDelete;