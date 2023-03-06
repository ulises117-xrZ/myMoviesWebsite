import { ErrorLogin, User } from '@/model/user'
import { validateLogin } from '@/utils/email_validator'
import React, { useState, useEffect } from 'react'

export interface SearchQuery{
    key: "";
}

interface useFormProps {
    initial: User | SearchQuery
}

export const useForm = (initial: useFormProps["initial"]) => {
    const [values, setValues] = useState(initial)

    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        evt.preventDefault();
        setValues({
            ...values, [evt.target.name]: evt.target.value
        })

    }

    return { values, handleInputChange}
}
