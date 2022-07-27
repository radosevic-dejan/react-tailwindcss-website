import React from 'react'

export const Recent = (props) => {
  const {title} = props;
  return (
    <div className="flex">
        <div>
            Icon
        </div>
        <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, accusamus iste quo quidem, labore sed eius dolores cumque similique quas provident, voluptatem eligendi tenetur nisi libero nobis omnis numquam quaerat!</p>
        </div>
    </div>
  )
}
