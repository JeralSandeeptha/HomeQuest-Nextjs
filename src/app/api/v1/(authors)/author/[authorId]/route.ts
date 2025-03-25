import pool from "@/lib/postgresqldb";
import ErrorResponse from "@/utils/ErrorResponse";
import HttpStatus from "@/utils/HttpStatus";
import SuccessResponse from "@/utils/SuccessResponse";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {

        const authorId = req.nextUrl.pathname.split('/').pop();

        if(!authorId) {
            return new NextResponse(
                JSON.stringify(
                    new ErrorResponse(
                        HttpStatus.NOT_FOUND,
                        'Get single author query was failed',
                        'AuthorId not found'
                    )
                ),
                { status: HttpStatus.NOT_FOUND }
            );
        }
        
        const author = await pool.query('SELECT * FROM author WHERE id = $1', [authorId]);

        if(!author.rows.length) {
            return new NextResponse(
                JSON.stringify(
                    new ErrorResponse(
                        HttpStatus.NOT_FOUND,
                        'Get single author query was failed',
                        'Author not found'
                    )
                ),
                { status: HttpStatus.NOT_FOUND }
            );
        }

        return new NextResponse(
            JSON.stringify(
                new SuccessResponse(
                    HttpStatus.OK,
                    'Get single author query was successful',
                    author.rows[0]
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
                    'Get single author query internal server error',
                    error
                )
            ),
            { status: HttpStatus.INTERNAL_SERVER_ERROR }
        );
    }
}

export const DELETE = async (req: NextRequest) => {
    try {

        const authorId = req.nextUrl.pathname.split('/').pop();

        if(!authorId) {
            return new NextResponse(
                JSON.stringify(
                    new ErrorResponse(
                        HttpStatus.NOT_FOUND,
                        'Delete author query was failed',
                        'AuthorId not found'
                    )
                ),
                { status: HttpStatus.NOT_FOUND }
            );
        }
        
        const author = await pool.query('SELECT * FROM author WHERE id = $1', [authorId]);

        if(!author.rows.length) {
            return new NextResponse(
                JSON.stringify(
                    new ErrorResponse(
                        HttpStatus.NOT_FOUND,
                        'Delete author query was failed',
                        'Author not found'
                    )
                ),
                { status: HttpStatus.NOT_FOUND }
            );
        }

        await pool.query('DELETE FROM author WHERE id = $1', [authorId]);

        return new NextResponse(
            JSON.stringify(
                new SuccessResponse(
                    HttpStatus.NO_CONTENT,
                    'Delete author query was successful',
                    author.rows[0]
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
                    'Delete author query internal server error',
                    error
                )
            ),
            { status: HttpStatus.INTERNAL_SERVER_ERROR }
        );
    }
}

export const PUT = async (req: NextRequest) => {
    try {

        const authorId = req.nextUrl.pathname.split('/').pop();
        const body = await req.json();

        if(!authorId) {
            return new NextResponse(
                JSON.stringify(
                    new ErrorResponse(
                        HttpStatus.NOT_FOUND,
                        'Update author query was failed',
                        'AuthorId not found'
                    )
                ),
                { status: HttpStatus.NOT_FOUND }
            );
        }
        
        const author = await pool.query('SELECT * FROM author WHERE id = $1', [authorId]);

        if(!author.rows.length) {
            return new NextResponse(
                JSON.stringify(
                    new ErrorResponse(
                        HttpStatus.NOT_FOUND,
                        'Update author query was failed',
                        'Author not found'
                    )
                ),
                { status: HttpStatus.NOT_FOUND }
            );
        }

        await pool.query('UPDATE author SET name = $1, description = $2, image = $3 WHERE id = $4', [body.name, body.description, body.image, authorId]);

        return new NextResponse(
            JSON.stringify(
                new SuccessResponse(
                    HttpStatus.CREATED,
                    'Update author query was successful',
                    author.rows[0]
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
                    'Update author query internal server error',
                    error
                )
            ),
            { status: HttpStatus.INTERNAL_SERVER_ERROR }
        );
    }
}