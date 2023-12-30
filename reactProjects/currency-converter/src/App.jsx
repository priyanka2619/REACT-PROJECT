import React, { useId, useState } from 'react';
import UseCurrency from './hooks/useCurrency';
import CurrencyInputBox from './components/CurrencyInputBox';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = UseCurrency(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const searchOptions = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredOptions = options.filter((currency) =>
      currency.toLowerCase().includes(searchTerm)
    );
    return filteredOptions;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
      <div className="w-full max-w-md mx-auto bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="mb-4">
            <CurrencyInputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
              searchOptions={searchOptions}
            />
          </div>
          <div className="relative h-1 mb-4">
            <button
              type="button"
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white px-4 py-2 transition duration-300 ease-in-out hover:opacity-80 hover:shadow-md"
              onClick={swap}
            >
              <span className="hidden md:inline">Swap</span>
              <svg
                className="h-4 w-4 md:hidden ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 12l-6 6v-2H4v-2h2l6-6 2 2-6 6 6 6-2 2z"
                  fillRule="evenodd"
                />
              </svg>
            </button>


          </div>
          <div className="mb-4">
            <CurrencyInputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
              onAmountChange={(amount) => setAmount(amount)}
              searchOptions={searchOptions}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white px-4 py-3 rounded-lg transition duration-300 ease-in-out hover:opacity-80 hover:shadow-md"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>


        </form>
      </div>
    </div>
  );
}

export default App;
