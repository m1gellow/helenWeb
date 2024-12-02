import React from 'react'
import SectionName from './SectionName'





const Review = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4  flex-center w-full sectionMargins">
      <div className="flex-col flex  gap-[100px]">
            <SectionName variant='center' title='Что люди говорят обо мне?' sectionName='Отзывы'/>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="pharagraph">Листай</p>
        </div>
      </div>
  )
}

export default Review