import styled, {createGlobalStyle, css} from "styled-components";

export const LanguageDiv = styled.div`
    right: 0.5em;
    position: absolute;
`;

interface LanguageBtnProps {
    readonly isEna: boolean;
}

export const LanguageBtn = styled.a<LanguageBtnProps>`
    pointer-events: ${(props) => props.isEna ? "inherit" : "none"};
    font-weight: ${(props) => props.isEna ? "normal" : "bold"};
    text-decoration: ${(props) => props.isEna ? "underline" : "none"};
`