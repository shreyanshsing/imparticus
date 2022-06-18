import styled from '@emotion/styled'
import { Button as B, Typography } from '@mui/material'

export const Container = styled.div`
    margin-top: 10rem;
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 5px 5px 10px lightgrey;
`

export const MainSection = styled.div`
    background: url(https://cdn.pegasus.imarticus.org/index/mainbg.png) no-repeat bottom right;
    overflow: hidden;
    border-radius: 5px;
`

export const Heading = styled(Typography)`
    color: #fff;
    line-height: 30px;
`

export const Tagline = styled(Typography)`
    color: rgba(255,255,255,.75);
`
export const InfoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
    margin-top: 5rem;
    text-align: center;
`
export const Button = styled(B)`
    border-radius: 30px;
    background-color: #fed6a8;
    color: #212a39;
    width: 280px;
    font-size: 18px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-top: 5rem;
    &:hover{
        background-color: #fed6a8;
        color: #212a39;
    }
`

export const Overlay = styled.div`
    padding: 3rem;
    padding-bottom: 5rem;
    background: linear-gradient(101.98deg,#212a39 45.11%,rgba(33,42,57,0) 115.04%);
`

