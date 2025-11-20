import { google } from 'googleapis';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings?.settings?.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-mail',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings?.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Gmail not connected');
  }
  return accessToken;
}

export async function getUncachableGmailClient() {
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.gmail({ version: 'v1', auth: oauth2Client });
}

export async function sendContactNotification(data: {
  name: string;
  phone: string;
  email: string;
  service?: string | null;
  message?: string | null;
}) {
  try {
    const gmailClient = await getUncachableGmailClient();
    
    const emailContent = `
New Quote Request from Danny's Diving Services Website

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Service: ${data.service || "Not specified"}

Message:
${data.message || "No message provided"}

---
Submitted at: ${new Date().toLocaleString()}
    `.trim();

    const fromEmail = process.env.FROM_EMAIL || "dannysdivingservices@gmail.com";
    const toEmail = process.env.CONTACT_EMAIL || "dannysdivingservices@gmail.com";

    const message = [
      `From: ${fromEmail}`,
      `To: ${toEmail}`,
      `Subject: New Quote Request from ${data.name}`,
      '',
      emailContent
    ].join('\n');

    const encodedMessage = Buffer.from(message)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    const result = await gmailClient.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage,
      },
    });

    console.log("Email notification sent successfully via Gmail:", result.data);
    return result;
  } catch (error) {
    console.error("Failed to send email notification via Gmail:", error);
    throw error;
  }
}
