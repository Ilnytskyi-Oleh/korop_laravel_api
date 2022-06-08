<?php

namespace App\Http\Resources\Api\Product;

use Illuminate\Http\Resources\Json\JsonResource;

class IndexResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'price' => number_format( $this->price / 100, 2),
            'description' => $this->description,
            'category' => new \App\Http\Resources\Api\Category\IndexResource($this->category)
        ];
    }
}
