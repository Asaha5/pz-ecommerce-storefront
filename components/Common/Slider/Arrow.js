import React from 'react'
import styles from './slider.module.scss'
import {consts} from 'react-elastic-carousel'
import {Icon} from 'semantic-ui-react'

const Arrow = ({ type, onClick }) => {
    const icon = type === consts.PREV ? <Icon name='arrow left' size={'big'}></Icon> : <Icon name='arrow right' size={'big'}></Icon>
    return (
        <div className={`${styles.arrowContainer} ${type === consts.PREV ? styles.left : styles.right }`} onClick={onClick}>
            {icon}
        </div>
    )
}

export default Arrow