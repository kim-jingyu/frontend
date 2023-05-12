import { MouseEvent } from 'react'

export interface IBoardListUIProps{
    data?: any
    onClickMoveToBoardNew: (event: MouseEvent<HTMLButtonElement>) => void
    onClickMoveToBoardDetail: (event: MouseEvent<HTMLButtonElement>) => void
}