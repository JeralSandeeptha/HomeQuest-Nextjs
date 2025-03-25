import Service from "@/api/models/Service";
import connectDB from "@/lib/mongodb";
import ErrorResponse from "@/utils/ErrorResponse";
import HttpStatus from "@/utils/HttpStatus";
import SuccessResponse from "@/utils/SuccessResponse";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    const serviceId = req.nextUrl.pathname.split("/").pop();
    try {
        await connectDB();
        
        if(!serviceId) {
            return new NextResponse(
                JSON.stringify(
                    new ErrorResponse(
                        HttpStatus.NOT_FOUND,
                        'Get service query was failed',
                        'ServiceId not found'
                    )
                ),
                { status: HttpStatus.NOT_FOUND }
            );
        }

        const searchService = await Service.findById(serviceId);

        if(!searchService) {
            return new NextResponse(
                JSON.stringify(
                    new ErrorResponse(
                        HttpStatus.NOT_FOUND,
                        'Get service query was failed',
                        'Service was not found related to provided serviceId'
                    )
                ),
                { status: HttpStatus.NOT_FOUND }
            );
        }

        return new NextResponse(
            JSON.stringify(
                new SuccessResponse(
                    HttpStatus.OK,
                    'Get service query was successful',
                    searchService
                )
            ),
            { status: HttpStatus.OK }
        );
    } catch (error) {
        console.error(error);
        return new NextResponse(
            JSON.stringify(
                new ErrorResponse(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    "Get service query internal server error",
                    error
                )
            ),
            { status: HttpStatus.INTERNAL_SERVER_ERROR }
        );
    }
}

export const DELETE = async (req: NextRequest) => {
    const serviceId = req.nextUrl.pathname.split("/").pop();
    try {
        await connectDB();

        if(!serviceId) {
            return new NextResponse(
                JSON.stringify(
                    new ErrorResponse(
                        HttpStatus.NOT_FOUND,
                        'Delete service query was failed',
                        'ServiceId not found'
                    )
                ),
                { status: HttpStatus.NOT_FOUND }
            );
        }

        const searchService = await Service.findById(serviceId);

        if(!searchService) {
            return new NextResponse(
                JSON.stringify(
                    new ErrorResponse(
                        HttpStatus.NOT_FOUND,
                        'Delete service query was failed',
                        'Service was not found related to provided serviceId'
                    )
                ),
                { status: HttpStatus.NOT_FOUND }
            );
        }

        await Service.findByIdAndDelete(serviceId);

        return new NextResponse(
            JSON.stringify(
                new SuccessResponse(
                    HttpStatus.NO_CONTENT,
                    'Delete service query was successful',
                    'Service deleted successful'
                )
            ),
            { status: HttpStatus.ACCEPTED }
        );

    } catch (error) {
        console.error(error);
            return new NextResponse(JSON.stringify(
                new ErrorResponse(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    'Delete service query internal server error',
                    error
                )
            ),
            { status: HttpStatus.INTERNAL_SERVER_ERROR }
        );
    }
} 

export const PUT = async (req: NextRequest) => {
    try {
        await connectDB();

        const body = await req.json(); 
        const serviceId = req.nextUrl.pathname.split('/').pop();

        if(!serviceId) {
            return new NextResponse(
                JSON.stringify(
                    new ErrorResponse(
                        HttpStatus.NOT_FOUND,
                        'Update service query was failed',
                        'ServiceId not found'
                    )
                ),
                { status: HttpStatus.NOT_FOUND }
            );
        }

        const searchService = await Service.findById(serviceId);

        if(!searchService) {
            return new NextResponse(
                JSON.stringify(
                    new ErrorResponse(
                        HttpStatus.NOT_FOUND,
                        'Update service query was failed',
                        'Service was not found related to provided serviceId'
                    )
                ),
                { status: HttpStatus.NOT_FOUND }
            );
        }

        const updatedService = await Service.findByIdAndUpdate(
            serviceId,
            { $set: body },
            { new: true }
        );

        return new NextResponse(
            JSON.stringify(
                new SuccessResponse(
                    HttpStatus.OK,
                    'Update service query was successful',
                    updatedService
                )
            ),
            { status: HttpStatus.OK }
        );
    } catch (error) {
            console.error(error);
            return new NextResponse(JSON.stringify(
                new ErrorResponse(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    'Update service query internal server error',
                    error
                )
            ),
            { status: HttpStatus.INTERNAL_SERVER_ERROR }
        );
    }
} 