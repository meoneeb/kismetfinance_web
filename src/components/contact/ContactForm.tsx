export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="mx-auto max-w-4xl border bg-white p-4 md:p-16">
      <form className="flex flex-col gap-4">
        {/* ... your existing form fields ... */}

        <button type="submit">Submit</button>
      </form>

      {/* Embedded Zoho iframe form */}
      <div className="mt-10">
        <iframe
          aria-label="Contact Us"
          frameBorder="0"
          style={{ height: "500px", width: "100%", border: "none" }}
          src="https://forms.zohopublic.com.au/kismetfinancegroup1/form/ContactUs/formperma/v__eca-m_N0ItXlPSYZHebm5IAovJav3E4E8Jndu7fA"
        ></iframe>
      </div>
    </div>
  );
}
