// EmailJS helper integration
// Connects contact form responses and quote queries

export interface EmailParams {
  name: string;
  email: string;
  subject?: string;
  message: string;
  type?: "contact" | "quote";
  details?: string;
}

export interface EmailResponse {
  success: boolean;
  status?: number;
  error?: string;
}

export async function sendEmail(params: EmailParams): Promise<EmailResponse> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_d353yqa";
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_m52knit";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "hSYfNb15RvYbWpAMY";

  console.log("Sending email via EmailJS with params:", {
    serviceId,
    templateId,
    publicKey,
    params,
  });

  if (serviceId === "service_mock" || templateId === "template_mock") {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true };
  }

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          to_email: "hello.mirextech@gmail.com",
          from_name: params.name,
          from_email: params.email,
          subject: params.subject || `MirexTech Inquiry - ${params.type}`,
          message: `${params.message} \n\nAdditional Details: ${params.details || "N/A"}`,
        },
      }),
    });

    const result = await response.text();
    console.log("EmailJS Status:", response.status);
    console.log("EmailJS Response:", result);

    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, status: response.status, error: result };
    }
  } catch (error: any) {
    console.error("EmailJS sending error:", error);
    return { success: false, error: error.message || String(error) };
  }
}
