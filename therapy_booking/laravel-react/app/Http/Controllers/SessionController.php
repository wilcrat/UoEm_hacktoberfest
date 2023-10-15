<?php

namespace App\Http\Controllers;

use App\Models\Session;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SessionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sessions=Session::all();
        return Inertia::render('Dashboard', [
            'sessions' => $sessions
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Fetch bookedDateTime values from your database
        $bookedAppointments = Session::pluck('bookedDateTime')->toArray();

        // Pass the array of bookedDateTime values to the view
        return Inertia::render('BookAppointment', [
            'bookedAppointmentSlots' => $bookedAppointments,
        ]);  
  }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $session = new Session;
        $session->bookedDateTime = $request->bookedDateTime;
        $session->user_id = auth()->user()->id; // Assuming you have user authentication
        $session->save();
        return redirect()->route('dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(Session $session)
    {
        return Inertia::render('Sessions/Show', [
            'session' => $session
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Session $session)
    {
        return Inertia::render('Sessions/Edit', [
            'session' => $session
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,Session $session)
    {
        $session->bookedDateTime = $request->bookedDateTime;
        $session->save();
        return redirect()->route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Session $session)
    {
        $session->delete();
        return redirect()->route('dashboard');
    }
}
