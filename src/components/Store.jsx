import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, increaseCounter } from '../store/PhoneReducer'

export const Store = () => {
    const dataPosts = useSelector((state) => state.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    const IncreaseCounter = () => {
        dispatch(increaseCounter())
    }

    return (
        <div>
            {dataPosts.map((dataPost, index) => (
                <div key={index} className="dataPost"
                    style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                    <h4>{dataPost.title}</h4>
                    <button style={{height: '40px', width: '60px'}}
                        onClick={IncreaseCounter}>BUY</button>
                </div>
            ))}
        </div>
    )
}
