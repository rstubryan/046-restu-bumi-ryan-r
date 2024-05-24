<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CMSController extends Controller
{
    public function index()
    {
        return Inertia::render('CMS');
    }

    public function create()
    {
        // Logic for creating a new resource
    }

    public function store(Request $request)
    {
        // Logic for storing a new resource
    }

    public function show($id)
    {
        // Logic for showing a specific resource
    }

    public function edit($id)
    {
        // Logic for editing a specific resource
    }

    public function update(Request $request, $id)
    {
        // Logic for updating a specific resource
    }

    public function destroy($id)
    {
        // Logic for deleting a specific resource
    }
}
