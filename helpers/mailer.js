import nodemailer from 'nodemailer';

export const sendEmail = async ({ email, emailType, userId }) => {

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "maddison53@ethereal.email",
                pass: "jn7jnAPss4f63QBp6D",
            },
        });


        const mailOptions = {
            from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
            to: "bar@example.com, baz@example.com",
            subject: "Hello ✔",
            text: "Hello world?", // plain‑text body
            html: "<b>Hello world?</b>", // HTML body  
        }

        // Terminate for now this login, system, "which is email base login"

    } catch (error) { }

}