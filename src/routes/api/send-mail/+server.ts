import { SENDGRID_API_Key } from "$env/static/private";
import sgmail from "@sendgrid/mail";
import { json } from "@sveltejs/kit";
sgmail.setApiKey(SENDGRID_API_Key);
export async function POST({request}){
    const {contactName, contactMail, informationAboutProject} = await request.json();
    if(!contactMail || !contactName || !informationAboutProject){
        json({message: "Could not send email. Missing data."}, {status: 400});
    }
    const message=
    {
        to: 'bashirhatoum1@gmail.com',
        from: 'bashirhatoum1@gmail.com',
        subject: 'Contact Form on your portfolio',
        html: `Somebody used the contact form on your site. <br/>
        Name: ${contactName},
        Email: ${contactMail},
        Information about the project: ${informationAboutProject}`,

    };
    try{
        await sgmail.send(message);
        return json({emailSentSuccessfully: true });
    } catch (err) {
        return json({err}, {status: 500});
    }
    
}