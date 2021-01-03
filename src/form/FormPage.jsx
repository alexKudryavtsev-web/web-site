import Form from './Form'
import { notification } from 'antd'
import './style.css'

function FormPage() {
    function submit(formValues) {
        console.log(formValues)

        notification.success({
            message: 'Сообщение было отправлено, ждите ответ. Спасибо.'
        })
    }

    const initialValues = {
        name: 'Василий Пупкин',
        link: 'vk/Vasy_Pupkin',
        message: 'Хочу получить сайт для своего бизнеса'
    }

    return <div>
        <h1 className='Form-title'>Форма для контакта</h1>

        <Form initialValues={initialValues} onSubmit={submit} />
    </div>
}

export default FormPage