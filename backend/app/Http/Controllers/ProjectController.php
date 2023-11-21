<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\Project;

class ProjectController extends Controller
{
    public function create(Request $request)
    {

        $customerData = $request->input('customerData');
        $projectData = $request->input('projectData');

        error_log(json_encode($customerData));

        // Validate and store company data
        $validatedCustomerData = $this->validateCustomerData($customerData);

        $customer = Customer::create($validatedCustomerData);
        // Validate and store project data
        $validatedProjectData = $this->validateProjectData($projectData);
        $project = Project::create(array_merge($validatedProjectData,["customerId"=>$customer->id]));

        return response()->json([
            'message' => 'Company and Project data stored successfully',
            'customer_data' => $customer,
            'project_data' => $project,
        ]);
    }

    protected function validateCustomerData($data)
    {
        return validator($data, [
            'companyName' => 'required_if:customerType,private',
            'representative' => 'required_if:customerType,private',
            'commercialRegistrationNumber' => 'required_if:customerType,private',
            'taxNumber' => 'required_if:customerType,private',
            'idNumber' => 'required',
            'alternateMobile' => 'nullable',
            'whatsapp' => 'nullable',
            'mobile' => 'required',
            'firstName' => 'required_if:customerType,individual',
            'secondName' => 'required_if:customerType,individual',
            'thirdName' => 'required_if:customerType,individual',
            'fourthName' => 'required_if:customerType,individual',
            'agencyName' => 'required_if:customerType,government',
            'customerType' => 'required'
        ])->validate();
    }

    protected function validateProjectData($data)
    {
        return validator($data, [
            'projectName' => 'required',
            'region' => 'required',
            'city' => 'required',
            'district' => 'nullable',
            'maintenanceType' => 'required',
            'elevatorType' => 'required',
            'stops' => 'required',
            'elevatorDistance' => 'nullable',
            'cost' => 'nullable',
            'startDate' => 'nullable|date',
            'visitCount' => 'nullable|integer',
            'endDate' => 'nullable|date',
            'buildingType' => 'nullable',
            'doorOpeningSize' => 'required',
            'doorOpeningDirection' => 'required',
            'entrances' => 'required',
            'elevatorRoom' => 'required',
            'machineType' => 'required',
            'machineSpeed' => 'required',
            'machineLoad' => 'required|integer',
            'notes' => 'nullable',
        ])->validate();
    }
}
