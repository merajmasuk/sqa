import { useState } from "react";

const Payment = function() {
    const [gateway, setGetway] = useState("");
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");

    /**
     * keep track of gateway
     * @param event
     */
    function handleChangeGateway(event) {
        setName(event.target.value);
        console.log(gateway);
    }

    /**
     * keep track of amount
     * @param event
     */
    function handleChangeAmount(event) {
        setAmount(event.target.value);
        console.log(amount);
    }

    /**
     * keep track of currency
     * @param event
     */
    function handleChangeCurrency(event) {
        setCurrency(event.target.value);
        console.log(currency);
    }

    return (
        <div>
            <h1 className="max-w-sm mx-auto" >Payment</h1>

            <form className="max-w-sm mx-auto" method="post">
                <div className="mb-5">
                    <label for="gateway" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gateway</label>
                    <input type="text" id="gateway" value={gateway} onChange={handleChangeGateway} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="bKash" required />

                </div>

                <div class="mb-5">
                    <label for="amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                    <input type="double" id="amount" value={amount} onChange={handleChangeAmount}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1000" required />
                </div>

                <div class="mb-5">
                    <label for="currency" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Currency</label>
                    <input type="text" id="currency" rows={5} value={currency} onChange={handleChangeCurrency} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="BDT" required />
                </div>
                <button type="submit" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Pay</button>

            </form>
        </div>

    );
}

export default Payment;
