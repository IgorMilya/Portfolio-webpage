// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend'
import { ContactFormType } from '@/types'

const resend = new Resend(process.env.RESEND_API_KEY)
const fromEmail = process.env.FROM_EMAIL!
const toEmail = process.env.TO_EMAIL!

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const body1 = body.body as ContactFormType | null;

    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: 'Hello world',
      react: (
        <>
          <h1>{body1?.subject}</h1>
          <p>Thank you for contacting us! {body1?.email}</p>
          <p>New message submitted</p>
          <p>{body1?.message}</p>
        </>
      ),
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
