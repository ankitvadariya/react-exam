<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DocumentController extends Controller {

    function getDocuments(Request $request) {
        $allFiles = Storage::disk('local')->allFiles('public/documents');

        $files = array();
        $i = 1;

        foreach ($allFiles as $file) {
            $files[] = [
                "id" => $i++,
                "users" => "Me, Dustin",
                "file_name" => pathinfo($file, PATHINFO_BASENAME),
                "file_url" => "/api/document/load?path=$file",
            ];
        }
        return response()->json($files);
    }

    function loadDocument(Request $request) {
        return response()->file(
                        storage_path("app/$request->path")
        );
    }

    function uploadDocument(Request $request) {
        $file = $request->file('file');
        $image_name = $file->getClientOriginalName();
        $file->move(storage_path('app/public/documents/'), $image_name);

        return $this->getDocuments($request);
    }

}
