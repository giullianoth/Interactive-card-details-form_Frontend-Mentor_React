import styles from "./CardFormField.module.css"

export interface CardFormFieldProps {
    id: string
    label: string
    placeholder: string
    value: string
    validate: Function
    error: boolean
    valid: boolean
    message: string
    double?: boolean
    secondFieldProps?: CardFormFieldProps
}

const CardFormField = ({ id, label, placeholder, value, validate, error, valid, message, double, secondFieldProps }: CardFormFieldProps) => {
    return (
        <div className={styles.cardFormField}>
            <label htmlFor={id} className={styles.cardFormLabel}>{label}</label>

            <input
                type="text"
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={event => validate("change", event.target.value)}
                onBlur={event => validate("focusout", event.target.value)}
                className={(error ? styles.error : "") + (valid ? styles.valid : "")} />

            {double &&
                <input
                    type="text"
                    id={secondFieldProps?.id}
                    placeholder={secondFieldProps?.placeholder}
                    value={secondFieldProps?.value}
                    onChange={event => validate("change", event.target.value)}
                    onBlur={event => validate("focusout", event.target.value)}
                    className={(error ? styles.error : "") + (valid ? styles.valid : "")} />}

            <p className={styles.cardFormMessage}>{message}</p>
        </div>
    )
}

export default CardFormField