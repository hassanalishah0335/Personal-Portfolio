import Link from 'next/link'
import React from 'react'

const Chat = () => {
  return (
    <div className='fixed right-5 bottom-5 z-50'>
      <Link href="skype:live:hassanalishah75" target="_blank"><img className='w-16' src="/images/skype.png" alt="" /></Link>
      <Link href="https://wa.me/+923350183868" target="_blank"><img className='w-[70px] mt-2' src="/images/WhatsApp.png" alt="" /></Link>
    </div>
  )
}

export default Chat
