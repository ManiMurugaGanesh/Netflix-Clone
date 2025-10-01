function Footer() {
  return (
    <div className="pb-20 text-[16px] text-gray-400 bg-black px-10">
      {/* Top Links */}
      <div className="underline">
        <div className="mb-10">
          Questions? Call 000-800-919-1743
        </div>

        <div className="flex justify-between flex-wrap gap-5">
          <ul className="w-[200px] space-y-2">
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>

          <ul className="w-[200px] space-y-2">
            <li>Help Centre</li>
            <li>Cookies</li>
            <li>Jobs</li>
            <li>Legal Notices</li>
          </ul>

          <ul className="w-[200px] space-y-2">
            <li>Accounts</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </ul>

          <ul className="w-[200px] space-y-2">
            <li>Media Centre</li>
            <li>Terms Of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Language Dropdown */}
      <div className="border border-gray-600 inline-block py-1 px-3 my-5 rounded">
        <select 
          className="bg-black text-white outline-none"
          defaultValue="English"
        >
          <option value="English">English</option> 
          <option value="Tamil">தமிழ்</option>  
        </select>
      </div>

      {/* Bottom Section */}
      <div className="mt-10">
        <div>Netflix India</div>
        <div className="text-[12px] mt-2">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className="text-blue-500 underline cursor-pointer">Learn more.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
