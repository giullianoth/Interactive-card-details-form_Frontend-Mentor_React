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
    half?: boolean
    alignRight?: boolean
    double?: boolean
    secondFieldProps?: CardFormFieldProps
}

const CardFormField = ({ id, label, placeholder, value, validate, error, valid, message, half, alignRight, double, secondFieldProps }: CardFormFieldProps) => {
    return (
        <div className={styles.cardFormField
            + (half ? ` ${styles.half}` : "")
            + (double ? ` ${styles.double}` : "")}>
            <label htmlFor={id} className={styles.cardFormLabel}>{label}</label>

            <input
                type="text"
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={event => validate(event.type, event.target.value)}
                onBlur={event => validate(event.type, event.target.value)}
                className={(error && !valid ? styles.error : "")
                    + (valid && !error ? styles.valid : "")
                    + (alignRight ? ` ${styles.right}` : "")} />

            {double &&
                <input
                    type="text"
                    id={secondFieldProps?.id}
                    placeholder={secondFieldProps?.placeholder}
                    value={secondFieldProps?.value}
                    onChange={event => secondFieldProps?.validate(event.type, event.target.value)}
                    onBlur={event => secondFieldProps?.validate(event.type, event.target.value)}
                    className={(secondFieldProps?.error && !secondFieldProps?.valid ? styles.error : "")
                        + (secondFieldProps?.valid && !secondFieldProps?.error ? styles.valid : "")
                        + (secondFieldProps?.alignRight ? ` ${styles.right}` : "")} />}

            <p className={styles.cardFormMessage}>{message}</p>
        </div>
    )
}

export default CardFormField