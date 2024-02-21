import React from 'react'

export default function Footer(props) {
  return (
    <div>
      <footer className={`bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'} py-4`}style={{position:"relative",bottom:'-580px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; 2024 InspireMe. All rights reserved.</p>
                        <a href="https://github.com/PranavJAIN12" target='_blank' rel="noreferrer">Github</a>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p>Contact: masterpranavjain2@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
