import { ButtonAnswerComponent } from './ButtonAnswer.styles';
import PropTypes from 'prop-types';

function ButtonAnswer({ value, onClick, type = 'submit' }) {
    return (
        <ButtonAnswerComponent
        value= { value }
        onClick={onClick}
        type={type}>{ value }
        </ButtonAnswerComponent>
    )
}
ButtonAnswer.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
};

export default ButtonAnswer;