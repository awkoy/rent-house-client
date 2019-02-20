import { checkPassStrength } from '../../helpers/password-score';

const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 7) {
        errors.password = 'Must be 6 characters or more';
    } else if (values.password.length > 16) {
        errors.password = 'Must be 15 characters or less';
    }

    if (!values.title) {
        errors.title = 'Required';
    }

    if (!values.description) {
        errors.description = 'Required';
    }

    if (!values.price) {
        errors.price = 'Required';
    }

    if (!values.subway) {
        errors.subway = 'Required';
    }

    if (!values.location) {
        errors.location = 'Required';
    }

    if (!values.area) {
        errors.area = 'Required';
    }

    if (!values.room_count) {
        errors.room_count = 'Required';
    }

    if (!values.floor) {
        errors.floor = 'Required';
    }

    if (!values.floor_count) {
        errors.floor_count = 'Required';
    }

    if (!values.repassword) {
        errors.repassword = 'Required';
    } else if (!(values.repassword === values.password)) {
        errors.repassword = 'Must be identify with password';
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