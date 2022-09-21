import React, { Dispatch, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import './index.scss'
import Header from 'components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getHourseData } from 'redux/actions/actionCreators';
import { debounce } from 'utility/utils';
const Dashboard = () => {
  const {token,horseData,shouldRefresh} = useSelector(
    (state:{token:string,horseData:[],shouldRefresh:boolean}) => state
  )
  const dispatch: Dispatch<any> = useDispatch()
  useEffect(()=>{
    dispatch(getHourseData(token))
  })
  useEffect(()=>{debounce(dispatch(getHourseData(token)),15000)},[horseData,token])
  useEffect(()=>{
   if(shouldRefresh){
    debounce(dispatch(getHourseData(token)),15000)
   }
  },[shouldRefresh])
  return (
    <div className='dashboard'>
       <Header  />
       <Table striped bordered hover >
      <thead>
        <tr>
          <th className='table-head' >No</th>
          <th className='table-head'>Horse</th>
          <th className='table-head'>Time (s)</th>
        </tr>
      </thead>
      <tbody>
      {horseData&& horseData.length>0&& 
      horseData.sort((a:horseData, b:horseData) => {
       if (a.time === 0) return 1; 
       if (b.time === 0) return -1; 
       return a.time - b.time})
       .map((e:horseData,i:number)=><tr key={i}>
          <td>{e.horse?.id}</td>
          <td>{e.horse?.name}</td>
          <td>{(e.time/1000||"")}</td>
         
        </tr>)}
        
      </tbody>
    </Table>
    </div>
  )
}

export default Dashboard