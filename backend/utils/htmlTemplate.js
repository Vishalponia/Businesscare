export function registrationHtml(data) {
  // Basic inline CSS — tweak for better PDF look
  const categories = Array.isArray(data.categories) ? data.categories.join(", ") : data.categories || "";
  const telecasts = Array.isArray(data.telecastSegments) ? data.telecastSegments.join(", ") : data.telecastSegments || "";

  return `
  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8" />
    <title>BusinessCare Registration</title>
    <style>
      body { font-family: Arial, Helvetica, sans-serif; color: #111; padding: 30px; }
      .header { text-align:center; margin-bottom: 20px; }
      h1 { color: #b97f00; }
      .section { margin-bottom: 14px; border: 1px solid #ddd; padding: 10px; border-radius: 6px; }
      .label { font-weight: 700; color:#333; width: 220px; display:inline-block; }
      .value { display:inline-block; }
      .grid { display:flex; flex-wrap:wrap; gap:6px; }
      .row { margin-bottom:6px; }
      footer { margin-top: 20px; font-size: 12px; color:#666; }
    </style>
  </head>
  <body>
    <div class="header">
      <h1>BUSINESS CARE — REGISTRATION FORM</h1>
      <div>${new Date().toLocaleString()}</div>
    </div>

    <div class="section">
      <h3>Client Information</h3>
      <div class="row"><span class="label">Founder Full Name:</span><span class="value">${data.founderName||""}</span></div>
      <div class="row"><span class="label">Authorised Rep:</span><span class="value">${data.representativeName||""}</span></div>
      <div class="row"><span class="label">Address:</span><span class="value">${data.address||""}</span></div>
      <div class="row"><span class="label">City:</span><span class="value">${data.city||""}</span>
      <span class="label" style="margin-left:20px">State:</span><span class="value">${data.state||""}</span></div>
      <div class="row"><span class="label">Zip:</span><span class="value">${data.zip||""}</span></div>
      <div class="row"><span class="label">Email:</span><span class="value">${data.email||""}</span>
      <span class="label" style="margin-left:20px">Phone:</span><span class="value">${data.phone||""}</span></div>
    </div>

    <div class="section">
      <h3>Business Registration Details</h3>
      <div class="row"><span class="label">Company Name:</span><span class="value">${data.companyName||""}</span></div>
      <div class="row"><span class="label">GST:</span><span class="value">${data.gst||""}</span>
      <span class="label" style="margin-left:20px">PAN:</span><span class="value">${data.pan||""}</span></div>
      <div class="row"><span class="label">CIN:</span><span class="value">${data.cin||""}</span>
      <span class="label" style="margin-left:20px">MSME:</span><span class="value">${data.msme||""}</span></div>
      <div class="row"><span class="label">IEC:</span><span class="value">${data.iec||""}</span></div>
      <div class="row"><span class="label">Gender:</span><span class="value">${data.gender||""}</span></div>
    </div>

    <div class="section">
      <h3>Business Category</h3>
      <div class="row">${categories}</div>
    </div>

    <div class="section">
      <h3>Telecast Segment</h3>
      <div class="row">${telecasts}</div>
    </div>

    <div class="section">
      <h3>Selected Channel</h3>
      <div class="row">${data.selectedChannel||""}</div>
    </div>

    <div class="section">
      <h3>Consent & Signature</h3>
      <div class="row"><span class="label">Signatory Name:</span><span class="value">${data.signName||""}</span></div>
      <div class="row"><span class="label">Place:</span><span class="value">${data.place||""}</span>
      <span class="label" style="margin-left:20px">Date:</span><span class="value">${data.date||""}</span></div>
    </div>

    <footer>
      This PDF was auto-generated from the online registration form.
    </footer>
  </body>
  </html>
  `;
}
