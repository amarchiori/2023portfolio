import { Link } from "react-router-dom";
import styled from "styled-components";

const MailtoButton = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
`

const ButtonMailto = ({ mailto, label }) => {
    return (
        <MailtoButton
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </MailtoButton>
    );
};

export default ButtonMailto;