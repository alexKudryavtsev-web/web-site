import React from 'react'
import { Input } from 'antd'
import './style.css'

const { TextArea } = Input

function input(props) {
    const { meta } = props

    return <>
        <Input {...props.input} placeholder={props.input.name} type='text' />
        {meta.error && meta.touched &&
            <div className='Form-error'>{meta.error}</div>
        }
    </>
}

function area(props) {
    const { meta } = props
    
    return <>
        <TextArea {...props.input} placeholder={props.input.name}></TextArea>
        {meta.error && meta.touched &&
            <div className='Form-error'>{meta.error}</div>
        }
    </>
}

export { input, area }