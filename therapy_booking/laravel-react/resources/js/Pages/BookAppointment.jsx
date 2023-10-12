import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React, { useState } from 'react'

const BookAppointment = ({auth}) => {

    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const days = ["Tuesday", "Wednesday"];
  
    const handleDayClick = (day) => {
      setSelectedDay(day);
      setSelectedTime(null); // Reset selected time when changing the day.
    };
  
    const timeSlots = [
      "10:00am - 11:00am",
      "11:00am - 12:00pm",
      "12:00pm - 1:00pm",
      "12:00pm - 1:00pm",
      "12:00pm - 1:00pm",
      "12:00pm - 1:00pm",
      "12:00pm - 1:00pm",
      "12:00pm - 1:00pm",
      // Add more time slots here
    ];
  
    const handleTimeClick = (time) => {
      setSelectedTime(time);
      console.log("Selected time:", time);
    };
  
  return (
    <Authenticated   user={auth.user}  >
        <Head title='Book a Session' />

    <div className='flex justify-center mt-20'>
    <div className="bg-white dark:bg-gray-800 shadow">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      
        <h1 className='text-white text-2xl text-center mb-4'>BookAppointment</h1>

        <div className="container mx-auto p-4">
        <div className="flex justify-center">
            {days.map((day, index) => (
            <button
                key={index}
                onClick={() => handleDayClick(day)}
                className={`${
                selectedDay === day
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                } p-2 rounded-md mx-2`}
            >
                {day}
            </button>
            ))}
        </div>

        {selectedDay && (
            <div className="mt-4">
            <h2 className="text-2xl font-semibold dark:text-white mb-5 text-center">
                Available Time Slots for {selectedDay}:
            </h2>
            <div className="flex flex-wrap -m-2 justify-center">
                {timeSlots.map((timeSlot, index) => (
                <button
                    key={index}
                    onClick={() => handleTimeClick(timeSlot)}
                    className={`${
                    selectedTime === timeSlot
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-700"
                    } p-2 m-2 rounded-md`}
                >
                    {timeSlot}
                </button>
                ))}
            </div>
        </div>
      )}

        <form className='flex justify-center'>
        <div class="relative z-0 w-1/2 my-6 group">
            <input type="textarea" name="Description" 
            id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
             placeholder=" " required />
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Discription</label>
        </div>
        </form>

        <div className='flex justify-center'> 
            <PrimaryButton>
                Book AppointMent
            </PrimaryButton>
        </div>

    </div>
    </div>
    </div>
    </div>
    </Authenticated>
  )
}

export default BookAppointment