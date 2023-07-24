import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const formData = e.target;
        const name = formData.name.value;
        const email = formData.email.value;
        const message = formData.message.value;
        const info = {
            name,
            email,
            message
        }
        for (const property in info) {
            if (info.hasOwnProperty(property)) {
                formData.append(property, info[property]);
            }
        }

        if (formData !== null) {
            emailjs.sendForm('service_g66z9h5', 'template_w4dlvjt', formData, "WdRjephW6B8q1428b")
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
    }

    return (
        <div id='contract' className="w-5/6 mx-auto mb-32 grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-blue-800 border-2 border-blue-500" style={{ boxShadow: '2px 3px 12px rgb(16, 185, 129)' }}>
            <div className="flex flex-col justify-between">
                <div className="space-y-2 lg:-ml-14">
                    <h2 className="text-4xl lg:text-left font-bold lg:text-5xl flex">CONTACT <span className='hidden lg:inline-block ml-4'> Us</span>
                    </h2>
                    <div className="text-blue-500 pt-6">If you have any query?? Please, Contact me</div>
                </div>
                <img src="https://hkbyte.com/doodles/Contact%20Doodle.svg" alt="" className="w-full h-full animate-bounce mt-7" />
            </div>
            <form onSubmit={handleSubmit} action="" method="POST" noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label htmlFor="name" className="text-sm">Full name</label>
                    <input id="name" name='name' type="text" placeholder="" className="w-full p-3 rounded bg-gray-100 text-blue-500 font-semibold border-2 border-blue-500" />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input id="email" type="email" name='email' className="w-full p-3 rounded bg-gray-100 text-blue-500 font-semibold border-2 border-blue-500" />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" name='message' className="w-full p-3 rounded bg-gray-100 text-blue-500 font-semibold border-2 border-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded border border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white hover:scale-110 duration-500">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;