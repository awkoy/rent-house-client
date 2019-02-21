import { checkPassStrength } from '../../helpers/password-score';

const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = 'Введите пожалуйста ваш email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Введен некорректный email адрес';
    }

    if (!values.password) {
        errors.password = 'Введите пожалуйста пароль';
    } else if (values.password.length < 7) {
        errors.password = 'Пароль должен состоять из 6 или более символов';
    } else if (values.password.length > 16) {
        errors.password = 'Пароль не должен превышать 15 символов';
    }

    if (!values.title) {
        errors.title = 'Обязательное поле';
    }

    if (!values.description) {
        errors.description = 'Обязательное поле';
    }

    if (!values.price) {
        errors.price = 'Обязательное поле';
    }

    if (!values.subway) {
        errors.subway = 'Обязательное поле';
    }

    if (!values.location) {
        errors.location = 'Обязательное поле';
    }

    if (!values.area) {
        errors.area = 'Обязательное поле';
    }

    if (!values.room_count) {
        errors.room_count = 'Обязательное поле';
    }

    if (!values.floor) {
        errors.floor = 'Обязательное поле';
    }

    if (!values.floor_count) {
        errors.floor_count = 'Обязательное поле';
    }

    if (!values.repassword) {
        errors.repassword = 'Обязательное поле';
    } else if (!(values.repassword === values.password)) {
        errors.repassword = 'Пароли не совпадают';
    }

    return errors;
};

const warn = values => {
    const warnings = {};

    if (values.password) {
        warnings.password = checkPassStrength(values.password);
    }
    
    return warnings;
};

export {
    validate,
    warn
};