import React from 'react'

const ActionsColumn = () => {
  return (
    <td>
      <div className='d-flex flex-row flex-wrap align-items-center gap-2 mt-4'>
        <div className='box_icon'>
          <img src='/images/trash.jpg' width={17} height={16} />
        </div>
        <div className='box_icon'>
          <img src='/images/edit.jpg' width={17} height={16} />
        </div>
        <div className='box_icon'>
          <img src='/images/compartir.jpg' width={17} height={16} />
        </div>
      </div>
    </td>
  )
}

export default ActionsColumn
