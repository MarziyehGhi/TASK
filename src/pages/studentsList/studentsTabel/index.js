import { Svgs } from 'assets/images/svgs'
import React, { useContext, useState, useMemo, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import TabelRows from './tabelRow';
import avatarPic from "assets/images/user-avatar.png";
import avatarPic2 from "assets/images/avatarPic.png";
import { studentsService } from 'api/services/studentsService';
import { layoutContext } from 'contexts';
import './styles/_base.css'

const StudentsTabel = () => {

    const { setLoading, studentsData, setStudentsData } = useContext(layoutContext)


    useEffect(() => {
        setLoading(true)
        studentsService().then(res => {
            setStudentsData(res.students);
        })
    }, [])

    useMemo(() => {
        if (studentsData) {
            setLoading(false)
        }
    }, [setLoading, studentsData?.length])


    return (
        <div className='mt-4 pe-4'>
            <Table responsive="sm">
                <thead className='tabel-thead'>
                    <tr>
                        <th>نام و نام خانوادگی</th>
                        <th>کد دانشجویی</th>
                        <th>کد ملی</th>
                        <th>رشته تحصیلی</th>
                        <th>ترم و مقطع</th>
                        <th>{Svgs.plus}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentsData?.map(item => (
                            <TabelRows
                                userName={item.fullName}
                                studentCode={item.studentCode}
                                nationalCode={item.nationalCode}
                                filed={item.dgree}
                                term={item.term}
                                num={item.number}
                                avatarPic={avatarPic}
                            />

                        ))
                    }

                    <TabelRows
                        userName='حسین ناصری'
                        studentCode='999999999'
                        nationalCode='8946123255'
                        filed='مهندسی شیمی'
                        term='فوق لیسانس'
                        num='500'
                        avatarPic={avatarPic2}

                    />

                </tbody>
            </Table>


        </div>
    )
}

export default StudentsTabel