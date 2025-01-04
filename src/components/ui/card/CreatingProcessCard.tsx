import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { Card, List, ListItem } from '@mui/material';
import React from 'react'

interface Props {
    index: string;
    title: string;
    itemsList: string[];
    className?: string;
}



export const CreatingProcessCard = ({ index, itemsList = [], title, className = '' }: Props) => {
    return (
        <Card className={`text-text-base shadow-xl px-6 transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] z-10 ${className}`}>

            <div className='flex justify-around items-center p-6'>
                <span className='px-4 py-2 border-2 border-detail-primary text-detail-primary'>{index}</span>
                <h3 className='text-xl'>{title}</h3>
            </div>

            <div className='h-[2px] bg-detail-primary w-full' />

            <List>
                {
                    itemsList.map((item, i) => (
                        <div key={i} className='flex items-center'>
                            <p>
                                <LabelImportantIcon className='text-detail-primary' />
                            </p>
                            <ListItem>
                                {item}
                            </ListItem>
                        </div>
                    ))
                }
            </List>

        </Card> 
    )
}
