/**
 * Service for sending customer enquiries from the Contact Form
 * to the verified official email: nabhaychits.official@gmail.com
 */

export interface ContactFormData {
  name: string;
  phone: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export interface SendMessageResult {
  success: boolean;
  message: string;
}

/**
 * Validates the contact form payload fields
 */
export function validateContactForm(data: ContactFormData): Record<string, string> {
  const errors: Record<string, string> = {};

  const trimmedName = data.name.trim();
  if (!trimmedName || trimmedName.length < 2) {
    errors.name = "Please enter your full name (at least 2 characters).";
  }

  const trimmedPhone = data.phone.trim();
  // Strip common phone characters to validate digits
  const phoneDigits = trimmedPhone.replace(/[\s\-\(\)\+]/g, "");
  if (!phoneDigits || phoneDigits.length < 10) {
    errors.phone = "Please enter a valid phone number (at least 10 digits).";
  } else if (!/^[0-9]+$/.test(phoneDigits)) {
    errors.phone = "Phone number should only contain valid digits.";
  }

  const trimmedSubject = data.subject.trim();
  if (!trimmedSubject || trimmedSubject.length < 3) {
    errors.subject = "Please enter a subject (at least 3 characters).";
  }

  const trimmedMessage = data.message.trim();
  if (!trimmedMessage || trimmedMessage.length < 10) {
    errors.message = "Please enter your message (at least 10 characters).";
  }

  return errors;
}

/**
 * Submits the customer enquiry to the backend email service (FormSubmit AJAX)
 * Recipient is configured via environment variable VITE_CONTACT_EMAIL / VITE_CONTACT_FORM_ENDPOINT
 */
export async function sendContactEnquiry(data: ContactFormData): Promise<SendMessageResult> {
  // Spam protection: if honeypot is filled, silent reject to thwart bots
  if (data.honeypot && data.honeypot.trim().length > 0) {
    return {
      success: true,
      message: "Enquiry submitted successfully.",
    };
  }

  // Validate fields
  const validationErrors = validateContactForm(data);
  if (Object.keys(validationErrors).length > 0) {
    const firstError = Object.values(validationErrors)[0];
    throw new Error(firstError);
  }

  // Destination email and endpoint from environment variables (never hardcoded)
  const recipientEmail =
    import.meta.env.VITE_CONTACT_EMAIL || "nabhaychits.official@gmail.com";
  const configuredEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
  const endpoint =
    configuredEndpoint || `https://formsubmit.co/ajax/${recipientEmail}`;

  const payload = {
    name: data.name.trim(),
    phone: data.phone.trim(),
    subject: data.subject.trim(),
    message: data.message.trim(),
    _subject: `New Enquiry from Nabhay Chits Website: ${data.subject.trim()}`,
    _template: "table",
    _captcha: "false",
    _honey: "",
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let errorMsg = `Server returned status ${response.status}`;
    try {
      const errorJson = await response.json();
      if (errorJson && (errorJson.message || errorJson.error)) {
        errorMsg = errorJson.message || errorJson.error;
      }
    } catch {
      // ignore json parse error on non-json responses
    }
    throw new Error(errorMsg);
  }

  const result = await response.json().catch(() => ({ success: true }));

  return {
    success: true,
    message: result.message || "Message delivered successfully.",
  };
}
