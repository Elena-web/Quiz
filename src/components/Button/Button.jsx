import { ButtonComponent } from './Button.styles';
import PropTypes from 'prop-types';

function Button({ children, onClick }) {
    return (
        <ButtonComponent onClick={onClick}>{children}</ButtonComponent>
    )
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};
export default Button;