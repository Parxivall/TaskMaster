import { Request, Response } from 'express';

export const generateAuthUrl = async (req: Request, res: Response): Promise<void> => {
    const clientId = '660395553220-tm5pd5s9l8icsl115kt7hp66hah6342j.apps.googleusercontent.com';
    const redirectUri = 'http://localhost:3000/home';
    const responseType = 'code';
    const scope = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
  
    const encodedClientId = encodeURIComponent(clientId);
    const encodedRedirectUri = encodeURIComponent(redirectUri);
    const encodedScope = encodeURIComponent(scope);
  
    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${encodedClientId}&redirect_uri=${encodedRedirectUri}&response_type=${responseType}&scope=${encodedScope}`;
  
    res.status(200).json({ authUrl });
}

export const getGoogleUser = async (req: Request, res: Response): Promise<void> => {
    const code = req.query.code;
    const clientId = '660395553220-tm5pd5s9l8icsl115kt7hp66hah6342j.apps.googleusercontent.com';
    const clientSecret = '3gNzI5Q6Q6J9Q6J9Q6J9Q6J9';
    const redirectUri = 'http://localhost:3000/home';
    console.log('code', code);0
}
