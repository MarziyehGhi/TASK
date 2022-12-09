import React from 'react'
import SelectInput from 'components/shared/selectInput'
import './styles/_base.css'
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import { useState } from 'react';
import { useContext } from 'react';
import { layoutContext } from 'contexts';
import { updateStudentsService } from 'api/services/updateStudentsService';

const FilterItems = () => {

    const { setStudentsData } = useContext(layoutContext)

    const [value, setValue] = useState(500);


    const handleFilterStudents = e => {
        setValue(e.target.value)
        updateStudentsService().then(res => {
            setStudentsData(res.students.filter(i => Number(i.number) < Number(e.target.value)))
        })
    }

    const handleChangeDgree = e => {
        if (e.target.value === "همه موارد") return updateStudentsService().then(res => {
            setStudentsData(res.students.filter(i => true))
        })
        updateStudentsService().then(res => {
            setStudentsData(res.students.filter(i => i.term === e.target.value))
        })
    }
    const handleChangeTerm = e => {
        if (e.target.value === "همه موارد") return updateStudentsService().then(res => {
            setStudentsData(res.students.filter(i => true))
        })
        updateStudentsService().then(res => {
            setStudentsData(res.students.filter(i => i.dgree === e.target.value))
        })
    }

    return (
        <div className='filterItems-parents pt-4'>

            <div className='me-4'>

                <SelectInput onChange={handleChangeDgree} defaultOption='همه موارد' options={[
                    {
                        id: 1,
                        value: "لیسانس"
                    },
                    {
                        id: 2,
                        value: "دکترا"
                    }, {
                        id: 3,
                        value: "دیپلم"
                    }
                ]} selectLabel='مقطع تحصیلی' />
                <SelectInput onChange={handleChangeTerm} defaultOption='همه موارد' options={[
                    {
                        id: 1,
                        value: "مهندسی مواد"
                    },
                    {
                        id: 2,
                        value: "مهندسی شیمی"
                    }, {
                        id: 3,
                        value: "مهندسی مکانیک"
                    }
                ]} selectLabel='رشته تحصیلی' />

                <div className='ltr' style={{
                    direction: 'ltr'
                }}>

                    <RangeSlider
                        min={100}
                        max={500}
                        value={value}
                        onChange={handleFilterStudents}
                    />
                </div>
            </div>
        </div>
    )
}

export default FilterItems