<?php

namespace App\Http\Controllers\Api\Category;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Category\StoreRequest;
use App\Http\Resources\Api\Category\IndexResource;
use App\Http\Resources\Api\Category\StoreResource;
use App\Models\Category;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function __invoke(StoreRequest $request)
    {

        $data = $request->validated();

        if(isset($data['photo'])){
            $file = $data['photo'];
            $name =  'categories/' . uniqid() . '.' . $file->extension();
            $file->storePubliclyAs('public', $name);
            $data['photo'] = $name;
        }
        $category = Category::create($data);

        return new StoreResource($category);
    }
}
