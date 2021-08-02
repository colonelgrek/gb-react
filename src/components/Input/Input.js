import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Input = (props) => {
    const { onSubmit } = props
    const inputRef = React.useRef(null)

    const [inputValue, setInputValue] = React.useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (onSubmit) {
            onSubmit(inputValue)
            setInputValue('')
            setTimeout(() => inputRef.current?.focus(), 200)
        }
    }

    return (
        <form className="app__form bordered" onSubmit={handleSubmit}>
            <TextField
                fullWidth
                required
                autoFocus
                innerRef={inputRef}
                className="child__text-field bordered"
                variant="outlined"
                label="Сообщение"
                placeholder="Введите сообщение"
                value={inputValue}
                onChange={handleChange}
            />
            <Button type="submit" variant="outlined" tabIndex={-1}>
                Отправить
            </Button>
        </form>
    )
}

export default Input