import React, { useState } from 'react'

const useForm = (uitem) => {

  var [val,setval]=useState(uitem);
  return [val,(event) => {
    setval(
        {
            ...val,[event.target.name]:event.target.value
        }
    )

  }]
}

export default useForm
