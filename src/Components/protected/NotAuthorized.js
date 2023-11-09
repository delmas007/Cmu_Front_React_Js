import React from 'react'

function NotAuthorized (props) {
  return (
    <div className={'p-3 h-[794px]'}>
      <div className={"alert alert-danger "}>
        vous n'avez pas l'autorisation
      </div>
    </div>
  )
}

export default NotAuthorized