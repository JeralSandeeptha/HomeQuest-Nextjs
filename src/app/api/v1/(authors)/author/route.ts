import pool from "@/lib/postgresqldb";
import ErrorResponse from "@/utils/ErrorResponse";
import HttpStatus from "@/utils/HttpStatus";
import SuccessResponse from "@/utils/SuccessResponse";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {

        const authors = await pool.query('SELECT * FROM author');

        return new NextResponse(
            JSON.stringify(
                new SuccessResponse(
                    200,
                    'Get all authors query was successful',
                    authors.rows
                )
            ),
            { status: HttpStatus.OK }
        );
        
    } catch (error) {
        console.error(error);
        return new NextResponse(
            JSON.stringify(
                new ErrorResponse(
                    500,
                    'Get all authors query internal server error',
                    error
                )
            ),
            { status: HttpStatus.INTERNAL_SERVER_ERROR }
        );
    }
}

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();

        const newAuthor = await pool.query(
            'INSERT INTO author (name, description, image) VALUES ($1, $2, $3)',
            [body.name, body.description, body.image]
        );

        return new NextResponse(
            JSON.stringify(
                new SuccessResponse(
                    HttpStatus.CREATED,
                    'Create author query was successful',
                    newAuthor.rows[0]
                )
            ),
            { status: HttpStatus.CREATED }
        );
    } catch (error) {
        console.error(error);
        return new NextResponse(
            JSON.stringify(
                new ErrorResponse(
                    500,
                    'Create author query internal server error',
                    error
                )
            ),
            { status: HttpStatus.INTERNAL_SERVER_ERROR }
        );
    }
}