import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { Resend } from 'resend';


const client = new MongoClient(process.env.BETTER_AUTH_DB_URL!);
const database = client.db('fitlog-auth-db');

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({

    emailAndPassword: { 
    enabled: true,
    requireEmailVerification: true, 
    
    sendResetPassword: async ({ user, url }, request) => {
        void resend.emails.send({
            from: 'Fitlog <onboarding@resend.dev>',
            to: user.email,
            subject: 'Reset your password',
            html: `
            <h4>Reset your password</h4>
            Click the link to reset your password: ${url}
            <p>Ignore this email if you didn't request a password reset.</p>
            `
        });
    }
},

    emailVerification: {
        sendVerificationEmail: async({ user, url }) => {
            void resend.emails.send({
                from: 'Fitlog <onboarding@resend.dev>',
                to: user.email,
                subject: 'Verify your email address',
                html: `
                <h4>Verify your email address</h4>
                Click the link to verify your email: ${url}
                `
            })
        },
        sendOnSignUp: true,
		autoSignInAfterVerification: true,
		expiresIn: 3600 
    },

socialProviders: {
    google: { 
        clientId: process.env.GOOGLE_CLIENT_ID as string, 
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
    }, 
},

user: {
    changeEmail: {
        enabled: true,
    },
},

account: {
    accountLinking: {
        enabled: true,
        trustedProviders: ["google"]
    }
},

    database: mongodbAdapter(database, {
        client,
    })
})