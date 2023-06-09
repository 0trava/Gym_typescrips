import React from 'react'

type Props = {
    name: string;
    description?:string;
    image: string
}

const Class = ({name, description = "some description", image}: Props) => {
    


  return <div>Class</div>

}

export default Class

