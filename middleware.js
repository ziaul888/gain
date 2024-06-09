// import { NextResponse } from 'next/server';
//
// export async function middleware(req) {
//     // Log request details for debugging
//     console.log('Request:', req.url, req.headers);
//
//     const token = req.cookies.get('token');
//     console.log({ token }); // Log retrieved token for inspection
//
//     if (!token) {
//         return NextResponse.redirect('/auth/login');
//     }
//
//     return NextResponse.next();
// }
//
// // Define the paths you want to protect
// export const config = {
//     matcher: ['/'],
// };
