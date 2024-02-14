import React from 'react'
import PushPinIcon from '@mui/icons-material/PushPin';
import SearchIcon from '@mui/icons-material/Search';
export default function Search(props) {
  return (
    <div className='row'>
      <div className='col-lg-5'>
        <div className='form-group'>
          <label htmlFor=''>Type City Name:</label>
          <input
            type='text'
            className='form-control'
            name='city'
            value={props.city}
            onChange={props.change}
            id='city'
            aria-describedby='helpId'
            placeholder='' />
        </div>
      </div>
      <div className='col-lg-1 text-center'>
        <label htmlFor=''></label>
        <h5>Or</h5>
      </div>
      <div className='col-lg-5'>
        <div className='form-group'>
          <label htmlFor=''>Get Co-ordinate:</label>
          <PushPinIcon fontSize='small' onClick={props.getlocation} />
          <div className='row'>
            <div className='bg-dark text-white rounded pt-1 col-1'>Lat:</div>
            <input
              type="number"
              step='any'
              className='form-control mr-1 col'
              name='lat'
              value={props.lat}
              onChange={props.change}
              id='lat'
              aria-describedby='helpId'
              placeholder=''
            />
            <div className='bg-dark text-white rounded pt-1 col-1'>Lon:</div>
            <input
              type="number"
              step='any'
              className='form-control col'
              name='lon'
              value={props.lon}
              onChange={props.change}
              id='lon'
              aria-describedby='helpId'
              placeholder=''
            />
          </div>
        </div>
      </div>
      <div className='col-lg-1'>
        <label htmlFor=''>Search:</label>
        <button className='btn btn-dark'><SearchIcon fontSize='small' /></button>
      </div>

    </div>
  )
}
