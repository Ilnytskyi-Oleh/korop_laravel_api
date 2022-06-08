<?php

namespace App\Http\Controllers\Api\Product;

use App\Http\Controllers\Controller;
use App\Http\Resources\Api\Product\IndexResource;
use App\Models\Product;

class IndexController extends Controller
{
    public function __invoke()
    {
        return IndexResource::collection(Product::with('category')->paginate(3));
    }
}
