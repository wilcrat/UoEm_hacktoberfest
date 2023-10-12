import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const BookAppointment = ({auth}) => {
  return (
    <Authenticated
    user={auth.user}
    >
        <Head title='Book a Session' />
        <div className='text-white'>BookAppointment</div>
    </Authenticated>
  )
}

export default BookAppointment