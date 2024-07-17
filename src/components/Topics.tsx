import React from 'react'
import TopicCard from './TopicCard'

function Topics() {
  return (
    <div className='flex gap-[13px] mb-5'>
        <TopicCard watched='2/7' topicName='Assertiveness'/>
        <TopicCard watched='4/4' topicName='Self-worth'/>
        <TopicCard watched='1/6' topicName='Drug Abuse'/>
    </div>
  )
}

export default Topics