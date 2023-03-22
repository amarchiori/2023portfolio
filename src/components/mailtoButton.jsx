import { Link } from "react-router-dom";
import styled from "styled-components";

const MailtoButton = styled(Link)`
    color: white;
    text-decoration: none;
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