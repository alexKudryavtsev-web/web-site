import { reduxForm, Field } from 'redux-form'
import { Button } from 'antd'
import { requiredInput, longInput, shortInput } from './validate'
import {input, area} from './components'
import './style.css'

function Form({ handleSubmit }) {

    return <form className='Form' onSubmit={handleSubmit} >
        <Field
            name='name'
            component={input}
            validate={[requiredInput, longInput, shortInput]}
        />
        <Field
            name='link'
            component={input}
            validate={[requiredInput, longInput, shortInput]}
        />
        <Field
            name='message'
            component={area}
            validate={[requiredInput, shortInput]}
        />

        <Button
            htmlType='submit'
            type='primary'
        >
            submit
        </Button>
    </form>
}

export default reduxForm({ form: 'contact' })(Form)