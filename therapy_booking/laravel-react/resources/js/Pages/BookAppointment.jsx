import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head,router } from '@inertiajs/react'
import React, { useState } from 'react'

const BookAppointment = ({auth}) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [bookedSlots, setBookedSlots] = useState([]);
    const days = ["Tuesday", "Wednesday"];
  
    // Get this week's Tuesday and Wednesday dates
    const today = new Date();
    const currentDay = today.getDay(); // 0 (Sunday) to 6 (Saturday)
    const daysUntilTuesday = 2 - currentDay; // Days remaining until Tuesday (0-6)
    const daysUntilWednesday = 3 - currentDay; // Days remaining until Wednesday (0-6)
    
    const tuesdayDate = new Date(today);
    tuesdayDate.setDate(today.getDate() + daysUntilTuesday);
    
    const wednesdayDate = new Date(today);
    wednesdayDate.setDate(today.getDate() + daysUntilWednesday);
  
    const handleDayClick = async(day) => {
      setSelectedDay(day);
      setSelectedTime(null);  
      // Update selectedDate based on the selected day
      let selectedDate = day === "Tuesday" ? tuesdayDate : wednesdayDate;
      setSelectedDate(selectedDate);
    };

  
    const timeSlots = [
      "10:00am - 11:00am",
      "11:00am - 12:00pm",
      "12:00pm - 1:00pm",
      "1:00pm - 2:00pm",
      "2:00pm - 3:00pm",
      "3:00pm - 4:00pm",
      "4:00pm - 5:00pm",
      "6:00pm - 7:00pm",
    ];

    const timeSlotsWensDay = [
        "8:00am - 9:00am",
        "9:00am - 10:00am",
        "10:00am - 11:00am",
        "11:00am - 12:00pm",
        "12:00pm - 1:00pm",
        "1:00pm - 2:00pm",
        "2:00pm - 3:00pm",
        "3:00pm - 4:00pm",
        "4:00pm - 5:00pm",
      ];
  
    const handleTimeClick = (time) => {
      if (!selectedDate) {
        console.log("Please select a day first.");
        return;
      }
  
      const selectedDateTime = `${selectedDate.toDateString()} ${time}`;
      
      if (bookedSlots.includes(selectedDateTime)) {
        console.log("This slot is already booked.");
      } else {
        setSelectedTime(time);
        console.log("Selected date:", selectedDate.toDateString());
        console.log("Selected time:", time);
      }
    };
  
    const handleBookSuccess = () => {
      if (!selectedDate || !selectedTime) {
        console.log("Please select both day and time.");
        return;
      }
  
      const selectedDateTime = `${selectedDate.toDateString()} ${selectedTime}`;

      //Save in db
      router.post('/appointments',{bookedDateTime:selectedDateTime});
      
      if (!bookedSlots.includes(selectedDateTime)) {
        setBookedSlots([...bookedSlots, selectedDateTime]);
      }
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
          <h2 className="text-2xl font-semibold dark:text-white">
            Available Time Slots for {selectedDay} ({selectedDate?.toDateString()}):
          </h2>
          <div className="flex flex-wrap -m-2">
            {timeSlots.map((timeSlot, index) => (
              <button
                key={index}
                onClick={() => handleTimeClick(timeSlot)}
                disabled={bookedSlots.includes(`${selectedDate?.toDateString()} ${timeSlot}`)}
                className={`${
                  bookedSlots.includes(`${selectedDate?.toDateString()} ${timeSlot}`)
                    ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                    : selectedTime === timeSlot
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

        {selectedTime && !bookedSlots.includes(`${selectedDate?.toDateString()} ${selectedTime}`) && (
        <div className='flex justify-center'> 
            <PrimaryButton  className="bg-blue-500 text-white p-2 m-4 rounded-md"
            onClick={handleBookSuccess}>
                Book AppointMent
            </PrimaryButton>
        </div>
        )}

    </div>
    </div>
    </div>
    </div>
    </Authenticated>
  )
}

export default BookAppointment