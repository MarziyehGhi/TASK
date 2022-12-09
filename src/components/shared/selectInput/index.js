import React from 'react'

const SelectInput = ({ options, defaultOption, selectLabel, onChange }) => {
    return (
        <div className='mx-2 mb-3 w-100'>
            <label className='pb-2 text-secondary'>{selectLabel}</label>
            <select onChange={onChange} className="form-select" aria-label="select ">
                <option selected>{defaultOption}</option>
                {options?.map(i => (
                    <option key={i.id} value={i.value}>{i.value}</option>
                ))}
            </select>
        </div>

    )
}

export default SelectInput