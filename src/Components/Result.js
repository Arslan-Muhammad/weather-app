import React from 'react'

export default function Result(props) {
  const { weatherData: data } = props;
  console.log(data);
  return (
    <div className='row mt-4'>
      <div className='col-md-2'>
        <div className='card border-primary'>
          <div className='card-body'>
            <h5 className='card-title'><b>Recent</b></h5>
            <hr style={{ hieght: "0.5px", color: 'grey', position: 'center' }} />
          </div>
        </div>
      </div>
      <div className="col-md-10">
        <div className='card border-primary'>
          <div className='card-body'>
            <div className='row'>
              <h5 className='card-title'><b>{ }(temp) Description</b></h5>
            </div>
            <hr style={{ hieght: "0.5px", color: 'grey', position: 'center' }} />
            <div className='row'>
              <p className='card-title col-md-6'><b>Feels like</b></p>
              <p className='card-title col-md-6'>temp</p>
            </div>
            <hr style={{ hieght: "0.5px", color: 'grey', position: 'center' }} />
            <div className='row'>
              <p className='card-title col-md-6'><b>Min Temp</b></p>
              <p className='card-title col-md-6'>min temp</p>
            </div>
            <hr style={{ hieght: "0.5px", color: 'grey', position: 'center' }} />
            <div className='row'>
              <p className='card-title col-md-6'><b>Max Temp</b></p>
              <p className='card-title col-md-6'>max temp</p>
            </div>
            <hr style={{ hieght: "0.5px", color: 'grey', position: 'center' }} />
            <div className='row'>
              <p className='card-title col-md-6'><b>Sunrise</b></p>
              <p className='card-title col-md-6'>sunrise time</p>
            </div>
            <hr style={{ hieght: "0.5px", color: 'grey', position: 'center' }} />
            <div className='row'>
              <p className='card-title col-md-6'><b>Sunset</b></p>
              <p className='card-title col-md-6'>sunset time</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
