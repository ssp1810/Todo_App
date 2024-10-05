import React, { Component } from 'react'
import { Button, Form, Input } from "antd"
import TodoDataProvider from '../TodoDataProvider'
import { CREATE_NOTE_API } from '../Constants'

export default class CreateNotePage extends Component {
    state = {
        notes: [{
            title: "",
            content: ""
        }]
    }
    formRef = React.createRef()
    todoDataProvider = TodoDataProvider()

    handleNoteCreation = (values) => {
        console.log("Form values: ", values)
        try {
            this.todoDataProvider.postNotes(CREATE_NOTE_API, values)
                .then((response) => {
                    if (response.ok) {
                        return response.json().then((res) => {
                            this.setState({ notes: res }, () => {
                                console.log("Note is created")
                            })
                        })
                    }
                }
                )
        }
        catch (e) {
            console.log(e)
            return;
        }
    }
    render() {
        return (
            <>
                <Form ref={this.formRef} onFinish={this.handleNoteCreation}>
                    <Form.Item>
                        <Input
                            title='Title'
                            type='text'
                            maxLength='30'
                            placeholder='Enter title here'
                            required={true}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            title='Note Content'
                            type='text'
                            maxLength='50'
                            placeholder='Enter content here'
                            required={true}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            title='Add Note'
                            style={{
                                width: "fit-content",
                                height: "20rem"
                            }}
                        />
                    </Form.Item>
                </Form>
            </>
        )
    }
}
