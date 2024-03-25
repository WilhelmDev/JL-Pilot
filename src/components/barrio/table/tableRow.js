// PropertyCard.js
import React from 'react'
import Property from './tableColumn/property'
import Operation from './tableColumn/operation'
import Request from './tableColumn/request'
import LastAction from './tableColumn/lastAction'
import FavShare from './tableColumn/favorite'
import ActionsColumn from './tableColumn/actions'

const TableRow = ({ imageUrl, title, type, location, operations, visits }) => {
  return (
    <>
      <Property
        imageUrl={imageUrl}
        title={title}
        type={type}
        location={location}
      />
      <Operation operations={operations} visits={visits} />
      <Request />
      <LastAction />
      <FavShare />
      <ActionsColumn />
    </>
  )
}

export default TableRow
