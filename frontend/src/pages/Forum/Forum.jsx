import { useState } from "react";

const Forum = function() {
    
    /**
     * set useState to keep record of name email message
     */
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    /***
     * keep track of name
     */
    function handleChangeName(event) {
        setName(event.target.value);
        console.log(name);
    }

    /**
     * keep track of email
     * @param  event 
     */
    function handleChangeEmail(event) {
        setEmail(event.target.value);
        console.log(email);
    }

    /***
     * Keep track of typing message
     */
    function handleChangeMessage(event) {
        setMessage(event.target.value);
        console.log(message);
    }

    /**
     * Create Form entry for Forum and Discussion
     */
    return (
        <div>
            <h1 className="max-w-sm mx-auto" >Forum & Discussion</h1>

            <form className="max-w-sm mx-auto" method="post">
                <div className="mb-5">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                    <input type="text" id="name" value={name} onChange={handleChangeName} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abdul Mukit" required />

                </div>

                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" value={email} onChange={handleChangeEmail}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@gmail.com" required />
                </div>

                <div class="mb-5">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea type="text" id="message" rows={5} value={message} onChange={handleChangeMessage} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hello there" required />
                </div>
                <button type="submit" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">submit</button>

            </form>
        </div>
        
    );
}

export default Forum;