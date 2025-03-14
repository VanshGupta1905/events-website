const Page=()=>{
    return (
        <div className='about_us' >
            <h1>About us Page</h1>
            <div className='about_us_content'>
                <h2>Our Story</h2>
                <p>
                    Founded in 2010, our company has grown from a small startup to an industry leader. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                </p>
                
                <h2>Our Mission</h2>
                <p>
                    We strive to deliver exceptional products and services that exceed our customers&apos; expectations while maintaining our commitment to sustainability and ethical business practices.
                </p>
                
                <div className="info-box">
                    <h3>Key Facts</h3>
                    <ul>
                        <li><strong>Founded:</strong> 2010</li>
                        <li><strong>Headquarters:</strong> San Francisco, CA</li>
                        <li><strong>Employees:</strong> 250+</li>
                        <li><strong>Countries Served:</strong> 35</li>
                    </ul>
                </div>
                
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Innovation:</strong> We constantly seek new ideas and approaches to solve complex problems.</li>
                    <li><strong>Integrity:</strong> We conduct business with honesty, transparency, and ethical standards.</li>
                    <li><strong>Excellence:</strong> We strive for the highest quality in everything we do.</li>
                    <li><strong>Collaboration:</strong> We believe in the power of teamwork and diverse perspectives.</li>
                </ul>
                
                <h2>Leadership Team</h2>
                <div className="team-member">
                    <h3>Jane Doe</h3>
                    <p className="title">Chief Executive Officer</p>
                    <p>Jane brings over 20 years of industry experience and has led the company since its founding.</p>
                </div>
                <div className="team-member">
                    <h3>John Smith</h3>
                    <p className="title">Chief Technology Officer</p>
                    <p>John oversees all technical aspects of the company and drives our innovation strategy.</p>
                </div>
                <div className="team-member">
                    <h3>Sarah Johnson</h3>
                    <p className="title">Chief Marketing Officer</p>
                    <p>Sarah leads our global marketing initiatives and brand development efforts.</p>
                </div>
                
                <h2>Awards & Recognition</h2>
                <ul>
                    <li>2023 - Innovation Award, Tech Industry Association</li>
                    <li>2022 - Best Workplace Culture, Business Excellence Awards</li>
                    <li>2021 - Sustainability Leadership Award, Green Business Council</li>
                    <li>2020 - Fastest Growing Company, Business Insider</li>
                </ul>
                
                <h2>Get in Touch</h2>
                <p> We&apos;d love to hear from you! Contact us at <a href="mailto:info@company.com">info@company.com</a> or call us at (555) 123-4567.</p>
            </div>
        </div>
    )
}
export default Page