<?php

namespace App\Http\Controllers\Api\Category;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Category\IndexResource;
use App\Models\Category;

class IndexController extends Controller
{
    public function __invoke()
    {
        return IndexResource::collection(Category::all());
    }
}
