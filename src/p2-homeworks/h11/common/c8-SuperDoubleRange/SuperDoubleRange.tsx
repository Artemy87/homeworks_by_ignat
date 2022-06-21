import React, {DetailedHTMLProps, InputHTMLAttributes, useState} from 'react'
import './SuperDoubleRange.css';
import {Slider} from "@mui/material";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    setValue1: (value: number) => void
    setValue2: (value: number) => void
    min: number
    max: number

    //step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (props) => {
    let {setValue1, setValue2, min, max} = props; // min, max, step, disable, ...

    const [value, setValue] = useState<number[]>([min, 100]);
    let [start, finish] = value;

    const onChangeCallback = (e: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        setValue1(start);
        setValue2(finish);
    };

    return (
        <div className='sliderContainer'>
            <div className='value1'>{start}</div>
            <div className='slider'>
                <Slider
                    value={value}
                    onChange={onChangeCallback}
                    // valueLabelDisplay="auto"
                />
            </div>
            <div className='value2'>{max}</div>
        </div>
    )
}

export default SuperDoubleRange
