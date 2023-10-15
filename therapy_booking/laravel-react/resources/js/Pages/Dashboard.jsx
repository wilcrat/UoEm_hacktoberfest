import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth,sessions }) {

    console.log(sessions)
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

            <div className="pt-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                           <p className='flex justify-between'>
                            <p><i>Date</i> Tuesday,Oct 17 </p>
                             <p><i>Time</i> 11:00-12:00 Am</p>
                           </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                           <p className='flex justify-between'>
                            <p><i>Calender</i> Tuesday,Oct 17 </p>
                             <p><i>Time</i> 11:00-12:00 Am</p>
                           </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                           <p className='flex justify-between'>
                            <p><i>Calender</i> Tuesday,Oct 17 </p>
                             <p><i>Time</i> 11:00-12:00 Am</p>
                           </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                           <p className='flex justify-between'>
                            <p><i>Calender</i> Tuesday,Oct 17 </p>
                             <p><i>Time</i> 11:00-12:00 Am</p>
                           </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                           <p className='flex justify-between'>
                            <p><i>Calender</i> Tuesday,Oct 17 </p>
                             <p><i>Time</i> 11:00-12:00 Am</p>
                           </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                           <p className='flex justify-between'>
                            <p><i>Calender</i> Tuesday,Oct 17 </p>
                             <p><i>Time</i> 11:00-12:00 Am</p>
                           </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
            <PrimaryButton className='my-6'>Book Session</PrimaryButton>
            </div>

        </AuthenticatedLayout>
    );
}
