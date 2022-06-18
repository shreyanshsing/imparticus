import styled from "@emotion/styled"

export const ContainerDiv = styled.div<HTMLDivElement | {fullWidth: boolean | undefined}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: ${props => props.fullWidth ? '3rem' : '1rem'};
    padding: 1rem;
    position: ${props => props.fullWidth ? 'fixed' : 'relative'};
    top: 0px;
    left: 0px;
    width: 100%;
    background-color: whitesmoke;
` 

export const Title = styled.div<HTMLDivElement | { fullWidth: boolean | undefined }>`
    padding: 5px;
    margin-left: ${props => props.fullWidth ? '5rem' : '1.5rem'};
    text-align: right;
`

export const ActionDiv = styled.div<HTMLDivElement | { fullWidth: boolean | undefined } >`
    margin-left: ${props => props.fullWidth ? '3rem' : '0.5rem'};
    margin-right: ${props => props.fullWidth ? '3rem' : '0.5rem'};
`