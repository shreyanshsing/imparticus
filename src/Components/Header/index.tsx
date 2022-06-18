import { Button } from '@mui/material'
import React, { ReactNode } from 'react'
import { ActionDiv, ContainerDiv, Title } from './Styles/styles'

interface IProps{
    fullWidth?: boolean
    title: string | ReactNode
    actions?: any[]
}

function Header({title, fullWidth, actions}: IProps) {
  return (
    <ContainerDiv fullWidth={fullWidth}>
        <Title fullWidth={fullWidth}>
            {title}
        </Title>
        <div style={{ width: 'fit-content', display: 'flex', marginRight: `${fullWidth ? '10rem' : '5rem'}`}}>
            {
                actions && actions.map((item: any) => (
                    <ActionDiv fullWidth={fullWidth}> 
                        <Button variant='text' size={'large'}>
                            {item}
                        </Button>
                    </ActionDiv>
                ))
            }
        </div>
    </ContainerDiv>
  )
}

export default Header