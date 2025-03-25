import Service from "@/api/models/Service";
import connectDB from "@/lib/mongodb";
import ErrorResponse from "@/utils/ErrorResponse";
import HttpStatus from "@/utils/HttpStatus";
import SuccessResponse from "@/utils/SuccessResponse";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectDB();
        const services = await Service.find();

        return new NextResponse(
            JSON.stringify(
                new SuccessResponse(
                    HttpStatus.OK,
                    'Get all services query was successful',
                    services
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
                    "Get services query internal server error",
                    error
                )
            ),
            { status: HttpStatus.INTERNAL_SERVER_ERROR }
        );
    }
}

export const POST = async (req: NextRequest) => {
    const body = await req.json(); 
    try {
        await connectDB();

        const newService = await new Service(body);
        const savedService = await newService.save();

        return new NextResponse(
            JSON.stringify(
                new SuccessResponse(
                    HttpStatus.OK,
                    'Create service query was successful',
                    savedService
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
                    "Create service query internal server error",
                    error
                )
            ),
            { status: HttpStatus.INTERNAL_SERVER_ERROR }
        );
    }
}