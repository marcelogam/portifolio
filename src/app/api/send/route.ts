import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['moreiramarcelo.cientista.cc@gmail.com'],
      subject: subject,
      html: `
        <div>
          <h1>${subject}</h1>
          <p>${message}</p>
          <p>Written by: ${email}</p>
        </div>
      `
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);

  } catch (error) {
    console.log("CATCH ERROR:", error);
    return Response.json({ error }, { status: 500 });
  }
}