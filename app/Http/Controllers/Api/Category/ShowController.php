<?php

namespace App\Http\Controllers\Api\Category;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Category\IndexResource;
use App\Http\Resources\Api\Category\ShowResource;
use App\Models\Category;

class ShowController extends Controller
{
    public function __invoke(Category $category)
    {
        return new ShowResource($category);
    }
}
