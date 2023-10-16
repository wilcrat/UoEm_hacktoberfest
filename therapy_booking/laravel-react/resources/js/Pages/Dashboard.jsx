import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {BiCalendar,BiTime} from "react-icons/bi";

export default function Dashboard({ auth,sessions }) {

    function splitDateTime(initDate) {
        // Use a regular expression to match the date and time range
        const regex = /(\w{3} \w{3} \d{1,2} \d{4}) (\d{1,2}:\d{2}[ap]m - \d{1,2}:\d{2}[ap]m)/;
        const match = initDate.match(regex);      
        if (match) {
          const date = match[1];
          const timeRange = match[2];
          return {
            date,
            timeRange,
          };
        } else {
          // Handle invalid input
          return {
            date: "Invalid date",
            timeRange: "Invalid time range",
          };
        }
      }

      
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                (
                <div className='text-gray-800 dark:text-gray-200 flex justify-center'>
                  <div>
                  <p>We look forward to serving you</p>
                    {/* <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2> */}
                    <PrimaryButton className='my-3 ml-10'>Book Session</PrimaryButton>
                    <p>You have an appointment on</p>
                  </div>
                </div>
                )
            }
        >
            <Head title="Dashboard" />

            {sessions && sessions.map((session,index)=>(
                <div className="pt-6" key={index}>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900 dark:text-gray-100">
                            <p className='flex justify-between'>
                                <p className='flex gap-1 items-center'><BiCalendar/> {splitDateTime(session.bookedDateTime).date} </p>
                                <p className='flex gap-1 items-center'><BiTime/> {splitDateTime(session.bookedDateTime).timeRange}</p>
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
          
    
            <div className='flex justify-center'>
            <PrimaryButton className='my-6'>Book Session</PrimaryButton>
            </div>

        </AuthenticatedLayout>
    );
}
