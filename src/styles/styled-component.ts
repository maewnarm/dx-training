import styled, {createGlobalStyle, css} from "styled-components";

export const LanguageDiv = styled.div`
    right: 0.5em;
    position: absolute;
    display: flex;
    flex-direction: row;
`;

interface LanguageBtnProps {
    readonly isEnable: boolean;

}

export const LanguageBtn = styled.div<LanguageBtnProps>`
    pointer-events: ${(props) => props.isEnable ? "inherit" : "none"};
    font-weight: ${(props) => props.isEnable ? "normal" : "bold"};
    text-decoration: ${(props) => props.isEnable ? "underline" : "none"};
    &:first-child {
        margin-right: 5px;
    };
    &:last-child {
        margin-left: 5px;
    }
`